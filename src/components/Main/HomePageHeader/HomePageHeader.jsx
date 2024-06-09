import cn from 'classnames'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Navigate } from 'react-router-dom'
import img from '../../../img/HeaderBlock/cart.svg'
import searchImg from '../../../img/HomePage/search.svg'
import { changeSearch } from '../../../redux/slices/searchSlice'
import CatalogMenu from '../CatalogMenu/CatalogMenu'
import styles from './style.module.scss'

const HomePageHeader = ({ setIsVivsibleCart }) => {
	const [isNavigate, setisNavigate] = useState(false)
	const [isValue, setIsValue] = useState()
	const dispatch = useDispatch()
	const isSearch = useSelector(state => state.search.search)
	const qty = useSelector(state => state.cart.qty)

	const handleCart = () => {
		setIsVivsibleCart(true)
	}
	const onSubmit = e => {
		e.preventDefault()
		dispatch(changeSearch(isValue))
		setisNavigate(true)
	}
	return (
		<div className={styles.wrapper}>
			{isNavigate && <Navigate to='/search' />}
			<div className={styles.section}>
				<CatalogMenu />
				<div className={styles.title_section}>
					<NavLink to='/' className={styles.title}>
						CARTEL
					</NavLink>

					<form onSubmit={onSubmit}>
						<div className={styles.input_section}>
							<img className={styles.img_search} src={searchImg} alt='' />
							<input
								value={isValue}
								onChange={e => setIsValue(e.target.value)}
								className={styles.input}
								type='text'
								placeholder='Пошук'
							/>
						</div>
					</form>
				</div>
				<div className={styles.cart_section}>
					<NavLink className={styles.text} to='/about_us'>
						Про нас
					</NavLink>
					<div className={styles.content_button}>
						<div className={cn(styles.cart)} onClick={handleCart}>
							<p className={styles.img_text}>{qty}</p>
							<img draggable='false' className={styles.img} src={img} alt='' />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomePageHeader
