import back from '../../../img/ProNas/back.svg'
import styles from './style.module.scss'

const ProNasInfoBlock = () => {
	const handleGoBack = () => {
		history.back()
	}
	window.scrollTo(pageYOffset, 0)
	return (
		<div className={styles.section}>
			<div className={styles.title}>
				ДОСТАВКА І ОПЛАТА
				<img
					src={back}
					onClick={handleGoBack}
					className={styles.back_img}
					alt=''
				/>
			</div>
			<h3 className={styles.content_title}>Доставка</h3>
			<div className={styles.content}>
				<p className={styles.content_text}>
					1. Доставка по Україні Новою поштою у відділення.
				</p>

				<p className={styles.content_text}>
					2.Доставка кур’єром Нової пошти до дверей.
				</p>
				<p className={styles.content_no_margin}>
					Відправлення здійснюється протягом 1-2 робочих днів з моменту
					підтвердження оплати клієнтом менеджеру. Доставка триває 1-2 днів з
					моменту замовлення.{' '}
					<span className={styles.bold}>
						Вартість доставки оплачує покупець.
					</span>
				</p>
			</div>
			<h3 className={styles.content_title}>Оплата</h3>
			<div className={styles.content}>
				<p className={styles.content_text}>
					Оплата при отриманні у відділеннях служби доставки Нова пошта. Ви
					зможете оплатити своє замовлення після детального огляду та примірки.
					В такому випадку Вам потрібно буде оплатити службі доставки Нова пошта
					додаткову комісію за переказ коштів.
				</p>

				<p className={styles.content_text}>
					Оплата через сайт або повна передоплата на карту банку. В такому
					випадку Вам не потрібно оплачувати комісію за переказ коштів службою
					Нова пошта.
				</p>
			</div>
			<div className={styles.content_warning}>
				<p className={styles.content_warning_title}>ВАЖЛИВО!!!</p>
				<p className={styles.content_warning_text}>
					Усі замовлення відправляються з мінімальною передплатою
					<span className={styles.selected}> 200 грн</span>.
				</p>
			</div>
		</div>
	)
}

export default ProNasInfoBlock
