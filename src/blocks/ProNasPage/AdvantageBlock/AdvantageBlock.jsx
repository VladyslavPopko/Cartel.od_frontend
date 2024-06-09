import { memo } from 'react'
import AdvantageBox from '../../../components/ProNasPage/AdvantageBox/AdvantageBox'
import advantageItem1Img from '../../../img/ProNas/advantageImg1.svg'
import advantageItem2Img from '../../../img/ProNas/advantageImg2.svg'
import advantageItem3Img from '../../../img/ProNas/advantageImg3.svg'
import advantageItem4Img from '../../../img/ProNas/advantageImg4.svg'
import advantageItem5Img from '../../../img/ProNas/advantageImg5.svg'
import advantageItem6Img from '../../../img/ProNas/advantageImg6.svg'
import styles from './style.module.scss'

const AdvantageBlock = () => {
	const title = 'Наші  переваги '
	const item1_img1 = advantageItem1Img
	const item2_img1 = advantageItem2Img
	const item3_img1 = advantageItem3Img
	const item4_img1 = advantageItem4Img
	const item5_img1 = advantageItem5Img
	const item6_img1 = advantageItem6Img
	const item1_title = 'Зручність'
	const item1_text =
		"Весь одяг створюється з використанням високоякісних матеріалів; що робить його надзвичайно м'яким та еластичним."
	const item2_title = 'Якість'
	const item2_text =
		'Під час виготовлення одягу використовуються тільки найвищої якості матеріали і тканини. Виробництво проходить строгий контроль.'
	const item3_title = 'Практичність'
	const item3_text =
		'Тканина витримує багаторазові прання; зберігаючи свою початкову якість; насичений колір і не втрачає свою барвистість.'
	const item4_title = 'Швидка доставка'
	const item4_text =
		'Строк доставки не перевищує 1-2 днів з моменту замовлення.'
	const item5_title = 'Захист покупців'
	const item5_text =
		'Ви маєте право повернути придбаний товар протягом 14 днів з дати покупки.'

	return (
		<div className={styles.section}>
			<h2 className={styles.title}>{title}</h2>
			<div className={styles.list}>
				<AdvantageBox img={item1_img1} title={item1_title} text={item1_text} />
				<AdvantageBox img={item2_img1} title={item2_title} text={item2_text} />
				<AdvantageBox img={item3_img1} title={item3_title} text={item3_text} />
				<AdvantageBox img={item4_img1} title={item4_title} text={item4_text} />
				<AdvantageBox img={item5_img1} title={item5_title} text={item5_text} />
			</div>
		</div>
	)
}

export default memo(AdvantageBlock)
