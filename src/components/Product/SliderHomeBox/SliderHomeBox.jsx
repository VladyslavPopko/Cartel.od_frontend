import cn from 'classnames'
import { memo } from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import BannerTop from '../../Catalog/BannerImg/BannerImg'
import styles from './style.module.scss'
import './style.scss'

const SliderHomeBox = ({ setIsVisibleGallery, productData }) => {
	const handleOpenGalley = () => {
		setIsVisibleGallery(true)
	}

	const indicators = index => <div className='slider_product_indicator'></div>
	return (
		<>
			{productData?.heroImg &&
				productData?.sliderImg1 &&
				productData?.sliderImg2 &&
				productData?.sliderImg3 && (
					<Slide
						className={styles.section}
						transitionDuration='600'
						indicators={indicators}
						arrows={false}
					>
						<div className={cn('each-slide-effect', styles.img_wrapper)}>
							{productData?.bannerText && productData?.banner && (
								<BannerTop
									text={productData?.bannerText}
									style={productData?.banner}
								/>
							)}
							<img
								onClick={handleOpenGalley}
								draggable='false'
								className={styles.img}
								src={productData.heroImg}
								alt=''
							/>
						</div>

						<div className={cn('each-slide-effect', styles.img_wrapper)}>
							{productData?.bannerText && productData?.banner && (
								<BannerTop
									text={productData?.bannerText}
									style={productData?.banner}
								/>
							)}
							<img
								onClick={handleOpenGalley}
								draggable='false'
								className={styles.img}
								src={productData.sliderImg1}
								alt=''
							/>
						</div>

						<div className={cn('each-slide-effect', styles.img_wrapper)}>
							{productData?.bannerText && productData?.banner && (
								<BannerTop
									text={productData?.bannerText}
									style={productData?.banner}
								/>
							)}
							<img
								onClick={handleOpenGalley}
								draggable='false'
								className={styles.img}
								src={productData.sliderImg2}
								alt=''
							/>
						</div>

						<div className={cn('each-slide-effect', styles.img_wrapper)}>
							{productData?.bannerText && productData?.banner && (
								<BannerTop
									text={productData?.bannerText}
									style={productData?.banner}
								/>
							)}
							<img
								onClick={handleOpenGalley}
								draggable='false'
								className={styles.img}
								src={productData.sliderImg3}
								alt=''
							/>
						</div>
					</Slide>
				)}
			{productData?.heroImg &&
				productData?.sliderImg1 &&
				productData?.sliderImg2 &&
				!productData?.sliderImg3 && (
					<Slide
						className={styles.section}
						transitionDuration='600'
						indicators={indicators}
						arrows={false}
					>
						<div className={cn('each-slide-effect', styles.img_wrapper)}>
							{productData?.bannerText && productData?.banner && (
								<BannerTop
									text={productData?.bannerText}
									style={productData?.banner}
								/>
							)}
							<img
								onClick={handleOpenGalley}
								draggable='false'
								className={styles.img}
								src={productData.heroImg}
								alt=''
							/>
						</div>

						<div className={cn('each-slide-effect', styles.img_wrapper)}>
							{productData?.bannerText && productData?.banner && (
								<BannerTop
									text={productData?.bannerText}
									style={productData?.banner}
								/>
							)}
							<img
								onClick={handleOpenGalley}
								draggable='false'
								className={styles.img}
								src={productData.sliderImg1}
								alt=''
							/>
						</div>

						<div className={cn('each-slide-effect', styles.img_wrapper)}>
							{productData?.bannerText && productData?.banner && (
								<BannerTop
									text={productData?.bannerText}
									style={productData?.banner}
								/>
							)}
							<img
								onClick={handleOpenGalley}
								draggable='false'
								className={styles.img}
								src={productData.sliderImg2}
								alt=''
							/>
						</div>
					</Slide>
				)}
			{productData?.heroImg &&
				productData?.sliderImg1 &&
				!productData?.sliderImg2 &&
				!productData?.sliderImg3 && (
					<Slide
						className={styles.section}
						transitionDuration='600'
						indicators={indicators}
						arrows={false}
					>
						<div className={cn('each-slide-effect', styles.img_wrapper)}>
							{productData?.bannerText && productData?.banner && (
								<BannerTop
									text={productData?.bannerText}
									style={productData?.banner}
								/>
							)}
							<img
								onClick={handleOpenGalley}
								draggable='false'
								className={styles.img}
								src={productData.heroImg}
								alt=''
							/>
						</div>

						<div className={cn('each-slide-effect', styles.img_wrapper)}>
							{productData?.bannerText && productData?.banner && (
								<BannerTop
									text={productData?.bannerText}
									style={productData?.banner}
								/>
							)}
							<img
								onClick={handleOpenGalley}
								draggable='false'
								className={styles.img}
								src={productData.sliderImg1}
								alt=''
							/>
						</div>
					</Slide>
				)}
			{productData?.heroImg &&
				!productData?.sliderImg1 &&
				!productData?.sliderImg2 &&
				!productData?.sliderImg3 && (
					<Slide
						className={styles.section}
						transitionDuration='600'
						indicators={indicators}
						arrows={false}
					>
						<div className={cn('each-slide-effect', styles.img_wrapper)}>
							{productData?.bannerText && productData?.banner && (
								<BannerTop
									text={productData?.bannerText}
									style={productData?.banner}
								/>
							)}
							<img
								onClick={handleOpenGalley}
								draggable='false'
								className={styles.img}
								src={productData.heroImg}
								alt=''
							/>
						</div>
					</Slide>
				)}
		</>
	)
}

export default memo(SliderHomeBox)
