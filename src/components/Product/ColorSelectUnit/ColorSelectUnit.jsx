import cn from 'classnames'
import React, { memo } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import styles from './style.module.scss'

const ColorSelectUnit = ({ setIsActive, isActive, color, article }) => {
	const params = useParams()
	return (
		<>
			<NavLink
				to={`/${params.who}/${params.division}/${params.category}/${article}`}
			>
				<div
					onClick={() => {
						setIsActive(color)
					}}
					style={{ background: color }}
					className={cn(styles.section, isActive === color && styles.active)}
				></div>
			</NavLink>
		</>
	)
}

export default memo(ColorSelectUnit)
