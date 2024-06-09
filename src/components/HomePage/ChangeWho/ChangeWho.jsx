import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import styles from './style.module.scss'

const ChangeWho = () => {
	const db = useSelector(state => state.db.whos)

	return (
		<>
			<div className={styles.section}>
				{db &&
					db.map(who => (
						<NavLink to={who.path} className={styles.text} key={who.id}>
							{who.who}
						</NavLink>
					))}
			</div>
		</>
	)
}

export default ChangeWho
