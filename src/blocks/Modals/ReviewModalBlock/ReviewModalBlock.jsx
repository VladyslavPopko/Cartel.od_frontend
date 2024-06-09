import { yupResolver } from '@hookform/resolvers/yup'
import { memo } from 'react'
import { useForm } from 'react-hook-form'
import Button from '../../../components/Button/Button'
import { GOOGLE_SHEET, REVIEW_LIST } from '../../../constanses/constanses'
import UseFetchToGoogle from '../../../hooks/UseFetchToGoogle'
import close from '../../../img/ReviewModalBlock/close.svg'
import { reviewValidationSchema } from '../../../validationSchemas/reviewValidationsSchema'
import ModalWrapper from '../../../wrappers/ModalWrapper/ModalWrapper'
import styles from './style.module.scss'

const ReviewModalBlock = ({
	isVisibleReview,
	setIsVisibleReview,
	setIsVisibleReviewThankyou,
	setIsLoading,
}) => {
	const handleCloseReview = () => {
		setIsVisibleReview(false)
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
			price: '',
		},
		resolver: yupResolver(reviewValidationSchema),
		mode: 'onChange',
	})
	const onSubmit = data => {
		let formBody = []
		for (let property in data) {
			let encodedKey = encodeURIComponent(property)
			let encodedValue = encodeURIComponent(data[property])
			formBody.push(encodedKey + '=' + encodedValue)
		}
		formBody.push('item=' + REVIEW_LIST)
		formBody.push('google=' + GOOGLE_SHEET)
		formBody.push('list=' + REVIEW_LIST)
		formBody = formBody.join('&')
		UseFetchToGoogle(formBody, setIsLoading)
		setIsLoading(true)
		reset()
		setIsVisibleReview(false)
		setIsVisibleReviewThankyou(true)
	}
	return (
		<ModalWrapper isVisible={isVisibleReview} handleClose={handleCloseReview}>
			<header className={styles.header}>
				<img
					draggable='false'
					className={styles.close}
					src={close}
					alt=''
					onClick={handleCloseReview}
				/>
			</header>
			<main className={styles.main}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<h2 className={styles.title}>Залиште ваш відгук</h2>
					<div className={styles.input_list}>
						<input
							{...register('name')}
							type='text'
							placeholder='П.І.Б'
							className={styles.input}
						/>
						{errors.name && (
							<p className={styles.error}>
								Перевірте введене ім'я. Приклад: "Петро"
							</p>
						)}
						<input
							{...register('tel')}
							type='tel'
							placeholder='Введіть Ваш телефон'
							className={styles.input}
						/>
						{errors.tel && (
							<p className={styles.error}>
								Перевірте введений номер телефону. Приклад: "+380505555555"
							</p>
						)}
						<input
							{...register('email')}
							type='email'
							placeholder='Введіть Ваш Email'
							className={styles.input}
						/>
						{errors.email && (
							<p className={styles.error}>
								Перевірте введену пошту. Приклад: "email@gmail.com"
							</p>
						)}
						<textarea
							{...register('price')}
							type='text'
							placeholder='Введіть Ваш відгук'
							className={styles.input}
						/>
						{errors.text && <p className={styles.error}>Введіть відгук</p>}
					</div>
					<Button text='відправити' type='submit' className={styles.btn} />
				</form>
			</main>
		</ModalWrapper>
	)
}

export default memo(ReviewModalBlock)
