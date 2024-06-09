import { memo } from 'react'
import ColorCircle from '../ColorCircle/ColorCircle'
import styles from './style.module.scss'

const GaleryListChoose = ({ isColor, setIsColor, data }) => {
	return (
		<div className={styles.section}>
			{data.map(el => (
				<ColorCircle
					color={el.color}
					key={el.id}
					setIsColor={setIsColor}
					isColor={isColor}
				/>
			))}
		</div>
	)
}

export default memo(GaleryListChoose)
