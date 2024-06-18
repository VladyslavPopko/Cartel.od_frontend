import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ProductPageSilimarBlock from '../../../blocks/Product/ProductPageSilimarBlock/ProductPageSilimarBlock'
import { DB_API } from '../../../constanses/constanses'
import PopularProductsWhoItem from '../PopularProductsWhoItem/PopularProductsWhoItem'
import styles from './style.module.scss'

const PopularProducts = ({ setisVisibleNotificationAddtoCart }) => {
	function shuffle(array) {
		array.sort(() => Math.random() - 0.5)
	}
	const whos = useSelector(state => state.db.whos)
	const [isActive, setIsActive] = useState(false)
	const [allProducts, setAllProducts] = useState([])

	useEffect(() => {
		setIsActive(whos[0]?.who)
	}, [whos])

	const dataParam = {
		who: isActive,
	}

	const fetchProduct = async () => {
		await fetch(`${DB_API}/product/find/who`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(dataParam),
		})
			.then(res => res.json())
			.then(data => {
				shuffle(data)
				setAllProducts(data)
			})
	}

	useEffect(() => {
		fetchProduct()
	}, [isActive])

	return (
		<div className={styles.section}>
			<h2 className={styles.title}>Популярні товари</h2>
			<div className={styles.content}>
				<div className={styles.content_title_list}>
					{whos.map(who => (
						<PopularProductsWhoItem
							key={who.id}
							value={who.who}
							isActive={isActive}
							setIsActive={setIsActive}
						/>
					))}
				</div>
				<ProductPageSilimarBlock
					limit='6'
					setisVisibleNotificationAddtoCart={setisVisibleNotificationAddtoCart}
					products={allProducts}
				/>
			</div>
		</div>
	)
}

export default PopularProducts
