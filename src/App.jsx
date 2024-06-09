import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import 'reset-css'
import LoadingBox from './components/LoadingBox/LoadingBox'
import CatalogBanner from './components/Main/CatalogBanner/CatalogBanner'

import AssignPage from './pages/AssignPage'
import HomePage from './pages/HomePage'
import PoliticsPage from './pages/PoliticsPage'
import ProNasPage from './pages/ProNasPage'
import ProductPage from './pages/ProductPage'
import SearchPage from './pages/SearchPage'
import './style/main.scss'

const CatalogLazy = lazy(() => import('./pages/Catalog'))

const App = () => {
	return (
		<>
			<CatalogBanner />
			<Suspense fallback={<LoadingBox type='bars' color='red' />}>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/search' element={<SearchPage />} />
					<Route path='/about_us' element={<ProNasPage />} />
					<Route path='/politics' element={<PoliticsPage />} />
					<Route path='/assign' element={<AssignPage />} />
					<Route path='/search' element={<SearchPage />} />
					<Route path='/search/:searchName' element={<SearchPage />} />
					<Route
						path='/:who/:division/:category/:article'
						element={<ProductPage />}
					/>
					<Route path='/:who' element={<CatalogLazy />} />
					<Route path='/:who/:division' element={<CatalogLazy />} />
					<Route path='/:who/:division/:category' element={<CatalogLazy />} />
					<Route path='*' element={<HomePage />} />
				</Routes>
			</Suspense>
		</>
	)
}

export default App
