import cn from 'classnames'
import { memo } from 'react'
import sortImg from '../../../img/Catalog/sort.svg'
import styles from './style.module.scss'

const FilterCatalog = ({
	dataParam,
	isValueSort,
	isActiveFilter,
	setIsActiveFilter,
	isActiveSort,
	setIsActiveSort,
	setIsValueSort,
}) => {
	const handleFilter = () => {
		setIsActiveFilter(!isActiveFilter)
		setIsActiveSort(false)
	}

	const handleSort = () => {
		setIsActiveSort(!isActiveSort)
		setIsActiveFilter(false)
	}
	let pageName = ''

	if (dataParam.category) {
		pageName = dataParam.category
	} else if (dataParam.division) {
		pageName = dataParam.division
	} else if (dataParam.who) {
		pageName = dataParam.who
	}

	return (
		<div className={styles.section}>
			<div className={styles.section_content}>
				<div className={styles.header_section}>
					{pageName ? (
						<h2
							onClick={handleFilter}
							className={cn(
								styles.filter_title
								// isActiveFilter && styles.active
							)}
						>
							{pageName}
							{/* <img className={styles.open_img} src={open} alt='' /> */}
						</h2>
					) : (
						<h2
							onClick={handleFilter}
							className={cn(
								styles.filter_title
								// isActiveFilter && styles.active
							)}
						>
							Всі товари
							{/* <img className={styles.open_img} src={open} alt='' /> */}
						</h2>
					)}

					<div className={cn(styles.title_section)}>
						<div className={styles.title_list} onClick={handleSort}>
							<h2 className={cn(styles.title, isActiveSort && styles.active)}>
								сортування
							</h2>
							<img
								className={cn(styles.title_img, isActiveSort && styles.active)}
								src={sortImg}
								alt=''
							/>
						</div>
					</div>
				</div>

				{/* <div
					className={cn(styles.main_filter, isActiveFilter && styles.active)}
				>
					<div className={styles.main_filter_content}>
						<div className={styles.collumn_menu}>s</div>
						<div className={styles.collumn_menu}>s</div>
						<div className={styles.collumn_menu}>s</div>
						<div className={styles.collumn_menu}>s</div>
						<div className={styles.collumn_menu}>s</div>
					</div>
				</div> */}
				<div className={cn(styles.main_sort, isActiveSort && styles.active)}>
					<div className={styles.main_sort_content}>
						<p
							className={cn(
								styles.main_sort_text,
								isValueSort === 'За новизною' && styles.active
							)}
							onClick={() => setIsValueSort('За новизною')}
						>
							За новизною
						</p>
						<p
							className={cn(
								styles.main_sort_text,
								isValueSort === 'За спаданням ціни' && styles.active
							)}
							onClick={() => setIsValueSort('За спаданням ціни')}
						>
							За спаданням ціни
						</p>
						<p
							className={cn(
								styles.main_sort_text,
								isValueSort === 'За зростанням ціни' && styles.active
							)}
							onClick={() => setIsValueSort('За зростанням ціни')}
						>
							За зростанням ціни
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default memo(FilterCatalog)
