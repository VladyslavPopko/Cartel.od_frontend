import React, { memo } from 'react'
import ThankyouBlock from '../blocks/Modals/ThanyouBlock/ThankyouBlock'

const Thankyou = ({ isVisibleThankyou, setIsVisibleThankyou }) => {
	return (
		<div>
			<ThankyouBlock
				isVisibleThankyou={isVisibleThankyou}
				setIsVisibleThankyou={setIsVisibleThankyou}
			/>
		</div>
	)
}

export default memo(Thankyou)
