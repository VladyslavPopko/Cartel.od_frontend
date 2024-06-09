import React, { memo } from 'react'
import ReviewThankyouBlock from '../blocks/Modals/ReviewThankyouBlock/ReviewThankyouBlock'

const ReviewThankyou = ({
	isVisibleReviewThankyou,
	setIsVisibleReviewThankyou,
}) => {
	return (
		<div>
			<ReviewThankyouBlock
				isVisibleReviewThankyou={isVisibleReviewThankyou}
				setIsVisibleReviewThankyou={setIsVisibleReviewThankyou}
			/>
		</div>
	)
}

export default memo(ReviewThankyou)
