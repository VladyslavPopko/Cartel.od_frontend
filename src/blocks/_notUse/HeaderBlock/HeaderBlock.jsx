import cn from 'classnames'
import { memo } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import img from '../../../img/HeaderBlock/cart.svg'
import icon from '../../../img/icon.jpg'
import styles from './style.module.scss'

const HeaderBlock = ({ setIsVivsibleCart }) => {
	const qty = useSelector(state => state.cart.qty)
	const handleCart = () => {
		setIsVivsibleCart(true)
	}

	return (
		<div className={cn(styles.wrapper)}>
			<div className={styles.content}>
				<div className={styles.menu_hamburger}>
					<NavLink className={styles.logo_section} to='/'>
						<img className={styles.logo} src={icon} alt='' />
						{/* <p className={styles.logo_text}>Каталог</p> */}
					</NavLink>
					{/* <img
            onClick={handleMenu}
            className={cn(styles.hamburger, !isMenu && styles.active)}
            src={imgham}
            alt=""
          />
          <img
            onClick={handleMenu}
            className={cn(styles.close, isMenu && styles.active)}
            src={close}
            alt=""
          />
          <p onClick={handleMenu}>Каталог</p> */}
				</div>

				<p className={styles.text}>
					ВЕСНЯНИЙ РОЗПРОДАЖ до -60% ВІД СТАРОЇ ЦІНИ
				</p>
				<div className={styles.content_button}>
					<div className={cn(styles.cart)} onClick={handleCart}>
						<p className={styles.img_text}>{qty}</p>
						<img draggable='false' className={styles.img} src={img} alt='' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default memo(HeaderBlock)
