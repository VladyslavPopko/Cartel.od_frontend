import React, { useState } from 'react'
import AboutUs from '../../../components/HomePage/AboutUs/AboutUs'
import ChangeWho from '../../../components/HomePage/ChangeWho/ChangeWho'
import Characteristics from '../../../components/HomePage/Characteristics/Characteristics'
import HomePageBanner from '../../../components/HomePage/HomePageBanner/HomePageBanner'
import HomePageChangerbyImg from '../../../components/HomePage/HomePageChangerbyImg/HomePageChangerbyImg'
import PopularProducts from '../../../components/HomePage/PopularProducts/PopularProducts'
import Review from '../../../components/HomePage/Review/Review'
import LoadingBox from '../../../components/LoadingBox/LoadingBox'
import NotificationBox from '../../../components/NotificationBox/NotificationBox'
import agree from '../../../img/Notifications/agree.svg'
import AnimationWrapper from '../../../wrappers/AnimationWrapper'
import ReviewModalBlock from '../../Modals/ReviewModalBlock/ReviewModalBlock'
import ReviewThankyouBlock from '../../Modals/ReviewThankyouBlock/ReviewThankyouBlock'
import ProducPageReviewBlock from '../../Product/ProducPageReviewBlock/ProducPageReviewBlock'

const HomePageBlock = () => {
	document.title = `Cartel - Головна сторінка`
	const [isVisibleNotificationAddtoCart, setisVisibleNotificationAddtoCart] =
		useState(false) // Notification Add to Cart
	const [isVisibleReview, setIsVisibleReview] = useState(false)
	const [isVisibleReviewThankyou, setIsVisibleReviewThankyou] = useState(false)
	const [isLoading, setIsLoading] = useState(true) // loading

	const handleReview = () => {
		setIsVisibleReview(true)
	}
	if (isLoading) {
		window.scrollTo(pageYOffset, 0)
		setIsLoading(false)
	}
	return (
		<>
			{isLoading && <LoadingBox type='bars' color='red' />}
			<NotificationBox
				text='Товар додано до кошика'
				img={agree}
				isVisibleNotificationAddtoCart={isVisibleNotificationAddtoCart}
			/>
			<AnimationWrapper>
				<ChangeWho />
			</AnimationWrapper>
			<AnimationWrapper>
				<HomePageBanner />
			</AnimationWrapper>
			<AnimationWrapper>
				<HomePageChangerbyImg />
			</AnimationWrapper>
			<AnimationWrapper>
				<Characteristics />
			</AnimationWrapper>
			<AnimationWrapper>
				<PopularProducts
					setisVisibleNotificationAddtoCart={setisVisibleNotificationAddtoCart}
				/>
			</AnimationWrapper>
			<AnimationWrapper>
				<AboutUs />
			</AnimationWrapper>
			<AnimationWrapper>
				<Review />
			</AnimationWrapper>
			<AnimationWrapper>
				<ProducPageReviewBlock handleReview={handleReview} />
			</AnimationWrapper>

			{/* modals */}
			<ReviewModalBlock
				isVisibleReview={isVisibleReview}
				setIsVisibleReview={setIsVisibleReview}
				setIsVisibleReviewThankyou={setIsVisibleReviewThankyou}
				setIsLoading={setIsLoading}
			/>
			<ReviewThankyouBlock
				isVisibleReviewThankyou={isVisibleReviewThankyou}
				setIsVisibleReviewThankyou={setIsVisibleReviewThankyou}
			/>
		</>
	)
}

export default HomePageBlock
