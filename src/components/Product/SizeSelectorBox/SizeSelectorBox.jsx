import { memo } from 'react'
import SizeSelectorItem from '../SizeSelectorItem/SizeSelectorItem'
import styles from './style.module.scss'

const SizeSelectorBox = ({ selected, setSelected, productData, availible }) => {
	return (
		<div className={styles.section}>
			{productData[0] &&
				productData.map((el, key) => (
					<SizeSelectorItem
						value={el}
						key={el.id}
						availible={availible[key]}
						setSelected={setSelected}
						selected={selected}
					/>
				))}
		</div>
	)
}

export default memo(SizeSelectorBox)
