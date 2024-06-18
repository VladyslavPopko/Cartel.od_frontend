import cn from 'classnames'
import React, { memo } from 'react'
import styles from './style.module.scss'

const ColorSelectUnit = ({
	setIsActive,
	isActive,
	color,
	count,
	setIsActiveCount,
	setIsNavigate,
}) => {
	return (
		<>
			<div
				onClick={() => {
					setIsActiveCount(count)
					setIsActive(color)
					setIsNavigate(true)
				}}
				className={cn(
					styles.section,
					color,
					isActive === color && styles.active
				)}
			></div>
		</>
	)
}

export default memo(ColorSelectUnit)
