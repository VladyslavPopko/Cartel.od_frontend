import React from 'react'
import styles from './style.module.scss'

const AboutUs = () => {
	return (
		<div className={styles.section}>
			<h2 className={styles.title}>Про нас:</h2>
			<div className={styles.text_section}>
				<p className={styles.text}>
					Запрошую вас у світ <span className={styles.bold}>Cartel </span>–
					вашого закутка стилю та елегантності. Ми – команда ентузіастів, яка
					пристрастно вірить у те, що ваш стиль – це вираз вашої особистості.
					Заснована з любов'ю до стилю та вишуканості, наша місія полягає в
					тому, щоб надати вам можливість вибирати з найякісніших та
					найактуальніших трендів моди.
				</p>
				<p className={styles.text}>
					У Cartel ми завжди прагнемо до того, щоб ви відчували себе унікальними
					та впевненими у собі. Наш асортимент включає в себе як класичні
					рішення, що ніколи не виходять з моди, так і сміливі та вишукані
					новинки, які допоможуть вам підкреслити вашу індивідуальність.
				</p>
				<p className={styles.text}>
					Ми пишаємося тим, що пропонуємо не лише найкращі товари, але й
					надзвичайне обслуговування клієнтів. Наша команда завжди готова
					допомогти вам у виборі, відповісти на всі ваші питання та забезпечити
					найвищу якість обслуговування.
				</p>
				<p className={styles.text}>
					Приєднуйтесь до нашої спільноти модниць та модників, які розуміють, що
					стиль – це більше, ніж просто одяг – це спосіб життя. І разом ми
					будемо творити вишукані образи, які вразять світ своєю неповторністю.
				</p>
			</div>
		</div>
	)
}

export default AboutUs
