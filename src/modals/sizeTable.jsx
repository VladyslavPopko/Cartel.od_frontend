import React, { memo } from 'react'
import SizetableModalBlock from '../blocks/Modals/SizetableModalBlock/SizetableModalBlock'

const SizeTable = ({
	isVisibleSizetable,
	setIsVisibleSizetable,
	productData,
}) => {
	return (
		<>
			<SizetableModalBlock
				productData={productData}
				isVisibleSizetable={isVisibleSizetable}
				setIsVisibleSizetable={setIsVisibleSizetable}
			/>
		</>
	)
}

export default memo(SizeTable)
