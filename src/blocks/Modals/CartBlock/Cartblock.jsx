import { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../components/Button/Button'
import CartBox from '../../../components/Modals/CartBox/CartBox'
import cartImg from '../../../img/CartBlock/cart.svg'
import close from '../../../img/CartBlock/close.svg'
import {
	decrementQty,
	deleteCart,
	incrementQty,
} from '../../../redux/slices/cartSlice'
import ModalWrapper from '../../../wrappers/ModalWrapper/ModalWrapper'
import styles from './style.module.scss'

const Cartblock = ({
	isVisibleCart,
	setIsVivsibleCart,
	setIsVisibleSubmit,
}) => {
	const dispatch = useDispatch()
	const cart = useSelector(state => state.cart.items)
	const finalPrice = useSelector(state => state.cart.finalPrice)
	const oldPrice = useSelector(state => state.cart.finalOldPrice)
	const qty = useSelector(state => state.cart.qty)
	const handleCloseCart = () => {
		setIsVivsibleCart(false)
	}
	const handleOpenSubmit = () => {
		setIsVivsibleCart(false)
		setIsVisibleSubmit(true)
		// start facebook event pixel
		// fbq('track', 'InitiateCheckout')
		// end facebook event pixel
	}
	let arrayPrice = String(finalPrice).split('')
	let countPrice = 0

	for (let i = arrayPrice.length - 1; i > 0; i--) {
		if (countPrice === 2) {
			arrayPrice.splice(i, 0, ' ') // Вставляем пробел после каждых трех символов
			countPrice = 0 // Сбрасываем счетчик
		} else {
			countPrice++ // Увеличиваем счетчик
		}
	}

	arrayPrice = arrayPrice.join('') // Объединяем массив обратно в строку и выводим

	let arrayOldPrice = String(oldPrice).split('')
	let countOldPrice = 0

	for (let i = arrayOldPrice.length - 1; i > 0; i--) {
		if (countOldPrice === 2) {
			arrayOldPrice.splice(i, 0, ' ') // Вставляем пробел после каждых трех символов
			countOldPrice = 0 // Сбрасываем счетчик
		} else {
			countOldPrice++ // Увеличиваем счетчик
		}
	}

	arrayOldPrice = arrayOldPrice.join('') // Объединяем массив обратно в строку и выводим

	const handleDeleteCart = () => {
		dispatch(deleteCart())
	}
	return (
		<ModalWrapper isVisible={isVisibleCart} handleClose={handleCloseCart}>
			<header className={styles.header}>
				<h2 className={styles.header_title}>Кошик</h2>
				<img
					draggable='false'
					className={styles.close}
					src={close}
					alt=''
					onClick={handleCloseCart}
				/>
			</header>
			<main className={styles.main}>
				{qty === 0 && (
					<div className={styles.cart_free}>
						<img
							draggable='false'
							className={styles.cart_free_img}
							src={cartImg}
							alt=''
						/>
						<h3 className={styles.cart_free_title}>Кошик пустий.</h3>
						<h4 className={styles.cart_free_text}>
							Але це можна легко виправити)
						</h4>
						<Button
							text='Продовжити покупки'
							className={styles.button_continue}
							onClick={handleCloseCart}
						/>
					</div>
				)}
				{qty > 0 && (
					<>
						<div className={styles.main_list}>
							{cart.map(el => (
								<CartBox
									key={el.id}
									heroImg={el.heroImg}
									name={el.name}
									color={el.color}
									size={el.size}
									size2={el.size2}
									who={el.who}
									division={el.division}
									category={el.category}
									count={el.qty}
									old_price={el.old_price}
									price={el.price}
									page={el.page}
									article={el.article}
									onClickInc={() => dispatch(incrementQty(el))}
									onClickDec={() => dispatch(decrementQty(el))}
								/>
							))}
						</div>
						<div className={styles.btnDeleteCart_section}>
							<Button
								text='Очистити кошик'
								className={styles.button_deleteCart}
								onClick={handleDeleteCart}
							/>
						</div>

						<div className={styles.main_buttons}>
							<Button
								text='Продовжити покупки'
								className={styles.button_continue}
								onClick={handleCloseCart}
							/>
							<div className={styles.main_buttons_right}>
								<div className=''>
									<p className={styles.old_price}>{arrayOldPrice} ₴</p>
									<p className={styles.price}>{arrayPrice} ₴</p>
								</div>
								<div className={styles.submit_button_section}>
									<Button
										text='Оформити замовлення'
										className={styles.button_submit}
										onClick={handleOpenSubmit}
									/>
								</div>
							</div>
						</div>
					</>
				)}
			</main>
			<footer className={styles.footer}></footer>
		</ModalWrapper>
	)
}

export default memo(Cartblock)
