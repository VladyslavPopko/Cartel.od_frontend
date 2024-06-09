import { yupResolver } from '@hookform/resolvers/yup'
import { memo } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import Button from '../../../components/Button/Button'
import Radio from '../../../components/_notUse/Radio/Radio'
import Time from '../../../components/_notUse/Time/Time'
import { addToCart } from '../../../redux/slices/cartSlice'
import { radiosValidationSchema } from '../../../validationSchemas/radioValidationSchema'
import styles from './style.module.scss'

const PriceBlock = ({
	radioId1,
	radioId2,
	radioId3,
	selected,
	data,
	addNotification,
	content,
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		defaultValues: {
			value: '',
		},
		resolver: yupResolver(radiosValidationSchema),
		mode: 'onChange',
	})

	const dispatch = useDispatch()

	const onSubmit = dataInfo => {
		let size

		switch (selected) {
			case 'Розмір: S': {
				size = 'S'
				break
			}
			case 'Розмір: M': {
				size = 'M'
				break
			}
			case 'Розмір: L': {
				size = 'L'
				break
			}
			case 'Розмір: XL': {
				size = 'XL'
				break
			}
			case 'Розмір: XXL': {
				size = 'XXL'
				break
			}
			default: {
				size = 'Уточнити'
				break
			}
		}

		switch (dataInfo.value) {
			case '1': {
				const info = data[0]
				info.size = size
				dispatch(addToCart(info))
				break
			}
			case '2': {
				const info = data.filter(el => el.id === 1 || el.id === 2)
				info.map(el => {
					el.size = size
					dispatch(addToCart(el))
				})
				break
			}
			case '3': {
				const info = data.filter(
					el => el.id === 1 || el.id === 2 || el.id === 3
				)
				info.map(el => {
					el.size = size
					dispatch(addToCart(el))
				})
				break
			}
			default: {
				break
			}
		}
		addNotification(true)
		setTimeout(addNotification, 2000, false)
	}

	return (
		<div className={styles.section}>
			<div className={styles.section_content}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Radio
						content={content}
						errors={errors.value}
						register={register}
						radioId1={radioId1}
						radioId2={radioId2}
						radioId3={radioId3}
					/>
					{errors.value && (
						<p className={styles.error}>Виберіть один із варіантів вище</p>
					)}
					<p className={styles.text}>До кінця АКЦІЇ залишилось:</p>
					<Time />
					<Button
						text='ДОДАТИ У КОШИК'
						className={styles.button}
						type='submit'
					/>
				</form>
			</div>
		</div>
	)
}

export default memo(PriceBlock)
