import { memo } from 'react'
import CatalogBlock from '../blocks/Catalog/CatalogBlock/CatalogBlock'
import Main from './Main'

const Catalog = ({ menu }) => {
	return (
		<Main>
			<CatalogBlock menu={menu} />
		</Main>
	)
}

export default memo(Catalog)
