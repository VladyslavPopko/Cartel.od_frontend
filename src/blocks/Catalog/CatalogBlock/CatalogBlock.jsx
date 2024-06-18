import { memo, useEffect, useState } from 'react'
import Button from '../../../components/Button/Button'

import NotificationBox from '../../../components/NotificationBox/NotificationBox'
import agree from '../../../img/Notifications/agree.svg'
import styles from './style.module.scss'

import { useDispatch, useSelector } from 'react-redux'
import { changePage } from '../../../redux/slices/pageSlice'
import AnimationWrapper from '../../../wrappers/AnimationWrapper'

import { useParams } from 'react-router-dom'
import CatalogItemBox from '../../../components/Catalog/CatalogItemBox/CatalogItemBox'
import CatalogNoValue from '../../../components/Catalog/CatalogNoValue/CatalogNoValue'
import FilterCatalog from '../../../components/Catalog/FilterCatalog/FilterCatalog'
import SearchNoSuccessBox from '../../../components/Search/SearchNoSuccessBox/SearchNoSuccessBox'
import { DB_API } from '../../../constanses/constanses'

const CatalogBlock = () => {
	document.title = `Cartel - Каталог`
	const isSearch = false
	const [allProducts, setAllProducts] = useState([])
	let dataParam
	const db = useSelector(state => state.db)
	const params = useParams()
	let valueWho, valueDivision, valueCategory
	let path
	if (params.who && db.whos) {
		valueWho = db.whos.filter(who => who.path === params.who)
		dataParam = { who: valueWho[0]?.who }
		path = 'product/find/who'
	}
	if (params.division && db.divisions) {
		valueDivision = db.divisions.filter(
			division => division.path === params.division
		)
		dataParam.division = valueDivision[0]?.division
		path = 'product/find/division'
	}
	if (params.category && db.categories) {
		valueCategory = db.categories.filter(
			category => category.path === params.category
		)
		dataParam.category = valueCategory[0]?.category
		path = 'product/find/category'
	}

	const fetchProduct = async () => {
		await fetch(`${DB_API}/${path}`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(dataParam),
		})
			.then(res => res.json())
			.then(data => {
				data.sort(function (a, b) {
					return b.article - a.article
				})
				data.sort((a, b) => {
					// Проверяем наличие и непустое значение свойства `bannerText`
					const aHasBanner = a.bannerText && a.bannerText.trim() !== ''
					const bHasBanner = b.bannerText && b.bannerText.trim() !== ''

					// Сравниваем объекты
					if (aHasBanner && !bHasBanner) {
						return -1 // a с баннером, b без баннера - a идет первым
					} else if (!aHasBanner && bHasBanner) {
						return 1 // a без баннера, b с баннером - b идет первым
					} else {
						return 0 // оба или оба не имеют баннер - порядок не меняется
					}
				})

				setAllProducts(data)
			})
	}

	useEffect(() => {
		fetchProduct()
	}, [dataParam.who, dataParam.category, dataParam.division])

	const [isVisibleNotificationAddtoCart, setisVisibleNotificationAddtoCart] =
		useState(false) // Notification Add to Cart
	const [isValueSort, setIsValueSort] = useState(false) // sort value
	const [isActiveFilter, setIsActiveFilter] = useState(false) // Нажата ли фильтр
	const [isActiveSort, setIsActiveSort] = useState(false) // Нажата ли сортировка

	const isPage = useSelector(state => state.pagination.page)
	const dispatch = useDispatch()

	isValueSort &&
		((isValueSort === 'За зростанням ціни' &&
			allProducts.sort(function (a, b) {
				return a.price - b.price
			})) ||
			(isValueSort === 'За спаданням ціни' &&
				allProducts.sort(function (a, b) {
					return b.price - a.price
				})) ||
			(isValueSort === 'За новизною' &&
				allProducts.sort(function (a, b) {
					return b.article - a.article
				})))

	return (
		<>
			<FilterCatalog
				dataParam={dataParam}
				isActiveFilter={isActiveFilter}
				setIsActiveFilter={setIsActiveFilter}
				isActiveSort={isActiveSort}
				setIsActiveSort={setIsActiveSort}
				isValueSort={isValueSort}
				setIsValueSort={setIsValueSort}
			/>
			<div className={styles.wrapper}>
				<NotificationBox
					text='Товар додано до кошика'
					img={agree}
					isVisibleNotificationAddtoCart={isVisibleNotificationAddtoCart}
				/>

				<div className={styles.section}>
					<div className={styles.products}>
						<div className={styles.list}>
							{allProducts[0] &&
								allProducts.map(
									(product, index) =>
										isPage >= index && (
											<AnimationWrapper
												key={product.id}
												className={styles.Catalog_item_wrapper}
											>
												<div className={styles.Catalog_item}>
													<CatalogItemBox
														element={product}
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
				{allProducts.length === 0 && isSearch && (
					<div className={styles.search_nosuccess}>
						<SearchNoSuccessBox
							isSearch={isSearch}
							setisVisibleNotificationAddtoCart={
								setisVisibleNotificationAddtoCart
							}
						/>
					</div>
				)}

				{allProducts.length === 0 && !isSearch && (
					<div className={styles.search_nosuccess}>
						<CatalogNoValue />
					</div>
				)}
			</div>
		</>
	)
}

export default memo(CatalogBlock)
