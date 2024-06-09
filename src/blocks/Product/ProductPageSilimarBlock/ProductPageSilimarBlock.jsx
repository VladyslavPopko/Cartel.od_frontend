import React, { memo } from 'react'
import CatalogItemBox from '../../../components/Catalog/CatalogItemBox/CatalogItemBox'
import AnimationWrapper from '../../../wrappers/AnimationWrapper'
import styles from './style.module.scss'

const ProductPageSilimarBlock = ({
	title,
	setisVisibleNotificationAddtoCart,
	products,
	limit,
}) => {
	return (
		<div className={styles.section}>
			{title && <h2 className={styles.title}>{title}</h2>}
			<div className={styles.list}>
				{products &&
					products.map(
						(element, index) =>
							index < limit && (
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
		</div>
	)
}

export default memo(ProductPageSilimarBlock)
