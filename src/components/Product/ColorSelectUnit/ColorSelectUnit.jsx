import cn from 'classnames'
import React from 'react'
import styles from './style.module.scss'

const ColorSelectUnit = ({
	setIsActive,
	isActive,
	color,
	count,
	setIsActiveCount,
	setisNavigate,
}) => {
	return (
		<div
			onClick={() => {
				setIsActiveCount(count)
				setIsActive(color)
				setisNavigate(true)
			}}
			className={cn(styles.section, color, isActive === color && styles.active)}
		></div>
	)
}

export default ColorSelectUnit
