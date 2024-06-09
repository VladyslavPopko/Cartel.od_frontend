import { memo } from 'react'
import AboutUsBox from '../../../components/ProNasPage/AboutUsBox/AboutUsBox'
import aboutusItem1Img from '../../../img/ProNas/aboutUsImg1.svg'
import aboutusItem2Img from '../../../img/ProNas/aboutUsImg2.svg'
import styles from './style.module.scss'

const AboutUsBlock = () => {
	const item1_img1 = aboutusItem1Img
	const item1_title = '1000'
	const item1_text = 'Замовлень'
	const item2_title = '300'
	const item2_text = 'Відгуків'
	const item2_img1 = aboutusItem2Img
	return (
		<div className={styles.section}>
			<AboutUsBox img={item1_img1} title={item1_title} text={item1_text} />
			<AboutUsBox img={item2_img1} title={item2_title} text={item2_text} />
		</div>
	)
}

export default memo(AboutUsBlock)
