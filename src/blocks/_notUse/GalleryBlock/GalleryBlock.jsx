import { memo } from 'react'
import GalleryBox from '../../../components/Modals/GalleryBox/GalleryBox'
import GaleryListChoose from '../../../components/_notUse/GaleryListChoose/GaleryListChoose'
import styles from './style.module.scss'

const GalleryBlock = ({ isColor, setIsColor, data, content }) => {
	const { title } = content
	return (
		<div className={styles.section}>
			<h2 className={styles.title}>{title}</h2>
			<GaleryListChoose data={data} isColor={isColor} setIsColor={setIsColor} />
			<div>
				{data.map(
					el =>
						isColor === el.color && (
							<div className={styles.list} key={el.id}>
								<GalleryBox img={el.galery_img1} />
								<GalleryBox img={el.galery_img2} />
								<GalleryBox img={el.galery_img3} />
								<GalleryBox img={el.galery_img4} />
							</div>
						)
				)}
			</div>
		</div>
	)
}

export default memo(GalleryBlock)
