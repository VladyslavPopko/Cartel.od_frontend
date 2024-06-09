import { memo } from 'react'
import ModalWrapper from '../../../wrappers/ModalWrapper/ModalWrapper'
import styles from './style.module.scss'

const SizetableModalBlock = ({
	isVisibleSizetable,
	setIsVisibleSizetable,
	productData,
}) => {
	const handleClose = () => {
		setIsVisibleSizetable(false)
	}

	return (
		<ModalWrapper isVisible={isVisibleSizetable} handleClose={handleClose}>
			<article className={styles.section}>
				<h2 className={styles.title}>ТАБЛИЦЯ РОЗМІРІВ</h2>
				{productData?.tableSize && (
					<img
						draggable='false'
						className={styles.img}
						src={productData.tableSize}
						alt=''
					/>
				)}
				{productData?.tableSize2 && (
					<img
						draggable='false'
						className={styles.img}
						src={productData.tableSize2}
						alt=''
					/>
				)}
			</article>
		</ModalWrapper>
	)
}

export default memo(SizetableModalBlock)
