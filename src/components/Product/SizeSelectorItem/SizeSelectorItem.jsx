import cn from 'classnames'
import { memo } from 'react'
import line from '../../../img/ProductPage/line.png'
import styles from './style.module.scss'

const SizeSelectorItem = ({ value, selected, setSelected, availible }) => {
	const handleSelect = e => {
		selected === e.target.outerText
			? setSelected(null)
			: setSelected(e.target.outerText)
	}
	return (
		<>
			{(availible === '+' || !availible) && (
				<div
					className={cn(styles.section, selected === value && styles.active)}
					onClick={handleSelect}
				>
					{value}
				</div>
			)}
			{availible === '-' && (
				<div className={cn(styles.disable)}>
					{value}
					<img src={line} alt='' className={styles.disable_line} />
				</div>
			)}
			{/* <div className={cn(styles.disable)}>{value}</div> */}
		</>
	)
}

export default memo(SizeSelectorItem)
