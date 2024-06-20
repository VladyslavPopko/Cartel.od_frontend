import close from '../../../img/SubmitBlock/close.svg'
import submitImg from '../../../img/SubmitBlock/img.svg'
import styles from './style.module.scss'

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import Form from '../../../components/Form/Form'
import SubmitBox from '../../../components/Modals/SubmitBox/SubmitBox'
import {
	decrementQty,
	deleteCart,
	incrementQty,
} from '../../../redux/slices/cartSlice'
import { formValidationSchema } from '../../../validationSchemas/formValidationsSchema'

import CartBox from '../../../components/Modals/CartBox/CartBox'
import { DB_API } from '../../../constanses/constanses'
import UseFetchToCRM from '../../../hooks/UseFetchToCRM'
import ModalWrapper from '../../../wrappers/ModalWrapper/ModalWrapper'

const SubmitBlock = ({
	isVisibleSubmit,
	setIsVisibleSubmit,
	setIsVisibleThankyou,
	setIsLoading,
}) => {
	const dispatch = useDispatch()
	const cart = useSelector(state => state.cart.items)
	const fullCart = useSelector(state => state.cart)

	const handleCloseSubmit = () => {
		setIsVisibleSubmit(false)
	}
	const onSubmit = data => {
		// cart.map(el => {
		// 	let formBody = []
		// 	for (let property in data) {
		// 		let encodedKey = encodeURIComponent(property)
		// 		let encodedValue = encodeURIComponent(data[property])
		// 		formBody.push(encodedKey + '=' + encodedValue)
		// 	}
		// 	formBody.push('item=' + el.name)
		// 	formBody.push('google=' + GOOGLE_SHEET)
		// 	formBody.push('list=' + GOOGLE_LIST)
		// 	formBody.push('price=' + el.price)
		// 	formBody.push('color=' + el.id)
		// 	formBody.push('size=' + el.size)
		// 	formBody.push('count=' + el.qty)
		// 	formBody.push('vendor=' + el.vendor)
		// 	formBody = formBody.join('&')

		// 	UseFetchToGoogle(formBody, setIsLoading)
		// })
		const products = []

		cart.map(el => {
			const product_not_exist_vendor_not_exist = {
				vendor_name: el.vendor, // название поставщика (заменить)
				product_title: el.nameInCRM, // название нового товара
				drop_price: 0,
				price: el.price, // цена продажи товара (заменить)
				amount: el.qty, // количество товара
				size_title: el.size, // размер товара (необязательно)
				// size_note: el.color, // примечание к размеру (необязательно)
			}
			products.push(product_not_exist_vendor_not_exist)
		})

		const data_prod = {
			name: data.name, // имя покупателя
			phone: data.tel, // телефон
			products: products, // массив с товарами заказа
			order_source: '', // источник заказа (необязательно)
			traffic_source: '', // источник трафика (необязательно)
			utm_source: '', // utm_source (необязательно)
			utm_medium: '', // utm_medium (необязательно)
			utm_term: '', // utm_term (необязательно)
			utm_content: '', // utm_content (необязательно)
			utm_campaign: '', // utm_campaign (необязательно)
		}
		const data_order = {
			name: data.name,
			phone: data.tel,
			email: data.email,
			cart: fullCart,
		}
		const fetchAddOrder = async () => {
			await fetch(`${DB_API}/order/add`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data_order),
			})
				.then(resp => resp.json())
				.then(data => {
					data.success ? null : console.log('Not added to orders')
				})
		}

		fetchAddOrder()

		UseFetchToCRM(data_prod, setIsLoading)
		dispatch(deleteCart())
		reset()
		setIsLoading(true)
		setIsVisibleSubmit(false)
		setIsVisibleThankyou(true)

		// start facebook event pixel
		// fbq('track', 'Purchase')
		// end facebook event pixel
	}

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		defaultValues: {
			name: '',
			email: '',
			tel: '',
		},
		resolver: yupResolver(formValidationSchema),
		mode: 'onChange',
	})
	return (
		<ModalWrapper isVisible={isVisibleSubmit} handleClose={handleCloseSubmit}>
			<header className={styles.header}>
				<h2 className={styles.title}>Оформлення замовлення</h2>
				<img
					draggable='false'
					className={styles.close}
					src={close}
					alt=''
					onClick={handleCloseSubmit}
				/>
			</header>
			<form onSubmit={handleSubmit(onSubmit)}>
				<main className={styles.main}>
					<h2 className={styles.notification_title}>ВАЖЛИВО!!!</h2>
					<h3 className={styles.notification_text}>
						Відправка здійснюється після повної або часткової оплати
						(передплати){' '}
						<span className={styles.bold}>
							в розмірі <span className={styles.select}> 200 </span>
							грн.
						</span>
					</h3>
					<div className={styles.main_header}>
						<div className=''>
							<h3 className={styles.main_title}>Укажіть свої контактні дані</h3>
							<h4 className={styles.main_text}>
								Ми зв’яжемося з вами у найближчий час
							</h4>
						</div>
						<img
							className={styles.submit_img}
							draggable='false'
							src={submitImg}
							alt=''
						/>
					</div>

					<Form register={register} errors={errors} />
				</main>
				<footer className={styles.footer}>
					<div className={styles.footer_left}>
						<h3 className={styles.footer_title}>Ваше замовлення:</h3>
						{cart.map(el => (
							<CartBox
								key={el.id}
								article={el.article}
								heroImg={el.heroImg}
								name={el.name}
								color={el.color}
								size={el.size}
								size2={el.size2}
								who={el.who}
								division={el.division}
								category={el.category}
								count={el.qty}
								old_price={el.old_price}
								price={el.price}
								page={el.page}
								onClickInc={() => dispatch(incrementQty(el))}
								onClickDec={() => dispatch(decrementQty(el))}
							/>
						))}
					</div>
					<div className={styles.footer_right}>
						<input
							className={styles.input}
							type='text'
							placeholder='Промокод на знижку'
						/>
						<SubmitBox />
					</div>
				</footer>
			</form>
		</ModalWrapper>
	)
}

export default SubmitBlock
