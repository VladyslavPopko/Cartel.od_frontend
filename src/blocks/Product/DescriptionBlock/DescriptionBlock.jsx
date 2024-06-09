import { memo } from 'react'
import DescriebeBox from '../../../components/Product/DescriebeBox/DescriebeBox'
import DescriptionItem from '../../../components/Product/DescriptionItem/DescriptionItem'
import styles from './style.module.scss'

const DescriptionBlock = ({ productData }) => {
	if (productData?.descriebeArticle) {
		document.getElementById('describeArticle').innerHTML =
			productData?.descriebeArticle
	}
	return (
		<div className={styles.section}>
			<div className={styles.section_content}>
				<h2 className={styles.section_title}>ОПИС ТОВАРУ</h2>
				<div id='describeArticle' className={styles.descriebe_section}></div>
				<div className={styles.section_list}>
					{productData?.descriebeImg1 && productData?.descriebeText1 && (
						<DescriptionItem
							img={productData?.descriebeImg1}
							logotext={productData?.descriebeTitle1}
							title={productData?.descriebeText1}
							text={productData?.descriebeSubText1}
						/>
					)}
					{productData?.descriebeImg2 && productData?.descriebeText2 && (
						<DescriptionItem
							img={productData?.descriebeImg2}
							logotext={productData?.descriebeTitle2}
							title={productData?.descriebeText2}
							text={productData?.descriebeSubText2}
						/>
					)}
					{productData?.descriebeImg3 && productData?.descriebeText3 && (
						<DescriptionItem
							img={productData?.descriebeImg3}
							logotext={productData?.descriebeTitle3}
							title={productData?.descriebeText3}
							text={productData?.descriebeSubText3}
						/>
					)}
					{productData?.descriebeImg4 && productData?.descriebeText4 && (
						<DescriptionItem
							img={productData?.descriebeImg4}
							logotext={productData?.descriebeTitle4}
							title={productData?.descriebeText4}
							text={productData?.descriebeSubText4}
						/>
					)}
					{productData?.descriebeImg1 &&
						!productData?.descriebeText1 &&
						productData?.descriebeArticle && (
							<div className={styles.descriebeBox_list}>
								{productData?.descriebeImg1 &&
									!productData?.descriebeText1 &&
									productData?.descriebeArticle && (
										<DescriebeBox
											img={productData?.descriebeImg1}
											text={productData?.descriebeTitle1}
										/>
									)}

								{productData?.descriebeImg2 &&
									!productData?.descriebeText2 &&
									productData?.descriebeArticle && (
										<DescriebeBox
											img={productData?.descriebeImg2}
											text={productData?.descriebeTitle2}
										/>
									)}

								{productData?.descriebeImg3 &&
									!productData?.descriebeText3 &&
									productData?.descriebeArticle && (
										<DescriebeBox
											img={productData?.descriebeImg3}
											text={productData?.descriebeTitle3}
										/>
									)}

								{productData?.descriebeImg4 &&
									!productData?.descriebeText4 &&
									productData?.descriebeArticle && (
										<DescriebeBox
											img={productData?.descriebeImg4}
											text={productData?.descriebeTitle4}
										/>
									)}
							</div>
						)}
				</div>
			</div>
		</div>
	)
}

export default memo(DescriptionBlock)
