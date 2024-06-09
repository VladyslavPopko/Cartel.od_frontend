import React, { memo } from 'react'
import PoliticsBlock from '../blocks/PoliticsPage/PoliticsBlock/PoliticsBlock'
import Main from './Main'

const Politics = () => {
	window.scrollTo(pageYOffset, 0)
	return (
		<>
			<Main>
				<PoliticsBlock />
			</Main>
		</>
	)
}

export default memo(Politics)
