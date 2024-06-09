import { memo } from 'react'
import boxImg from '../../../img/ThankyouBlock/box.jpg'
import close from '../../../img/ThankyouBlock/close.svg'
import ModalWrapper from '../../../wrappers/ModalWrapper/ModalWrapper'
import styles from './style.module.scss'

const ThankyouBlock = ({ isVisibleThankyou, setIsVisibleThankyou }) => {
	const handleCloseThankYou = () => {
		setIsVisibleThankyou(false)
	}
	return (
		<ModalWrapper
			isVisible={isVisibleThankyou}
			handleClose={handleCloseThankYou}
		>
			<article className={styles.section}>
				<header className={styles.header}>
					<img
						draggable='false'
						className={styles.close}
						src={close}
						alt=''
						onClick={handleCloseThankYou}
					/>
				</header>
				<main className={styles.main}>
					<h2 className={styles.title}>Дякуємо за замовлення!</h2>
					<h3 className={styles.text}>
						Очікуйте на менеджера для уточнення адреси доставки та способу
						оплати
					</h3>
					<img draggable='false' className={styles.img} src={boxImg} alt='' />
					<h3 className={styles.status}>Стан замовлення: упаковується</h3>
				</main>
			</article>
		</ModalWrapper>
	)
}

export default memo(ThankyouBlock)
