import { memo } from 'react'
import ReviewModalBlock from '../blocks/Modals/ReviewModalBlock/ReviewModalBlock'

const Review = ({
	isVisibleReview,
	setIsVisibleReview,
	setIsVisibleReviewThankyou,
	setIsLoading,
}) => {
	return (
		<div>
			<ReviewModalBlock
				setIsLoading={setIsLoading}
				isVisibleReview={isVisibleReview}
				setIsVisibleReview={setIsVisibleReview}
				setIsVisibleReviewThankyou={setIsVisibleReviewThankyou}
			/>
		</div>
	)
}

export default memo(Review)
