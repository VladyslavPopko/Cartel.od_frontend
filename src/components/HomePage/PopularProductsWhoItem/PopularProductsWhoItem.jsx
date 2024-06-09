import cn from 'classnames'
import React from 'react'
import styles from './style.module.scss'

const PopularProductsWhoItem = ({ value, isActive, setIsActive }) => {
	return (
		<div
			onClick={e => setIsActive(e.target.innerHTML)}
			className={cn(styles.section, isActive === value && styles.active)}
		>
			{value}
		</div>
	)
}

export default PopularProductsWhoItem
