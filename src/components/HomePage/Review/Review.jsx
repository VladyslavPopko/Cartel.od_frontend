import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import ReviewBox from '../ReviewBox/ReviewBox'
import styles from './style.module.scss'

const Review = () => {
	return (
		<div className={styles.section}>
			<h2 className={styles.title}>Відгуки:</h2>

			<div className={styles.slider_mobile}>
				<Slide slidesToScroll={1} slidesToShow={1} indicators={false}>
					<div className={styles.slider_item}>
						<ReviewBox
							title='Олена (Одеса)'
							text='У Cartel я робила замовлення двічі. Я рекомендую цей магазин, оскільки замовлення обробили оперативно, а в чаті швидко, чітко та конкретно відповідають на всі питання. Навіть готові виходити на зустріч у плані обміну одягу.'
						/>
					</div>
					<div className={styles.slider_item}>
						<ReviewBox
							title='Інна (Харків)'
							text='Якість товарів вражає: колір спортивного костюму, який я замовила, виявився ще приємнішим, ніж я сподівалася. Приємно вражена швидкістю доставки.'
						/>
					</div>
					<div className={styles.slider_item}>
						<ReviewBox
							title='Вікторія (Дніпро)'
							text='Покупкой очень довольна очень быстро доставили.Спасибо огромное)))) Размеры соответствуют действительности)))) Заказывала первый раз ,и думаю,не последний)))))'
						/>
					</div>
					<div className={styles.slider_item}>
						<ReviewBox
							title='Олександр (Вінниця)'
							text='Стильний та зручний костюм. Сподобався фасон та матеріал. Розмір підійшов. Чудово, коли є заміри)'
						/>
					</div>
				</Slide>
			</div>
			<div className={styles.slider_main}>
				<Slide slidesToScroll={2} slidesToShow={3} indicators={false}>
					<div className={styles.slider_item}>
						<ReviewBox
							title='Олена (Одеса)'
							text='У Cartel я робила замовлення двічі. Я рекомендую цей магазин, оскільки замовлення обробили оперативно, а в чаті швидко, чітко та конкретно відповідають на всі питання. Навіть готові виходити на зустріч у плані обміну одягу.'
						/>
					</div>
					<div className={styles.slider_item}>
						<ReviewBox
							title='Інна (Харків)'
							text='Якість товарів вражає: колір спортивного костюму, який я замовила, виявився ще приємнішим, ніж я сподівалася. Приємно вражена швидкістю доставки.'
						/>
					</div>
					<div className={styles.slider_item}>
						<ReviewBox
							title='Вікторія (Дніпро)'
							text='Покупкой очень довольна очень быстро доставили.Спасибо огромное)))) Размеры соответствуют действительности)))) Заказывала первый раз ,и думаю,не последний)))))'
						/>
					</div>
					<div className={styles.slider_item}>
						<ReviewBox
							title='Олександр (Вінниця)'
							text='Стильний та зручний костюм. Сподобався фасон та матеріал. Розмір підійшов. Чудово, коли є заміри)'
						/>
					</div>
				</Slide>
			</div>
		</div>
	)
}

export default Review
