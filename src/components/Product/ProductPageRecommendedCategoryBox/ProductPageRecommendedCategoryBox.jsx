import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import styles from './style.module.scss'

const ProductPageRecommendedCategoryBox = ({ text }) => {
	const db = useSelector(state => state.db)
	const [currentDivision] = db.divisions.filter(
		division => division.division === text
	)

	const [currentWho] = db.whos.filter(who => who.who === currentDivision.who)
	const path = `/${currentWho.path}/${currentDivision.path}`

	return (
		<NavLink to={path} className={styles.section}>
			{text}
		</NavLink>
	)
}

export default memo(ProductPageRecommendedCategoryBox)
