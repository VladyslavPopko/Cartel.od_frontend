import React from 'react'
import GalleryModalBlock from '../blocks/Modals/GalleryModalBlock/GalleryModalBlock'

const GalleryPage = ({
	isVisibleGallery,
	setIsVisibleGallery,
	productData,
}) => {
	return (
		<GalleryModalBlock
			productData={productData}
			setIsVisibleGallery={setIsVisibleGallery}
			isVisibleGallery={isVisibleGallery}
		/>
	)
}

export default GalleryPage
