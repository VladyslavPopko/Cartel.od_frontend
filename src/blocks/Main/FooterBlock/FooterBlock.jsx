import cn from 'classnames'
import { NavLink } from 'react-router-dom'
import { INSTAGRAM } from '../../../constanses/constanses'
import instagramImg from '../../../img/HomePage/instagram.svg'
import meestImg from '../../../img/HomePage/meest.jpg'
import novaImg from '../../../img/HomePage/nova.jpg'
import ukrImg from '../../../img/HomePage/ukr.jpg'
import styles from './style.module.scss'

const FooterBlock = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.section}>
				<div className={styles.content}>
					<h3 className={styles.title}>ДОСТАВКА</h3>
					<div className={styles.list}>
						<p className={styles.text}>Кур'єром Meest ПОШТА</p>
						<p className={styles.text}>У відділення Нова Пошта</p>
						<p className={styles.text}>У відділення УкрПошти</p>
					</div>
					<div className={styles.img_list}>
						<img className={styles.img_delivery} src={novaImg} alt='' />
						<img className={styles.img_delivery} src={meestImg} alt='' />
						<img className={styles.img_delivery} src={ukrImg} alt='' />
					</div>
				</div>
				<div className={styles.content}>
					<h3 className={styles.title}>ДОПОМОГА ТА ІНФОРМАЦІЯ</h3>
					<div className={styles.list}>
						<NavLink to='/politics' className={cn(styles.text, styles.cursor)}>
							Політика конфеденційності
						</NavLink>
						<NavLink to='/assign' className={cn(styles.text, styles.cursor)}>
							Угода користувача
						</NavLink>
						{/* <p className={styles.text}>Контакти</p> */}
						<NavLink to='/about_us' className={styles.text}>
							Про нас
						</NavLink>
					</div>
				</div>
				<div className={styles.content}>
					<h3 className={styles.title}>МИ У СОЦ.МЕРЕЖАХ</h3>
					<div className={styles.img_list}>
						<a target='_blank' href={INSTAGRAM}>
							<img className={styles.img_social} src={instagramImg} alt='' />
						</a>
						{/* <a target='_blank' href={INSTAGRAM}>
							<img className={styles.img_social} src={facebookImg} alt='' />
						</a> */}
					</div>
				</div>
			</div>
		</div>
	)
}

export default FooterBlock
