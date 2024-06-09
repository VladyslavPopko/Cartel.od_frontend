import { memo } from 'react'
import SearchpageBlock from '../blocks/Search/SearchpageBlock/SearchpageBlock'
import Main_WithoutSearch from './Main_WithoutSearch'

const SearchPage = () => {
	return (
		<Main_WithoutSearch>
			<SearchpageBlock />
		</Main_WithoutSearch>
	)
}

export default memo(SearchPage)
