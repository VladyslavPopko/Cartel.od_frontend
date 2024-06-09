import { memo } from 'react'
import GalleryBox from '../../../components/Modals/GalleryBox/GalleryBox'
import ModalWrapper from '../../../wrappers/ModalWrapper/ModalWrapper'
import styles from './style.module.scss'

const GalleryModalBlock = ({
	isVisibleGallery,
	setIsVisibleGallery,
	productData,
}) => {
	const handleClose = () => {
		setIsVisibleGallery(false)
	}

	return (
		<ModalWrapper isVisible={isVisibleGallery} handleClose={handleClose}>
			<article className={styles.section}>
				<div className={styles.header}>
					<h2 className={styles.title}>Галерея</h2>
				</div>

				{productData?.galleryImg1 && (
					<GalleryBox img={productData.galleryImg1} />
				)}
				{productData?.galleryImg2 && (
					<GalleryBox img={productData.galleryImg2} />
				)}
				{productData?.galleryImg3 && (
					<GalleryBox img={productData.galleryImg3} />
				)}
				{productData?.galleryImg4 && (
					<GalleryBox img={productData.galleryImg4} />
				)}
				{productData?.galleryImg5 && (
					<GalleryBox img={productData.galleryImg5} />
				)}
				{productData?.galleryImg6 && (
					<GalleryBox img={productData.galleryImg6} />
				)}
				{productData?.galleryImg7 && (
					<GalleryBox img={productData.galleryImg7} />
				)}
				{productData?.galleryImg8 && (
					<GalleryBox img={productData.galleryImg8} />
				)}
				{productData?.galleryImg9 && (
					<GalleryBox img={productData.galleryImg9} />
				)}
				{productData?.galleryImg10 && (
					<GalleryBox img={productData.galleryImg10} />
				)}
			</article>
		</ModalWrapper>
	)
}

export default memo(GalleryModalBlock)
