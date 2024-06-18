import React, { memo, useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { DB_API } from '../../../constanses/constanses'
import ColorSelectUnit from '../ColorSelectUnit/ColorSelectUnit'
import styles from './style.module.scss'

const ColorSelectBox = ({ productData, isActive, setIsActive }) => {
	const [allProducts, setAllProducts] = useState([])
	const params = useParams()
	const [isNavigate, setIsNavigate] = useState(false)
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
				setAllProducts(data)
			})
	}
	useEffect(() => {
		fetchProduct()
	}, [productData])

	const [isActiveCount, setIsActiveCount] = useState(false)

	return (
		<>
			{allProducts.length > 1 && (
				<div className={styles.wrapper}>
					<p>інші кольори:</p>
					<div className={styles.section}>
						{allProducts.map((product, index) => (
							<ColorSelectUnit
								allProducts={allProducts}
								isActiveCount={isActiveCount}
								setIsActiveCount={setIsActiveCount}
								key={index}
								color={product?.color}
								isActive={isActive || productData?.color}
								count={index}
								setIsActive={setIsActive}
								setIsNavigate={setIsNavigate}
							/>
						))}
					</div>
				</div>
			)}
			{isNavigate && (
				<>
					<Navigate
						to={`/${params?.who}/${params?.division}/${params?.category}/${allProducts[isActiveCount]?.article}`}
					/>
					{setIsNavigate(false)}
				</>
			)}
		</>
	)
}

export default memo(ColorSelectBox)
