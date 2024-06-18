import { memo, useEffect, useState } from 'react'
import Button from '../../../components/Button/Button'
import NotificationBox from '../../../components/NotificationBox/NotificationBox'
import agree from '../../../img/Notifications/agree.svg'
import styles from './style.module.scss'

import { useDispatch, useSelector } from 'react-redux'
import { changePage } from '../../../redux/slices/pageSlice'
import AnimationWrapper from '../../../wrappers/AnimationWrapper'

import CatalogItemBox from '../../../components/Catalog/CatalogItemBox/CatalogItemBox'
import SearchNoSuccessBox from '../../../components/Search/SearchNoSuccessBox/SearchNoSuccessBox'
import SearchNoValue from '../../../components/Search/SearchNoValue/SearchNoValue'
import { DB_API } from '../../../constanses/constanses'
import { changeSearch } from '../../../redux/slices/searchSlice'

const SearchpageBlock = () => {
	const searchValue = useSelector(state => state.search.search)
	const [value, setValue] = useState(searchValue)
	const [isVisibleNotificationAddtoCart, setisVisibleNotificationAddtoCart] =
		useState(false) // Notification Add to Cart

	const dispatch = useDispatch()

	const isPage = useSelector(state => state.pagination.page)

	const [allProducts, setAllProducts] = useState([])

	const dataValue = {
		name: value || 'Пошук',
	}

	const fetchProduct = async () => {
		await fetch(`${DB_API}/product/search`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(dataValue),
		})
			.then(res => res.json())
			.then(data => {
				setAllProducts(data)
			})
	}
	useEffect(() => {
		fetchProduct()
	}, [searchValue])

	const SubmitSearchName = e => {
		e.preventDefault()
		dispatch(changeSearch(value))
		fetchProduct()
	}

	return (
		<>
			<div className={styles.wrapper}>
				<NotificationBox
					text='Товар додано до кошика'
					img={agree}
					isVisibleNotificationAddtoCart={isVisibleNotificationAddtoCart}
				/>

				<form className={styles.input_section} onSubmit={SubmitSearchName}>
					<div className={styles.input_section}>
						<h2 className={styles.title}>ПОШУК</h2>
						<input
							inputMode='search'
							className={styles.input}
							type='text'
							placeholder='Пошук'
							value={value}
							onChange={e => setValue(e.target.value)}
						/>
						<button className={styles.submit} type='submit'></button>
					</div>
				</form>
				<div className={styles.section}>
					<div className={styles.products}>
						<div className={styles.list}>
							{allProducts.map(
								(element, index) =>
									isPage >= index && (
										<AnimationWrapper
											key={index}
											className={styles.Catalog_item_wrapper}
										>
											<div className={styles.Catalog_item}>
												<CatalogItemBox
													element={element}
													setisVisibleNotificationAddtoCart={
														setisVisibleNotificationAddtoCart
													}
												/>
											</div>
										</AnimationWrapper>
									)
							)}
						</div>
						{allProducts.length > isPage && (
							<Button
								onClick={() => {
									dispatch(changePage(isPage + 10))
								}}
								text='Показати ще'
								className={styles.button_more}
							/>
						)}
					</div>
				</div>
				{allProducts.length === 0 && searchValue && (
					<div className={styles.search_nosuccess}>
						<SearchNoSuccessBox
							isSearch={searchValue}
							setisVisibleNotificationAddtoCart={
								setisVisibleNotificationAddtoCart
							}
						/>
					</div>
				)}
				{allProducts.length === 0 && !searchValue && (
					<div className={styles.search_nosuccess}>
						<SearchNoValue />
					</div>
				)}
			</div>
		</>
	)
}

export default memo(SearchpageBlock)
