import React, { memo } from 'react'
import SubmitBlock from '../blocks/Modals/SubmitBlock/SubmitBlock'

const Submit = ({
	isVisibleSubmit,
	setIsVisibleSubmit,
	setIsVisibleThankyou,
	setIsLoading,
}) => {
	return (
		<div>
			<SubmitBlock
				setIsLoading={setIsLoading}
				isVisibleSubmit={isVisibleSubmit}
				setIsVisibleSubmit={setIsVisibleSubmit}
				setIsVisibleThankyou={setIsVisibleThankyou}
			/>
		</div>
	)
}

export default memo(Submit)
