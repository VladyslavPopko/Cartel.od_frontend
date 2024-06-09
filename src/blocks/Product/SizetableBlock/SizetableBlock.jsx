import { memo } from 'react'
import styles from './style.module.scss'

const SizetableBlock = ({ setIsVisibleSizetable, productData }) => {
	const handleSizetable = () => {
		setIsVisibleSizetable(true)
	}

	return (
		<div className={styles.section}>
			<hr className={styles.hr} />
			<div className=''>
				{productData?.tableSize && (
					<>
						<h2 className={styles.title}>Таблиця розмірів</h2>
						<img
							draggable='false'
							onClick={handleSizetable}
							className={styles.img}
							src={productData.tableSize}
							alt=''
						/>
					</>
				)}
				{productData?.tableSize2 && (
					<img
						draggable='false'
						onClick={handleSizetable}
						className={styles.img}
						src={productData.tableSize2}
						alt=''
					/>
				)}
				<p className={styles.text}>
					<span className={styles.selected}>ВАЖЛИВО!!!</span> Якщо виникли
					труднощі з вибором розміру, узгодьте це з менеджером
				</p>
			</div>

			<hr className={styles.hr} />
		</div>
	)
}

export default memo(SizetableBlock)
