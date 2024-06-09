import { memo } from 'react'

import styles from './style.module.scss'

const RecomendedProducts = ({ setisVisibleNotificationAddtoCart }) => {
	return (
		<div className={styles.section}>
			{/* {data?.map((element, index) => (
				<AnimationWrapper key={index} className={styles.Catalog_item_wrapper}>
					<div className={styles.Catalog_item}>
						<CatalogItemBox
							element={element}
							setisVisibleNotificationAddtoCart={
								setisVisibleNotificationAddtoCart
							}
						/>
					</div>
				</AnimationWrapper>
			))} */}
		</div>
	)
}

export default memo(RecomendedProducts)
