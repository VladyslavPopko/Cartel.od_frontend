import React, { memo } from 'react'
import AssignBlock from '../blocks/AssignPage/AssignBlock/AssignBlock'
import Main from './Main'

const Assign = () => {
	window.scrollTo(pageYOffset, 0)
	return (
		<>
			<Main>
				<AssignBlock />
			</Main>
		</>
	)
}

export default memo(Assign)
