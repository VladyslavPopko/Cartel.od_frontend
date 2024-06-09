import React from 'react'
import cartImg from '../../../img/HomePage/Cart.svg'
import styles from './style.module.scss'

const HomePageBanner = () => {
	return (
		<div className={styles.section}>
			<hr className={styles.hr} />
			<div className={styles.content}>
				<div className={styles.content_left}>
					<div className={styles.content_header}>
						<p className={styles.content_header_title}>Ви просили?</p>
						<p className={styles.content_header_text}>Ми продовжуємо!</p>
					</div>
					<div className={styles.content_body}>
						<img className={styles.content_body_img} src={cartImg} alt='' />
						<div className={styles.content_body_right}>
							<p className={styles.content_body_title}>Весняний розпродаж</p>
							<p className={styles.content_body_text}>-60%</p>
							<p className={styles.content_body_subtext}>
								Самий розпал сезону, не прогав час!
							</p>
						</div>
					</div>
					<div className={styles.content_footer}>*Акція діє до 31.05.2024</div>
				</div>

				<div className={styles.content_right}></div>
			</div>
		</div>
	)
}

export default HomePageBanner
