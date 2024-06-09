import smiley from '../../../img/Catalog/smiley_sad.svg'
import styles from './style.module.scss'

const CatalogNoValue = () => {
	return (
		<div className={styles.section}>
			<p className={styles.title}>Отакої...</p>
			<img src={smiley} className={styles.img} alt='' />
			<p className={styles.text}> Каталог поки що пустий, але не на довго</p>
		</div>
	)
}

export default CatalogNoValue
