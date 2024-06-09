import { memo } from 'react'
import styles from './style.module.scss'

const GalleryBox = ({ img }) => {
	return (
		<div className={styles.section}>
			<img loading='lazy' draggable='false' className={styles.img} src={img} />
		</div>
	)
}

export default memo(GalleryBox)
