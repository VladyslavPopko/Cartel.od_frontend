import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Slide } from 'react-slideshow-image'
import { DB_API } from '../../../constanses/constanses'
import useFetch from '../../../hooks/UseFetch'
import styles from './style.module.scss'

const HomePageBanner = () => {
	const [data, setData] = useState([])
	const [info] = useFetch(`${DB_API}/findpromoblocks`)

	useEffect(() => {
		setData(info)
	}, [info])
	return (
		<div className={styles.section}>
			<hr className={styles.hr} />
			{data[0]?.img && (
				<Slide slidesToScroll={1} slidesToShow={1} indicators={false}>
					{data[0]?.img &&
						data.map(element => (
							<div key={element.id} className={styles.slider_item}>
								<NavLink to={element.path}>
									<img
										draggable='false'
										src={element.img}
										className={styles.slider_item}
									/>
								</NavLink>
							</div>
						))}
				</Slide>
			)}
		</div>
	)
}

export default HomePageBanner
