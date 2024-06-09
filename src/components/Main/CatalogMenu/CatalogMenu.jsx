import cn from 'classnames'
import React, { useState } from 'react'
import catalogImg from '../../../img/HomePage/Catalog.svg'
import CatalogMenuPopup from '../CatalogMenuPopup/CatalogMenuPopup'
import styles from './style.module.scss'

const CatalogMenu = () => {
	const [isOpen, setIsOpen] = useState(false)

	const handleCatalog = () => {
		setIsOpen(!isOpen)
	}
	return (
		<>
			<CatalogMenuPopup isActive={isOpen} setIsOpen={setIsOpen} />
			<div
				className={cn(styles.section, isOpen && styles.active)}
				onClick={handleCatalog}
			>
				<img src={catalogImg} alt='' />
				<p className={styles.text}>Каталог</p>
			</div>
		</>
	)
}

export default CatalogMenu
