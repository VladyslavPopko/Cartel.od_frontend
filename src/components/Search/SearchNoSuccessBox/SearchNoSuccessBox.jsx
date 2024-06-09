import { memo } from 'react'
import question from '../../../img/Catalog/question.svg'
import AnimationWrapper from '../../../wrappers/AnimationWrapper'
import PopularProducts from '../../HomePage/PopularProducts/PopularProducts'
import styles from './style.module.scss'

const SearchNoSuccessBox = ({
	isSearch,
	setisVisibleNotificationAddtoCart,
}) => {
	return (
		<>
			<div className={styles.section}>
				<img src={question} className={styles.img} alt='' />
				<div className={styles.content}>
					<div className={styles.content_header}>Вибачте, але</div>
					<div className={styles.content_footer}>
						за запитом <span className={styles.selected}>«{isSearch}» </span>
						нічого не знайдено :(
					</div>
				</div>
			</div>
			<div className={styles.products}>
				<p className={styles.products_title}>Кращі пропозиції тижня:</p>
				<AnimationWrapper>
					<PopularProducts
						setisVisibleNotificationAddtoCart={
							setisVisibleNotificationAddtoCart
						}
					/>
				</AnimationWrapper>
			</div>
		</>
	)
}

export default memo(SearchNoSuccessBox)
