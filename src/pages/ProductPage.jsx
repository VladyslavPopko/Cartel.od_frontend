import { memo, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ReviewModalBlock from '../blocks/Modals/ReviewModalBlock/ReviewModalBlock'
import ReviewThankyouBlock from '../blocks/Modals/ReviewThankyouBlock/ReviewThankyouBlock'
import DescriptionBlock from '../blocks/Product/DescriptionBlock/DescriptionBlock'
import HeroBlock from '../blocks/Product/HeroBlock/HeroBlock'
import ProducPageReviewBlock from '../blocks/Product/ProducPageReviewBlock/ProducPageReviewBlock'
import ProductPageInfoBlock from '../blocks/Product/ProductPageInfoBlock/ProductPageInfoBlock'
import ProductPageRecommendedCategory from '../blocks/Product/ProductPageRecommendedCategory/ProductPageRecommendedCategory'
import ProductPageSilimarBlock from '../blocks/Product/ProductPageSilimarBlock/ProductPageSilimarBlock'
import SizetableBlock from '../blocks/Product/SizetableBlock/SizetableBlock'
import LoadingBox from '../components/LoadingBox/LoadingBox'
import NotificationBox from '../components/NotificationBox/NotificationBox'
import { DB_API } from '../constanses/constanses'
import agree from '../img/Notifications/agree.svg'
import GalleryPage from '../modals/gallery'
import SizeTable from '../modals/sizeTable'
import AnimationWrapper from '../wrappers/AnimationWrapper'
import Main from './Main'

const ProductPage = () => {
	function shuffle(array) {
		array.sort(() => Math.random() - 0.5)
	}
	const params = useParams()
	const [productData, setProductData] = useState([])
	const [similarProducts, setSimilarProducts] = useState([])
	const [recommendedProducts, setRecommendedProducts] = useState([])

	const divisions = useSelector(state => state.db.divisions)
	let currentDivisions
	if (productData && divisions) {
		currentDivisions = divisions.filter(e => e.who === productData[0]?.who)
		currentDivisions = currentDivisions.filter(
			e => !e.division.includes(productData[0].division)
		)
		shuffle(currentDivisions)
	}

	const dataParam = {
		article: params.article,
	}
	const dataParamSimilarProducts = {}
	if (productData[0]?.who) {
		dataParamSimilarProducts.who = productData[0].who
		dataParamSimilarProducts.division = productData[0].division
		dataParamSimilarProducts.category = productData[0].category
	}
	const dataParamRecommendedProducts = {}
	if (productData[0]?.who) {
		dataParamRecommendedProducts.who = productData[0].who
		dataParamRecommendedProducts.division = productData[0].division
	}

	const fetchSimilarProduct = async () => {
		await fetch(`${DB_API}/findproductsbycategory`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(dataParamSimilarProducts),
		})
			.then(res => res.json())
			.then(data => {
				shuffle(data)
				setSimilarProducts(
					data.filter(e => !e.article.includes(productData[0].article))
				)
			})
	}
	const fetchRecommendedProduct = async () => {
		await fetch(`${DB_API}/findproductsbydivision`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(dataParamRecommendedProducts),
		})
			.then(res => res.json())
			.then(data => {
				shuffle(data)
				setRecommendedProducts(
					data.filter(
						e =>
							!e.name.includes(productData[0].name) &&
							e.category != productData[0].category
					)
				)
			})
	}

	const fetchProduct = async () => {
		await fetch(`${DB_API}/findProducts`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(dataParam),
		})
			.then(res => res.json())
			.then(data => {
				setProductData(data)
			})
	}
	useEffect(() => {
		fetchProduct()
		window.scrollTo(pageYOffset, 0)
	}, [params])
	useEffect(() => {
		fetchSimilarProduct()
		fetchRecommendedProduct()
	}, [productData])

	const [selected, setSelected] = useState(null) // size
	const [selected2, setSelected2] = useState(null) // size 2
	const [isLoading, setIsLoading] = useState(true) // loading

	const [isVisibleReview, setIsVisibleReview] = useState(false) // Review Form Modal
	const [isVisibleReviewThankyou, setIsVisibleReviewThankyou] = useState(false) // Review Thankyou Modal
	const [isVisibleSizetable, setIsVisibleSizetable] = useState(false) // Modal SizeTable
	const [isVisibleNotificationAddtoCart, setisVisibleNotificationAddtoCart] =
		useState(false) // Notification Add to Cart
	const [isVisibleGallery, setIsVisibleGallery] = useState(false) // Gallery Modal

	const handleReview = () => {
		setIsVisibleReview(true)
	}

	if (isLoading) {
		window.scrollTo(pageYOffset, 0)
		setIsLoading(false)
	}

	return (
		<>
			<Main>
				{isLoading && <LoadingBox type='bars' color='red' />}

				<NotificationBox
					text='Товар додано до кошика'
					img={agree}
					isVisibleNotificationAddtoCart={isVisibleNotificationAddtoCart}
				/>
				<AnimationWrapper>
					<HeroBlock
						productData={productData[0]}
						setIsVisibleSizetable={setIsVisibleSizetable}
						addNotification={setisVisibleNotificationAddtoCart}
						selected={selected}
						setSelected={setSelected}
						selected2={selected2}
						setSelected2={setSelected2}
						setIsVisibleGallery={setIsVisibleGallery}
					/>
				</AnimationWrapper>
				<AnimationWrapper>
					<ProductPageInfoBlock />
				</AnimationWrapper>
				<AnimationWrapper>
					<ProductPageSilimarBlock
						limit='4'
						products={similarProducts}
						setisVisibleNotificationAddtoCart={
							setisVisibleNotificationAddtoCart
						}
						title='СХОЖІ ТОВАРИ'
					/>
				</AnimationWrapper>
				<AnimationWrapper>
					<DescriptionBlock productData={productData[0]} />
				</AnimationWrapper>

				<AnimationWrapper>
					<SizetableBlock
						productData={productData[0]}
						setIsVisibleSizetable={setIsVisibleSizetable}
					/>
				</AnimationWrapper>

				<AnimationWrapper>
					<ProducPageReviewBlock handleReview={handleReview} />
				</AnimationWrapper>
				<AnimationWrapper>
					<ProductPageSilimarBlock
						limit='4'
						setisVisibleNotificationAddtoCart={
							setisVisibleNotificationAddtoCart
						}
						products={recommendedProducts}
						title='Рекомендовані товари'
					/>
				</AnimationWrapper>
				<AnimationWrapper>
					<ProductPageRecommendedCategory currentDivisions={currentDivisions} />
				</AnimationWrapper>
				<AnimationWrapper>
					<HeroBlock
						productData={productData[0]}
						setIsVisibleSizetable={setIsVisibleSizetable}
						addNotification={setisVisibleNotificationAddtoCart}
						selected={selected}
						setSelected={setSelected}
						setIsVisibleGallery={setIsVisibleGallery}
						selected2={selected2}
						setSelected2={setSelected2}
					/>
				</AnimationWrapper>

				{/* modals  */}

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

				<SizeTable
					productData={productData[0]}
					isVisibleSizetable={isVisibleSizetable}
					setIsVisibleSizetable={setIsVisibleSizetable}
				/>

				{isVisibleGallery && (
					<GalleryPage
						productData={productData[0]}
						setIsVisibleGallery={setIsVisibleGallery}
						isVisibleGallery={isVisibleGallery}
					/>
				)}
			</Main>
		</>
	)
}

export default memo(ProductPage)
