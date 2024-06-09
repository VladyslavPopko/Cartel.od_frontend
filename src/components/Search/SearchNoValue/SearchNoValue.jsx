import smiley from '../../../img/Catalog/smiley_sad.svg'
import styles from './style.module.scss'

const SearchNoValue = () => {
	return (
		<div className={styles.section}>
			<p className={styles.title}>Отакої...</p>
			<img src={smiley} className={styles.img} alt='' />
			<p className={styles.text}> Необхідно зробити запит</p>
		</div>
	)
}

export default SearchNoValue
