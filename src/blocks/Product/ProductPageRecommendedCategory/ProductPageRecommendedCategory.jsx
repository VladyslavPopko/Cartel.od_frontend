import React, { memo } from 'react'
import ProductPageRecommendedCategoryBox from '../../../components/Product/ProductPageRecommendedCategoryBox/ProductPageRecommendedCategoryBox'
import styles from './style.module.scss'

const ProductPageRecommendedCategory = ({ currentDivisions }) => {
	return (
		<div className={styles.section}>
			<hr className={styles.hr} />
			<h2 className={styles.title}>Вам також може сподобатися:</h2>
			<div className={styles.list}>
				{currentDivisions &&
					currentDivisions.map(
						(element, index) =>
							index < 3 && (
								<>
									<ProductPageRecommendedCategoryBox text={element.division} />
								</>
							)
					)}
			</div>
		</div>
	)
}

export default memo(ProductPageRecommendedCategory)
