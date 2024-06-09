import React from 'react'
import startImg from '../../../img/HomePage/star.svg'
import styles from './style.module.scss'

const ReviewBox = ({ title, text }) => {
	return (
		<div className={styles.section}>
			<div className={styles.section_header}>
				<h2 className={styles.title}>{title}</h2>
				<div className={styles.star_section}>
					<img className={styles.start_img} src={startImg} alt='' />
					<img className={styles.start_img} src={startImg} alt='' />
					<img className={styles.start_img} src={startImg} alt='' />
					<img className={styles.start_img} src={startImg} alt='' />
					<img className={styles.start_img} src={startImg} alt='' />
				</div>
			</div>

			<p className={styles.text}>{text}</p>
		</div>
	)
}

export default ReviewBox
