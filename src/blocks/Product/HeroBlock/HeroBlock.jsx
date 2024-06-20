import styles from './style.module.scss'

import cn from 'classnames'
import { memo, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from '../../../components/Button/Button'
import ColorSelectBox from '../../../components/Product/ColorSelectBox/ColorSelectBox'
import SizeSelectorBox from '../../../components/Product/SizeSelectorBox/SizeSelectorBox'
import SliderHomeBox from '../../../components/Product/SliderHomeBox/SliderHomeBox'
import { addToCart } from '../../../redux/slices/cartSlice'

const HeroBlock = ({
	setIsVisibleSizetable,
	selected,
	setSelected,
	selected2,
	setSelected2,
	addNotification,
	setIsVisibleGallery,
	productData,
	isActiveColor,
	setIsActiveColor,
}) => {
	const title = productData?.name
	let article = productData?.article

	if (productData?.name) document.title = `Cartel - ${productData?.name}`

	const dispatch = useDispatch()
	const handleAddToCart = () => {
		const cart = { ...productData }
		selected ? (cart.size = selected) : (cart.size = 'Уточнити')
		selected2 ? (cart.size2 = selected) : (cart.size2 = 'Уточнити')

		dispatch(addToCart(cart))
		addNotification(true)
		setTimeout(addNotification, 2000, false)
	}
	const handleSizetable = () => {
		setIsVisibleSizetable(true)
	}

	const [isAvailible, setIsAvailible] = useState(false)

	useEffect(() => {
		if (productData?.availibleSize[0] === undefined) {
			setIsAvailible(true)
		} else {
			setIsAvailible(false)
			productData?.availibleSize?.map(element => {
				if (element === '+') setIsAvailible(true)
			})
		}
	}, [productData?.availibleSize])

	let price = productData?.price
	let old_price = productData?.old_price
	let arrayPrice = String(price).split('')
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

	let arrayOldPrice = String(old_price).split('')
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

	return (
		<div>
			<div className={cn(styles.wrapper)}>
				<div className={styles.content}>
					<div className={styles.content_top}>
						<div className={styles.content_top_item}>
							<p className={styles.title}>{title}</p>
							<p className={styles.article}>Артикул: {article}</p>
							{productData?.color && (
								<>
									<p className={styles.text_color}>колір:</p>
									<div className={styles.color_list}>{productData?.color}</div>
								</>
							)}

							<p className={styles.price_text}>Стара ціна:</p>
							<p className={styles.price_old}>{arrayOldPrice} грн</p>
							<p className={styles.price}>
								<span className={styles.price_select}>{arrayPrice}</span> грн.
							</p>

							<>
								<div className={styles.size}>
									{productData?.size[0] && !productData?.size2[0] && (
										<>
											<p className={styles.size_text}>Розмір:</p>

											<p
												className={styles.size_table}
												onClick={handleSizetable}
											>
												таблиця розмірів
											</p>
										</>
									)}
									{productData?.size[0] && productData?.size2[0] && (
										<>
											<p className={styles.size_text}>Розмір верх:</p>

											<p
												className={styles.size_table}
												onClick={handleSizetable}
											>
												таблиця розмірів
											</p>
										</>
									)}
								</div>
								{productData?.size[0] && !productData?.size2[0] && (
									<>
										{productData?.size && (
											<div className={styles.select}>
												<SizeSelectorBox
													availible={productData?.availibleSize}
													productData={productData?.size}
													selected={selected}
													setSelected={setSelected}
												/>
											</div>
										)}
									</>
								)}
								{productData?.size[0] && productData?.size2[0] && (
									<>
										{productData?.size && (
											<div className={styles.select}>
												<SizeSelectorBox
													availible={productData?.availibleSize}
													productData={productData?.size}
													selected={selected}
													setSelected={setSelected}
												/>
											</div>
										)}
										<div className={styles.size}>
											{productData?.size2[0] && (
												<>
													<p className={styles.size_text}>Розмір низ</p>
												</>
											)}
										</div>
										{productData?.size2[0] && (
											<div className={styles.select}>
												<SizeSelectorBox
													availible={productData?.availibleSize2}
													productData={productData?.size2}
													selected={selected2}
													setSelected={setSelected2}
												/>
											</div>
										)}
									</>
								)}
							</>

							{productData?.colorForSelect && (
								<ColorSelectBox
									productData={productData}
									isActive={isActiveColor}
									setIsActive={setIsActiveColor}
								/>
							)}

							{isAvailible ? (
								<div className={styles.button}>
									<Button
										onClick={handleAddToCart}
										className={styles.btn}
										text='В кошик'
									/>
								</div>
							) : (
								<div className={styles.button}>
									<Button
										className={styles.btn_disable}
										text='Незабаром з’явиться'
									/>
								</div>
							)}
						</div>

						<div className={styles.content_top_item}>
							<div className={styles.slider}>
								<SliderHomeBox
									productData={productData}
									setIsVisibleGallery={setIsVisibleGallery}
								/>
							</div>
						</div>
					</div>
					<p className={styles.content_bottom}>втілення якості та стилю</p>
				</div>
			</div>
		</div>
	)
}

export default memo(HeroBlock)
