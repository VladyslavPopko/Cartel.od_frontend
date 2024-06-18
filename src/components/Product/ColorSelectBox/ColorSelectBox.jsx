import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { DB_API } from '../../../constanses/constanses'
import ColorSelectUnit from '../ColorSelectUnit/ColorSelectUnit'
import styles from './style.module.scss'

const ColorSelectBox = ({ productData, isActive, setIsActive }) => {
	const [allProducts, setAllProducts] = useState([])
	const params = useParams()

	const dataValue = {
		name: productData?.name || null,
		who: productData?.who || null,
		division: productData?.division || null,
		category: productData?.category || null,
		vendor: productData?.vendor || null,
		price: productData?.price || null,
		old_price: productData?.old_price || null,
	}

	const fetchProduct = async () => {
		await fetch(`${DB_API}/product/search/similarcolor`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(dataValue),
		})
			.then(res => res.json())
			.then(data => {
				setAllProducts(
					data.filter(product => product.category === productData.category)
				)
			})
	}
	useEffect(() => {
		fetchProduct()
	}, [productData])

	const [isActiveCount, setIsActiveCount] = useState(false)
	const [isNavigate, setisNavigate] = useState(false)

	return (
		<>
			{allProducts.length > 1 && (
				<div className={styles.wrapper}>
					<p>інші кольори:</p>
					<div className={styles.section}>
						{allProducts.map((product, index) => (
							<ColorSelectUnit
								setIsActiveCount={setIsActiveCount}
								setisNavigate={setisNavigate}
								key={index}
								color={product?.color}
								isActive={isActive || productData?.color}
								count={index}
								setIsActive={setIsActive}
							/>
						))}
						{isNavigate && (
							<Navigate
								to={`/${params?.who}/${params?.division}/${params?.category}/${allProducts[isActiveCount]?.article}`}
							/>
						)}
					</div>
				</div>
			)}
		</>
	)
}

export default ColorSelectBox
