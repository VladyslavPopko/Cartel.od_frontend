import { memo } from 'react'
import ModalWrapper from '../../../wrappers/ModalWrapper/ModalWrapper'
import styles from './style.module.scss'

const ReviewThankyouBlock = ({
	isVisibleReviewThankyou,
	setIsVisibleReviewThankyou,
}) => {
	const handleCloseThankyou = () => {
		setIsVisibleReviewThankyou(false)
	}
	return (
		<ModalWrapper
			isVisible={isVisibleReviewThankyou}
			handleClose={handleCloseThankyou}
		>
			<article className={styles.section}> Дякуємо за відгук!</article>
		</ModalWrapper>
	)
}

export default memo(ReviewThankyouBlock)
