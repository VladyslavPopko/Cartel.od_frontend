import React, { memo, useState } from 'react'
import NotificationBox from '../../../components/NotificationBox/NotificationBox'
import { DATA_MEN } from '../../../datas/data_men'
import AnimationWrapper from '../../../wrappers/AnimationWrapper'
import ModalWrapper from '../../../wrappers/ModalWrapper/ModalWrapper'
import CatalogItemBox from '../../components/CatalogItemBox/CatalogItemBox'
import agree from '../../img/Notifications/agree.svg'
import styles from './style.module.scss'

const SearchModalBlock = ({ isVisibleSearch, setIsVisibleSearch }) => {
	const [value, setValue] = useState()
	const [result, setResult] = useState([])
	const [isVisibleNotificationAddtoCart, setisVisibleNotificationAddtoCart] =
		useState(false) // Notification Add to Cart
	const handleCloseModal = () => {
		setIsVisibleSearch(false)
	}
	const SubmitSearchName = e => {
		e.preventDefault()
		setResult(
			DATA_MEN.filter(element =>
				element.search?.toLowerCase().includes(value.toLowerCase())
			)
		)
	}

	return (
		<ModalWrapper isVisible={isVisibleSearch} handleClose={handleCloseModal}>
			<NotificationBox
				text='Товар додано до кошика'
				img={agree}
				isVisibleNotificationAddtoCart={isVisibleNotificationAddtoCart}
			/>
			<div className={styles.section}>
				<p className={styles.title}>ПОИСК</p>
				<form onSubmit={SubmitSearchName}>
					<input
						className={styles.input}
						type='text'
						name=''
						id=''
						placeholder='Введи название'
						onChange={e => setValue(e.target.value)}
						required
					/>
					<button type='submit' className={styles.button}>
						Submit
					</button>
				</form>
				{result && result.length > 0 && (
					<div className={styles.list}>
						{result.map((element, index) => (
							<div className={styles.item} key={index}>
								<AnimationWrapper>
									<CatalogItemBox
										element={element}
										setisVisibleNotificationAddtoCart={
											setisVisibleNotificationAddtoCart
										}
									/>
								</AnimationWrapper>
							</div>
						))}
					</div>
				)}
			</div>
		</ModalWrapper>
	)
}

export default memo(SearchModalBlock)
