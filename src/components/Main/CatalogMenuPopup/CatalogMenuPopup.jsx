import cn from 'classnames'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import previousImg from '../../../img/Catalog/previous.svg'

import { setIsDivision, setIsWho } from '../../../redux/slices/dbSlice'
import styles from './style.module.scss'

const CatalogMenuPopup = ({ isActive, setIsOpen }) => {
	const params = useParams()
	const db = useSelector(state => state.db)
	const isWho = useSelector(state => state.db.isWho)
	const isDivision = useSelector(state => state.db.isDivision)

	const dispatch = useDispatch()

	const filterDivision = db.divisions.filter(division => division.who === isWho)
	const filterCategory = db.categories.filter(
		category => category.who === isWho && category.division === isDivision
	)
	let pathWho
	if (isWho) {
		pathWho = db.whos.filter(who => who.who === isWho)
		pathWho = `/${pathWho[0]?.path}`
	}
	let pathDivision

	if (isDivision) {
		pathDivision = db.divisions.filter(
			division => division.who === isWho && division.division === isDivision
		)
		pathDivision = `${pathWho}/${pathDivision[0]?.path}`
	}
	useEffect(() => {
		if (params?.who) {
			const resultWho = db.whos.filter(who => who.path === params?.who)
			dispatch(setIsWho(resultWho[0]?.who))

			if (params?.division) {
				const resultdivision = db.divisions.filter(
					division =>
						division.path === params?.division &&
						division.who === resultWho[0]?.who
				)
				dispatch(setIsDivision(resultdivision[0]?.division))
			}
		} else if (!params?.who) {
			dispatch(setIsWho(false))
			dispatch(setIsDivision(false))
		}
	}, [db?.whos, db?.divisions])

	return (
		<div
			onClick={() => setIsOpen(false)}
			className={cn(styles.wrapper, isActive && styles.wrapper_active)}
		>
			<div
				onClick={e => e.stopPropagation()}
				className={cn(styles.section, isActive && styles.active)}
			>
				<div className={styles.title_section}>
					<h4>Каталог</h4>
				</div>
				{!isWho &&
					db.whos &&
					db.whos.map(who => (
						<p
							key={who.id}
							onClick={e => dispatch(setIsWho(e.target.innerHTML))}
							className={cn(styles.item)}
						>
							{who.who}
						</p>
					))}
				{isWho && filterDivision && !isDivision && (
					<p
						className={cn(styles.item, styles.item_previous)}
						onClick={() => dispatch(setIsWho(false))}
					>
						<img className={styles.previous_img} src={previousImg} />
						{isWho}
					</p>
				)}
				{isWho && filterDivision && !isDivision && pathWho && (
					<NavLink
						to={pathWho}
						className={cn(styles.item, styles.item_link)}
						onClick={() => setIsOpen(false)}
					>
						ВСЕ У {isWho}
					</NavLink>
				)}
				{isWho &&
					!isDivision &&
					filterDivision &&
					filterDivision.map(division => (
						<p
							key={division.id}
							className={styles.item}
							onClick={e => dispatch(setIsDivision(e.target.innerHTML))}
						>
							{division.division}
						</p>
					))}
				{isDivision && filterCategory && (
					<p
						className={cn(styles.item, styles.item_previous)}
						onClick={() => dispatch(setIsDivision(false))}
					>
						<img className={styles.previous_img} src={previousImg} />
						{isDivision}
					</p>
				)}
				{isDivision && filterCategory && pathDivision && (
					<NavLink
						onClick={() => setIsOpen(false)}
						to={pathDivision}
						className={cn(styles.item, styles.item_link)}
					>
						ВСЕ У {isDivision}
					</NavLink>
				)}
				{isDivision &&
					filterCategory &&
					filterCategory.map(category => (
						<NavLink
							onClick={() => setIsOpen(false)}
							to={`${pathDivision}/${category.path}`}
							key={category.id}
							className={styles.item}
						>
							{category.category}
						</NavLink>
					))}
			</div>
		</div>
	)
}

export default CatalogMenuPopup
