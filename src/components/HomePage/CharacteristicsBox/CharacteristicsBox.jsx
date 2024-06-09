import React from 'react'
import styles from './style.module.scss'

const CharacteristicsBox = ({ img, title, text }) => {
	return (
		<div className={styles.section}>
			<img className={styles.img} src={img} alt='' />
			<h3 className={styles.title}>{title}</h3>
			<h4 className={styles.text}>{text}</h4>
		</div>
	)
}

export default CharacteristicsBox
