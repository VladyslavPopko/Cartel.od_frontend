
import HeaderBlock from "../blocks/HeaderBlock/HeaderBlock";
import HeroBlock from "../blocks/HeroBlock/HeroBlock";
import AboutBlock from "../blocks/AboutBlock/AboutBlock";

import DescriptionBlock from "../blocks/DescriptionBlock/DescriptionBlock";
import AboutUsBlock from "../blocks/AboutUsBlock/AboutUsBlock";
import ReviewBlock from "../blocks/ReviewBlock/ReviewBlock";
import GalleryBlock from "../blocks/GalleryBlock/GalleryBlock";
import SizetableBlock from "../blocks/SizetableBlock/SizetableBlock";
import AdvantageBlock from "../blocks/AdvantageBlock/AdvantageBlock";
import { DATA_SHIRTS } from "../constanses/data_shirts";
import { useSelector } from "react-redux";
import { useState } from "react";

const Shirts = () => {
  const shirtsSelectedColor = useSelector((state) => state.shirtsColor.selectedColor);
  const [selected, setSelected] = useState(null); // size
  return (
    <>
      <HeaderBlock title="ВЕСНЯНИЙ РОЗПРОДАЖ -60% ВІД СТАРОЇ ЦІНИ" />
      <HeroBlock data={DATA_SHIRTS} selected={selected} setSelected={setSelected} selectedColor={shirtsSelectedColor} price="999" old_price="1 599"/>
      <AboutBlock radioId1="radio1" radioId2="radio2" radioId3="radio3"/>
      <DescriptionBlock />
      <AboutUsBlock />
      <ReviewBlock />
      <GalleryBlock />
      <SizetableBlock />
      <AdvantageBlock />
      <AboutBlock radioId1="radio4" radioId2="radio5" radioId3="radio6"/>
      <HeroBlock data={DATA_SHIRTS} selected={selected} setSelected={setSelected} selectedColor={shirtsSelectedColor} price="999" old_price="1 599"/>
    </>
  );
};

export default Shirts;
