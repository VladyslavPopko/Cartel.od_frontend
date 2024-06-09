import React from 'react'
import { useSelector } from 'react-redux'
import ChangeWhoImgBox from '../ChangeWhoImgBox/ChangeWhoImgBox'
import styles from './style.module.scss'

const HomePageChangerbyImg = () => {
	const db = useSelector(state => state.db.whos)
	return (
		<div className={styles.section}>
			{db &&
				db.map(who => (
					<ChangeWhoImgBox
						link={who.path}
						key={who.id}
						img={who.img}
						text={who.who}
					/>
				))}
		</div>
	)
}

export default HomePageChangerbyImg
