import React from 'react'
import characteristicsImg1 from '../../../img/HomePage/characteristics1.svg'
import characteristicsImg2 from '../../../img/HomePage/characteristics2.svg'
import characteristicsImg3 from '../../../img/HomePage/characteristics3.svg'
import CharacteristicsBox from '../CharacteristicsBox/CharacteristicsBox'
import styles from './style.module.scss'

const Characteristics = () => {
	return (
		<div className={styles.section}>
			<hr className={styles.hr} />
			<div className={styles.list}>
				<CharacteristicsBox
					img={characteristicsImg1}
					title='Безкоштовна доставка'
					text='Від 3000 грн. 
					Відпрявляємо так швидко, наскільки це можливо.'
				/>
				<CharacteristicsBox
					img={characteristicsImg2}
					title='Примірка перед покупкою'
					text='Даємо змогу приміряти одяг, взуття та інші товари перед оплатою. Оплачуйте лише те, що вам підійшло та сподобалося.'
				/>
				<CharacteristicsBox
					img={characteristicsImg3}
					title='Заощаджуй власні кошти'
					text='Грандіозні розпродажі на весь асортимент товару.'
				/>
			</div>
			<hr className={styles.hr} />
		</div>
	)
}

export default Characteristics
