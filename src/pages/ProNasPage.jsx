import React from 'react'
import AboutUsBlock from '../blocks/ProNasPage/AboutUsBlock/AboutUsBlock'
import AdvantageBlock from '../blocks/ProNasPage/AdvantageBlock/AdvantageBlock'
import ProNasInfoBlock from '../blocks/ProNasPage/ProNasInfoBlock/ProNasInfoBlock'
import AnimationWrapper from '../wrappers/AnimationWrapper'
import Main from './Main'

const ProNasPage = () => {
	document.title = `Cartel - Про нас`
	return (
		<Main>
			<AnimationWrapper>
				<ProNasInfoBlock />
			</AnimationWrapper>
			<AnimationWrapper>
				<AboutUsBlock />
			</AnimationWrapper>
			<AnimationWrapper>
				<AdvantageBlock />
			</AnimationWrapper>
		</Main>
	)
}

export default ProNasPage
