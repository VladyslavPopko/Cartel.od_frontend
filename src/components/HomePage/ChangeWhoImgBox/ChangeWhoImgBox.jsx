import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './style.module.scss'

const ChangeWhoImgBox = ({ img, text, link }) => {
	return (
		<NavLink to={link} className={styles.section}>
			<img className={styles.img} src={img} alt='' />
			<p className={styles.text}>{text}</p>
		</NavLink>
	)
}

export default ChangeWhoImgBox
