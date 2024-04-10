import { memo, useEffect } from "react";

import HeroBlock from "../blocks/HeroBlock/HeroBlock";
import DescriptionBlock from "../blocks/DescriptionBlock/DescriptionBlock";
import AboutUsBlock from "../blocks/AboutUsBlock/AboutUsBlock";
import ReviewBlock from "../blocks/ReviewBlock/ReviewBlock";
import GalleryBlock from "../blocks/GalleryBlock/GalleryBlock";
import SizetableBlock from "../blocks/SizetableBlock/SizetableBlock";
import AdvantageBlock from "../blocks/AdvantageBlock/AdvantageBlock";

import Review from "../modals/review";
import ReviewThankyou from "../modals/reviewThankyou";
import SizeTable from "../modals/sizeTable";

import NotificationBox from "../components/NotificationBox/NotificationBox";
import LoadingBox from "../components/LoadingBox/LoadingBox";
import AnimationWrapper from "../wrappers/AnimationWrapper";

import agree from "../img/Notifications/agree.svg";

import { useState } from "react";

import { REVIEW_LIST } from "../constanses/constanses";
import Main from "./Main";
import AboutBlockWithoutPhotos from "../blocks/AboutBlockWithoutPhotos/AboutBlockWithoutPhotos";
import GalleryPage from "../modals/gallery";

const ProductPage_WithoutAbout = ({ data, info, content }) => {
  const { GOOGLE_LIST, GOOGLE_SHEET, XS, L, M, ONE, S, XL, XXL, XXXL } = info;

  const [selected, setSelected] = useState(null); // size
  const [isColor, setIsColor] = useState(ONE); // color
  const [isLoading, setIsLoading] = useState(false); // loading

  useEffect(() => {
    setIsColor(ONE);
  }, [ONE]);

  const [isVisibleReview, setIsVisibleReview] = useState(false); // Review Form Modal
  const [isVisibleReviewThankyou, setIsVisibleReviewThankyou] = useState(false); // Review Thankyou Modal
  const [isVisibleSizetable, setIsVisibleSizetable] = useState(false); // Modal SizeTable
  const [isVisibleNotificationAddtoCart, setisVisibleNotificationAddtoCart] =
    useState(false); // Notification Add to Cart
  const [isVisibleGallery, setIsVisibleGallery] = useState(false); // Gallery Modal

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
  } = content;

  let size;
  switch (
    selected // То какие размеры заходят в CRM
  ) {
    case "Розмір: XS": {
      size = XS;
      break;
    }
    case "Розмір: S": {
      size = S;
      break;
    }
    case "Розмір: M": {
      size = M;
      break;
    }
    case "Розмір: L": {
      size = L;
      break;
    }
    case "Розмір: XL": {
      size = XL;
      break;
    }
    case "Розмір: XXL": {
      size = XXL;
      break;
    }
    case "Розмір: XXXL": {
      size = XXXL;
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
            data={data}
            selected={selected}
            setSelected={setSelected}
            content={contentHero}
            setIsVisibleGallery={setIsVisibleGallery}
          />
        </AnimationWrapper>
        <AnimationWrapper>
          <AboutBlockWithoutPhotos
            content={contentAbout}
            addNotification={setisVisibleNotificationAddtoCart}
            radioId1="radio1"
            radioId2="radio2"
            radioId3="radio3"
            data={data}
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
          <SizetableBlock
            content={contentSizeTable}
            setIsVisibleSizetable={setIsVisibleSizetable}
          />
        </AnimationWrapper>
        <AnimationWrapper>
          <AdvantageBlock content={contentAdvantage} />
        </AnimationWrapper>
        <AnimationWrapper>
          <AboutBlockWithoutPhotos
            content={contentAbout}
            addNotification={setisVisibleNotificationAddtoCart}
            radioId1="radio4"
            radioId2="radio5"
            radioId3="radio6"
            data={data}
            selected={selected}
          />
        </AnimationWrapper>
        <AnimationWrapper>
          <HeroBlock
            sizeArray={sizeArray}
            sizeValue={size}
            setIsVisibleSizetable={setIsVisibleSizetable}
            isColor={isColor}
            setIsColor={setIsColor}
            addNotification={setisVisibleNotificationAddtoCart}
            data={data}
            selected={selected}
            setSelected={setSelected}
            content={contentHero}
            setIsVisibleGallery={setIsVisibleGallery}
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
        {isVisibleGallery && (
          <GalleryPage
            setIsVisibleGallery={setIsVisibleGallery}
            isVisibleGallery={isVisibleGallery}
            data={data}
            isColor={isColor}
            setIsColor={setIsColor}
          />
        )}
      </Main>
    </>
  );
};

export default memo(ProductPage_WithoutAbout);
