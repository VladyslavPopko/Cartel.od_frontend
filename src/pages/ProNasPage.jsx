import React from "react";
import Main from "./Main";
import AnimationWrapper from "../wrappers/AnimationWrapper";
import AboutUsBlock from "../blocks/AboutUsBlock/AboutUsBlock";
import AdvantageBlock from "../blocks/AdvantageBlock/AdvantageBlock";
import ProNasInfoBlock from "../blocks/ProNasInfoBlock/ProNasInfoBlock";
import ChangeSexHomePage_withoutSearch from "../components/ChangeSexHomePage_WithoutSearch/ChangeSexHomePage_withoutSearch";

const ProNasPage = () => {
  return (
    <Main>
      <ChangeSexHomePage_withoutSearch />
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
  );
};

export default ProNasPage;
