import cn from 'classnames'
import { memo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, Navigate } from 'react-router-dom'
import { changeSearch } from '../../../redux/slices/searchSlice'
import styles from './style.module.scss'
import './style.scss'

const ChangeSexCatalog = ({
	setIsValueFilter,
	setIsValueSort,
	setIsActiveFilter,
	setIsActiveSort,
}) => {
	const [value, setValue] = useState()
	const [navigate, setNavigate] = useState(false)
	const dispatch = useDispatch()

	const SubmitSearchName = e => {
		e.preventDefault()
		dispatch(changeSearch(value))
		setNavigate(true)
	}

	const handleResetAllFilters = () => {
		setIsValueFilter(false)
		setIsValueSort(false)
		setIsActiveFilter(false)
		setIsActiveSort(false)
	}

	return (
		<div className={styles.section}>
			{navigate && <Navigate to='/search' />}
			<div className={styles.section_content}>
				<div className={styles.list}>
					<NavLink
						className={cn(styles.title)}
						to='/'
						onClick={handleResetAllFilters}
					>
						Чоловікам
					</NavLink>
					<NavLink
						className={cn(styles.title)}
						to='/women'
						onClick={handleResetAllFilters}
					>
						жінкам
					</NavLink>
					<NavLink
						className={cn(styles.title)}
						to='/military'
						onClick={handleResetAllFilters}
					>
						Військовим
					</NavLink>
				</div>
				<form className={styles.input_section} onSubmit={SubmitSearchName}>
					<div className={styles.input_section}>
						<input
							inputMode='search'
							className={styles.input}
							type='text'
							placeholder='Пошук'
							onChange={e => setValue(e.target.value)}
						/>
						<button className={styles.submit} type='submit'></button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default memo(ChangeSexCatalog)
