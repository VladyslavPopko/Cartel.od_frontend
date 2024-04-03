import HeroBlock from "../../blocks/HeroBlock/HeroBlock";
import AboutBlock from "../../blocks/AboutBlock/AboutBlock";
import DescriptionBlock from "../../blocks/DescriptionBlock/DescriptionBlock";
import AboutUsBlock from "../../blocks/AboutUsBlock/AboutUsBlock";
import ReviewBlock from "../../blocks/ReviewBlock/ReviewBlock";
import GalleryBlock from "../../blocks/GalleryBlock/GalleryBlock";
import SizetableBlock from "../../blocks/SizetableBlock/SizetableBlock";
import AdvantageBlock from "../../blocks/AdvantageBlock/AdvantageBlock";

import Review from "../../modals/review";
import ReviewThankyou from "../../modals/reviewThankyou";
import SizeTable from "../../modals/sizeTable";

import NotificationBox from "../../components/NotificationBox/NotificationBox";
import LoadingBox from "../../components/LoadingBox/LoadingBox";
import AnimationWrapper from "../../wrappers/AnimationWrapper";

import agree from "../../img/Notifications/agree.svg";

import {
  DATA,
  GOOGLE_LIST,
  GOOGLE_SHEET,
  L,
  M,
  ONE,
  S,
  XL,
  XXL,
} from "../../datas/Farsh_Drop/data_complectOverTrousersTshirt";
import { memo, useState } from "react";
import { CONTENT } from "../../contents/Farsh_Drop/ComplectOverTrousersTshirt";

import { REVIEW_LIST } from "../../constanses/constanses";
import Main from "../Main";

const ComplectOverTrousersTshirt = () => {
  const [selected, setSelected] = useState(null); // size
  const [isColor, setIsColor] = useState(ONE); // color
  const [isLoading, setIsLoading] = useState(false); // loading

  const [isVisibleReview, setIsVisibleReview] = useState(false); // Review Form Modal
  const [isVisibleReviewThankyou, setIsVisibleReviewThankyou] = useState(false); // Review Thankyou Modal
  const [isVisibleSizetable, setIsVisibleSizetable] = useState(false); // Modal SizeTable
  const [isVisibleNotificationAddtoCart, setisVisibleNotificationAddtoCart] =
    useState(false); // Notification Add to Cart

  const handleReview = () => {
    setIsVisibleReview(true);
  };
  const {
    contentHero,
    contentAbout,
    contentDesciption,
    contentAboutUs,
    contentReview,
    contentGallery,
    contentSizeTable,
    contentAdvantage,
    contentReviewModal,
    contentReviewThankYou,
    contentModalSizeTable,
    sizeArray,
  } = CONTENT;

  let size;
  switch (selected) { // То какие размеры заходят в CRM
    case "Розмір: S": {
      size = "С";
      break;
    }
    case "Розмір: M": {
      size = "М";
      break;
    }
    case "Розмір: L": {
      size = "Л";
      break;
    }
    case "Розмір: XL": {
      size = "ХЛ";
      break;
    }
    case "Розмір: XXL": {
      size = XXL;
      break;
    }
    default: {
      size = "Уточнити";
      break;
    }
  }

  return (
    <>
      <Main>
        {isLoading && <LoadingBox type="bars" color="red" />}

        <NotificationBox
          text="Товар додано до кошика"
          img={agree}
          isVisibleNotificationAddtoCart={isVisibleNotificationAddtoCart}
        />

        <AnimationWrapper>
          <HeroBlock
            sizeArray={sizeArray}
            sizeValue={size}
            setIsVisibleSizetable={setIsVisibleSizetable}
            isColor={isColor}
            setIsColor={setIsColor}
            addNotification={setisVisibleNotificationAddtoCart}
            data={DATA}
            selected={selected}
            setSelected={setSelected}
            content={contentHero}
          />
        </AnimationWrapper>
        <AnimationWrapper>
          <AboutBlock
            content={contentAbout}
            addNotification={setisVisibleNotificationAddtoCart}
            radioId1="radio1"
            radioId2="radio2"
            radioId3="radio3"
            data={DATA}
            selected={selected}
          />
        </AnimationWrapper>
        <AnimationWrapper>
          <DescriptionBlock content={contentDesciption} />
        </AnimationWrapper>
        <AnimationWrapper>
          <AboutUsBlock content={contentAboutUs} />
        </AnimationWrapper>
        <AnimationWrapper>
          <ReviewBlock content={contentReview} handleReview={handleReview} />
        </AnimationWrapper>
        <AnimationWrapper>
          <GalleryBlock
            content={contentGallery}
            data={DATA}
            isColor={isColor}
            setIsColor={setIsColor}
          />
        </AnimationWrapper>
        <AnimationWrapper>
          <SizetableBlock
            content={contentSizeTable}
            setIsVisibleSizetable={setIsVisibleSizetable}
          />
        </AnimationWrapper>
        <AnimationWrapper>
          <AdvantageBlock content={contentAdvantage} />
        </AnimationWrapper>
        <AnimationWrapper>
          <AboutBlock
            content={contentAbout}
            addNotification={setisVisibleNotificationAddtoCart}
            radioId1="radio4"
            radioId2="radio5"
            radioId3="radio6"
            data={DATA}
            selected={selected}
          />
        </AnimationWrapper>
        <AnimationWrapper>
          <HeroBlock
            size={size}
            setIsVisibleSizetable={setIsVisibleSizetable}
            isColor={isColor}
            setIsColor={setIsColor}
            addNotification={setisVisibleNotificationAddtoCart}
            data={DATA}
            selected={selected}
            setSelected={setSelected}
            content={contentHero}
          />
        </AnimationWrapper>

        {/* modals  */}

        <Review
          content={contentReviewModal}
          itemName={GOOGLE_LIST}
          googleSheet={GOOGLE_SHEET}
          googleList={REVIEW_LIST}
          isVisibleReview={isVisibleReview}
          setIsVisibleReview={setIsVisibleReview}
          setIsVisibleReviewThankyou={setIsVisibleReviewThankyou}
          setIsLoading={setIsLoading}
        />
        <ReviewThankyou
          content={contentReviewThankYou}
          isVisibleReviewThankyou={isVisibleReviewThankyou}
          setIsVisibleReviewThankyou={setIsVisibleReviewThankyou}
        />

        <SizeTable
          content={contentModalSizeTable}
          isVisibleSizetable={isVisibleSizetable}
          setIsVisibleSizetable={setIsVisibleSizetable}
        />
      </Main>
    </>
  );
};

export default memo(ComplectOverTrousersTshirt);
