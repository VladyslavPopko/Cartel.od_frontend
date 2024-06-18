import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { DB_API } from '../constanses/constanses'
import { changeWhos } from '../redux/slices/dbSlice'

const useFetchAllWhos = url => {
	const [data, setData] = useState([])
	const [isError, setIsError] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const dispatch = useDispatch()

	useEffect(() => {
		const getData = async () => {
			try {
				setIsLoading(true)
				const res = await fetch(`${DB_API}/who/all`)

				if (!res.ok) {
					throw new Error('Failed to fetch')
				}

				const data = await res.json()
				setData(data)
				dispatch(changeWhos(data))
			} catch (e) {
				setIsError(true)
			} finally {
				setIsLoading(false)
			}
		}

		getData()
	}, [])

	return [data, isLoading, isError]
}

export default useFetchAllWhos
