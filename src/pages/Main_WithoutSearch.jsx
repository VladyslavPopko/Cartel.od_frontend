import { memo, useState } from 'react'
import { useDispatch } from 'react-redux'
import FooterBlock from '../blocks/Main/FooterBlock/FooterBlock'
import LoadingBox from '../components/LoadingBox/LoadingBox'
import HomePageHeader_WithoutSearch from '../components/Main/HomePageHeader_WithoutSearch/HomePageHeader_WithoutSearch'
import { DB_API } from '../constanses/constanses'
import useFetch from '../hooks/UseFetch'
import Cart from '../modals/cart'
import Submit from '../modals/submit'
import Thankyou from '../modals/thankyou'
import {
	changeCategories,
	changeDivisions,
	changeWhos,
} from '../redux/slices/dbSlice'
import styles from '../style/styleformain.module.scss'

const Main_WithoutSearch = ({ children }) => {
	const dispatch = useDispatch()
	const [dataWhos] = useFetch(`${DB_API}/who/all`)
	const [dataDivisions] = useFetch(`${DB_API}/division/all`)
	const [dataCategories] = useFetch(`${DB_API}/category/all`)

	dispatch(changeWhos(dataWhos))
	dispatch(changeDivisions(dataDivisions))
	dispatch(changeCategories(dataCategories))

	const [isVisibleCart, setIsVivsibleCart] = useState(false) // Cart Modal
	const [isVisibleSubmit, setIsVisibleSubmit] = useState(false) // Submit Modal
	const [isVisibleThankyou, setIsVisibleThankyou] = useState(false) // Thankyou Modal

	const [isLoading, setIsLoading] = useState(false) // loading
	const [isMenu, setIsMenu] = useState(false) // menu Open

	const handleCloseMenu = () => {
		setIsMenu(false)
	}

	return (
		<div>
			{isLoading && <LoadingBox type='bars' color='red' />}
			<div className={styles.section}>
				<div>
					<HomePageHeader_WithoutSearch setIsVivsibleCart={setIsVivsibleCart} />
					<div onClick={handleCloseMenu}>{children}</div>
				</div>
				<div>
					<FooterBlock />
				</div>
			</div>

			<Cart
				isVisibleCart={isVisibleCart}
				setIsVivsibleCart={setIsVivsibleCart}
				setIsVisibleSubmit={setIsVisibleSubmit}
			/>
			<Submit
				setIsLoading={setIsLoading}
				isVisibleSubmit={isVisibleSubmit}
				setIsVisibleSubmit={setIsVisibleSubmit}
				setIsVisibleThankyou={setIsVisibleThankyou}
			/>
			<Thankyou
				isVisibleThankyou={isVisibleThankyou}
				setIsVisibleThankyou={setIsVisibleThankyou}
			/>
		</div>
	)
}

export default memo(Main_WithoutSearch)
