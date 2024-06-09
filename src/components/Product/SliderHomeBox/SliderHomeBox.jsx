import cn from 'classnames'
import { memo } from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import styles from './style.module.scss'
import './style.scss'

const SliderHomeBox = ({ setIsVisibleGallery, productData }) => {
	const handleOpenGalley = () => {
		setIsVisibleGallery(true)
	}

	const indicators = index => <div className='slider_product_indicator'></div>
	return (
		<>
			{productData?.heroImg && (
				<Slide
					className={styles.section}
					transitionDuration='600'
					indicators={indicators}
					arrows={false}
				>
					{productData?.heroImg && (
						<div className={cn('each-slide-effect', styles.img_wrapper)}>
							<img
								onClick={handleOpenGalley}
								draggable='false'
								className={styles.img}
								src={productData.heroImg}
								alt=''
							/>
						</div>
					)}

					{productData?.heroImg && (
						<div className={cn('each-slide-effect', styles.img_wrapper)}>
							<img
								onClick={handleOpenGalley}
								draggable='false'
								className={styles.img}
								src={productData.sliderImg1}
								alt=''
							/>
						</div>
					)}

					{productData?.heroImg && (
						<div className={cn('each-slide-effect', styles.img_wrapper)}>
							<img
								onClick={handleOpenGalley}
								draggable='false'
								className={styles.img}
								src={productData.sliderImg2}
								alt=''
							/>
						</div>
					)}

					{productData?.sliderImg3 && (
						<div className={cn('each-slide-effect', styles.img_wrapper)}>
							<img
								onClick={handleOpenGalley}
								draggable='false'
								className={styles.img}
								src={productData.sliderImg3}
								alt=''
							/>
						</div>
					)}

					{/* <div className={cn('each-slide-effect', styles.img_wrapper)}>
						<img
							onClick={handleOpenGalley}
							draggable='false'
							className={styles.img}
							src={productData.heroImg}
							alt=''
						/>
					</div>

					{productData?.sliderImg1 && (
						<div className={cn('each-slide-effect', styles.img_wrapper)}>
							<img
								onClick={handleOpenGalley}
								draggable='false'
								className={styles.img}
								src={productData.sliderImg1}
								alt=''
							/>
						</div>
					)}
					{productData?.sliderImg2 && (
						<div className={cn('each-slide-effect', styles.img_wrapper)}>
							<img
								onClick={handleOpenGalley}
								draggable='false'
								className={styles.img}
								src={productData.sliderImg2}
								alt=''
							/>
						</div>
					)}
					{productData?.sliderImg3 && (
						<div className={cn('each-slide-effect', styles.img_wrapper)}>
							<img
								onClick={handleOpenGalley}
								draggable='false'
								className={styles.img}
								src={productData.sliderImg3}
								alt=''
							/>
						</div>
					)}
				</Slide>
			) : productData?.sliderImg2 ? (
				<Slide className={styles.section} transitionDuration='600'>
					<div className={cn('each-slide-effect', styles.img_wrapper)}>
						<img
							onClick={handleOpenGalley}
							draggable='false'
							className={styles.img}
							src={productData.heroImg}
							alt=''
						/>
					</div>

					{productData?.sliderImg1 && (
						<div className={cn('each-slide-effect', styles.img_wrapper)}>
							<img
								onClick={handleOpenGalley}
								draggable='false'
								className={styles.img}
								src={productData.sliderImg1}
								alt=''
							/>
						</div>
					)}
					{productData?.sliderImg2 && (
						<div className={cn('each-slide-effect', styles.img_wrapper)}>
							<img
								onClick={handleOpenGalley}
								draggable='false'
								className={styles.img}
								src={productData.sliderImg2}
								alt=''
							/>
						</div>
					)}
				</Slide>
			) : productData?.sliderImg1 ? (
				<Slide className={styles.section} transitionDuration='600'>
					<div className={cn('each-slide-effect', styles.img_wrapper)}>
						<img
							onClick={handleOpenGalley}
							draggable='false'
							className={styles.img}
							src={productData.heroImg}
							alt=''
						/>
					</div>

					{productData?.sliderImg1 && (
						<div className={cn('each-slide-effect', styles.img_wrapper)}>
							<img
								onClick={handleOpenGalley}
								draggable='false'
								className={styles.img}
								src={productData.sliderImg1}
								alt=''
							/>
						</div>
					)}
				</Slide>
			) : (
				productData?.heroImg && (
					<Slide className={styles.section} transitionDuration='600'>
						<div className={cn('each-slide-effect', styles.img_wrapper)}>
							<img
								onClick={handleOpenGalley}
								draggable='false'
								className={styles.img}
								src={productData.heroImg}
								alt=''
							/>
						</div> */}
				</Slide>
			)}
		</>
	)
}

export default memo(SliderHomeBox)
