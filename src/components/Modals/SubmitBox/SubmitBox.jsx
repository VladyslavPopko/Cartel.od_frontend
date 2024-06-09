import { memo } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Button from '../../Button/Button'
import styles from './style.module.scss'

const SubmitBox = () => {
	const qty = useSelector(state => state.cart.qty)
	const finalPrice = useSelector(state => state.cart.finalPrice)
	return (
		<div className={styles.section}>
			<h2 className={styles.title}>Разом:</h2>
			<div className={styles.count}>
				<h3>{qty} ТОВАРИ НА СУМУ</h3>
				<h4>{finalPrice} ₴</h4>
			</div>
			<div className={styles.delivery}>
				<h3>ВАРТІСТЬ ДОСТАВКИ:</h3>
				<h4>ЗА ТАРИФАМИ ПЕРЕВІЗНИКА</h4>
			</div>
			<hr />
			<div className={styles.price}>
				<h3>ДО СПЛАТИ: </h3>
				<h4>{finalPrice} ₴</h4>
			</div>
			<Button
				type='submit'
				text='ЗАМОВЛЕННЯ ПІДТВЕРДЖУЮ'
				className={styles.button}
			/>
			<hr />
			<div className={styles.footer}>
				<h3 className={styles.footer_title}>
					Підтверджуючи замовлення, я приймаю умови:
				</h3>
				<NavLink className={styles.link} to='/politics'>
					Положення про збирання та захист персональних даних
				</NavLink>
				<br></br>
				<NavLink className={styles.link} to='/asign'>
					Користувальницької угоди
				</NavLink>
			</div>
		</div>
	)
}

export default memo(SubmitBox)
