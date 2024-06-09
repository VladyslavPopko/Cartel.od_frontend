import { memo } from 'react'
import Cartblock from '../blocks/Modals/CartBlock/Cartblock'

const Cart = ({ isVisibleCart, setIsVivsibleCart, setIsVisibleSubmit }) => {
	return (
		<div>
			<Cartblock
				isVisibleCart={isVisibleCart}
				setIsVivsibleCart={setIsVivsibleCart}
				setIsVisibleSubmit={setIsVisibleSubmit}
			/>
		</div>
	)
}

export default memo(Cart)
