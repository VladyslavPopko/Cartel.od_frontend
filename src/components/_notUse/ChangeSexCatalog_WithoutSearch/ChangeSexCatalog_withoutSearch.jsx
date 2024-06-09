import cn from 'classnames'
import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './style.module.scss'
import './style.scss'

const ChangeSexCatalog_WithoutSearch = () => {
	return (
		<div className={styles.section}>
			<div className={styles.section_content}>
				<div className={styles.list}>
					<NavLink className={cn(styles.title)} to='/'>
						Чоловікам
					</NavLink>
					<NavLink className={cn(styles.title)} to='/women'>
						жінкам
					</NavLink>
					<NavLink className={cn(styles.title)} to='/military'>
						Військовим
					</NavLink>
				</div>
			</div>
		</div>
	)
}

export default memo(ChangeSexCatalog_WithoutSearch)
