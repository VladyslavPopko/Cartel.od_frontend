import React, { memo } from 'react'
import styles from './style.module.scss'

const ProductPageInfoBox = ({ text, img }) => {
	return (
		<div className={styles.section}>
			<img src={img} alt='' className={styles.img} />
			<p className={styles.text}>{text}</p>
		</div>
	)
}

export default memo(ProductPageInfoBox)
