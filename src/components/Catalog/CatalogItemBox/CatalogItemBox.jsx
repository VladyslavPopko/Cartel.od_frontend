import { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import addToCartImg from '../../../img/Catalog/addToCart.svg'
import { addToCart } from '../../../redux/slices/cartSlice'
import BannerImg from '../BannerImg/BannerImg'
import styles from './style.module.scss'

const CatalogItemBox = ({ element, setisVisibleNotificationAddtoCart }) => {
	const {
		heroImg,
		name,
		price,
		old_price,
		color,
		banner,
		bannerText,
		who,
		category,
		division,
		article,
		size,
	} = element
	function kitcut(text, limit) {
		text = text.trim()
		if (text.length <= limit) return text
		text = text.slice(0, limit) // тупо отрезать по лимиту
		return text + '...'
	}

	const db = useSelector(state => state.db)
	const filter_who = db.whos.filter(el => el.who === who)
	const path_who = filter_who[0]?.path
	const filter_division = db.divisions.filter(el => el.division === division)
	const path_division = filter_division[0]?.path
	// const filter_category = db.categories.filter(el => el.category === category)
	// const path_category = filter_category[0]?.path

	const page = `/${path_who}/${path_division}/${path_division}/${article}`
	const dispatch = useDispatch()
	const [isValue, setIsValue] = useState(false)
	const handleSubmit = () => {
		if (size[0]) {
			element.size = 'Уточнити'
		} else {
			element.size = 'Без розміру'
		}
		setIsValue(element)
	}
	useEffect(() => {
		if (isValue) {
			console.log(isValue)
			dispatch(addToCart(isValue))
			setIsValue(false)
			setisVisibleNotificationAddtoCart(true)
			setTimeout(setisVisibleNotificationAddtoCart, 2000, false)
		}
	}, [isValue])

	return (
		<div className={styles.section}>
			<div className=''>
				<div className={styles.img_wrapper}>
					<NavLink to={page}>
						<img
							draggable='false'
							className={styles.img}
							src={heroImg}
							alt=''
						/>
					</NavLink>
					<img
						loading='lazy'
						draggable='false'
						className={styles.addToCart}
						src={addToCartImg}
						onClick={handleSubmit}
						alt=''
					/>
					{bannerText && banner && (
						<BannerImg text={bannerText} style={banner} />
					)}
				</div>
				<NavLink className={styles.title} to={page}>
					{kitcut(name, 40)} {color && <span>({color})</span>}
				</NavLink>
			</div>
			<div className=''>
				<p className={styles.old_price}>{old_price} ₴</p>
				<p className={styles.price}>
					<span className={styles.select}>{price}</span> ₴
				</p>
			</div>
		</div>
	)
}

export default memo(CatalogItemBox)
