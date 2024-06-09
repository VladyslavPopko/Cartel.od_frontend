import { memo } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import styles from './style.module.scss'

const CartBox = props => {
	const {
		heroImg,
		name,
		color,
		size,
		size2,
		count,
		old_price,
		price,
		onClickInc,
		onClickDec,
		page,
		who,
		division,
		category,
		article,
	} = props
	let arrayPrice = String(price).split('')
	let countPrice = 0

	for (let i = arrayPrice.length - 1; i > 0; i--) {
		if (countPrice === 2) {
			arrayPrice.splice(i, 0, ' ') // Вставляем пробел после каждых трех символов
			countPrice = 0 // Сбрасываем счетчик
		} else {
			countPrice++ // Увеличиваем счетчик
		}
	}

	arrayPrice = arrayPrice.join('') // Объединяем массив обратно в строку и выводим

	let arrayOldPrice = String(old_price).split('')
	let countOldPrice = 0

	for (let i = arrayOldPrice.length - 1; i > 0; i--) {
		if (countOldPrice === 2) {
			arrayOldPrice.splice(i, 0, ' ') // Вставляем пробел после каждых трех символов
			countOldPrice = 0 // Сбрасываем счетчик
		} else {
			countOldPrice++ // Увеличиваем счетчик
		}
	}

	arrayOldPrice = arrayOldPrice.join('') // Объединяем массив обратно в строку и выводим
	const db = useSelector(state => state.db)
	const filter_who = db.whos.filter(el => el.who === who)
	const path_who = filter_who[0]?.path
	const filter_division = db.divisions.filter(el => el.division === division)
	const path_division = filter_division[0]?.path
	// const filter_category = db.categories.filter(el => el.category === category)
	// const path_category = filter_category[0]?.path

	const link = `/${path_who}/${path_division}/${path_division}/${article}`
	return (
		<div className={styles.section}>
			<NavLink className={styles.img_wrapper} to={link}>
				<img draggable='false' className={styles.img} src={heroImg} alt='' />
			</NavLink>
			<div className={styles.list}>
				<NavLink className={styles.title} to={link}>
					<p className={styles.title}>{name}</p>
				</NavLink>
				{color && (
					<>
						<p className={styles.text_color}>Колір:</p>
						<p className={styles.color}>{color}</p>
					</>
				)}

				{size[0] && (size2 === 'Уточнити' || !size2[0]) && (
					<p className={styles.size}>Розмір : {size}</p>
				)}
				{size2[0] && size[0] && size2 !== 'Уточнити' && (
					<>
						<p className={styles.size}>Розмір верх: {size}</p>
						<p className={styles.size}>Розмір низ: {size2}</p>
					</>
				)}
				<p className={styles.price_old}>{arrayOldPrice} ₴</p>
				<div className={styles.list_item}>
					<div className={styles.list_item_left}>
						<span onClick={onClickDec} className={styles.decrement}>
							-
						</span>
						<span className={styles.input}>{count} </span>
						<span onClick={onClickInc} className={styles.increment}>
							+
						</span>
					</div>
					<div className={styles.list_item_right}>
						<p className={styles.price}>{arrayPrice} ₴</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default memo(CartBox)
