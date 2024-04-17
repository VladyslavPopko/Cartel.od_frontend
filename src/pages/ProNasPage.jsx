import React from "react";
import Main from "./Main";
import AnimationWrapper from "../wrappers/AnimationWrapper";
import AboutUsBlock from "../blocks/AboutUsBlock/AboutUsBlock";
import AdvantageBlock from "../blocks/AdvantageBlock/AdvantageBlock";



const ProNasPage = () => {
  return (
    <Main>
      <AnimationWrapper>
        <AboutUsBlock />
      </AnimationWrapper>
      <AnimationWrapper>
        <AdvantageBlock />
      </AnimationWrapper>
    </Main>
  );
};

export default ProNasPage;
