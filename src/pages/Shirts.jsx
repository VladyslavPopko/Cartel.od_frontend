import HeaderBlock from "../blocks/HeaderBlock/HeaderBlock";
import HeroBlock from "../blocks/HeroBlock/HeroBlock";
import AboutBlock from "../blocks/AboutBlock/AboutBlock";
import DescriptionBlock from "../blocks/DescriptionBlock/DescriptionBlock";
import AboutUsBlock from "../blocks/AboutUsBlock/AboutUsBlock";
import ReviewBlock from "../blocks/ReviewBlock/ReviewBlock";
import GalleryBlock from "../blocks/GalleryBlock/GalleryBlock";
import SizetableBlock from "../blocks/SizetableBlock/SizetableBlock";
import AdvantageBlock from "../blocks/AdvantageBlock/AdvantageBlock";

import Cart from "../modals/cart";
import Submit from "../modals/submit";
import Thankyou from "../modals/thankyou";
import Review from "../modals/review";
import ReviewThankyou from "../modals/reviewThankyou";
import Assign from "../modals/assign";
import Politics from "../modals/politics";
import SizeTable from "../modals/sizeTable";

import NotificationBox from "../components/NotificationBox/NotificationBox";
import LoadingBox from "../components/LoadingBox/LoadingBox";
import AnimationWrapper from "../wrappers/AnimationWrapper";

import agree from "../img/Notifications/agree.svg";

import { DATA_SHIRTS, ONE } from "../datas/data_shirts";
import { useState } from "react";
import { CONTENT } from "../contents/shirts/shirts";
import {
  GOOGLE_LIST,
  GOOGLE_SHEET,
  ITEM,
} from "../constanses/shirts/constanses";
import { REVIEW_LIST } from "../constanses/constanses";

const Shirts = () => {
  const [selected, setSelected] = useState(null); // size
  const [isColor, setIsColor] = useState(ONE); // color
  const [isLoading, setIsLoading] = useState(false); // loading

  const [isVisibleCart, setIsVivsibleCart] = useState(false); // Cart Modal
  const [isVisibleSubmit, setIsVisibleSubmit] = useState(false); // Submit Modal
  const [isVisibleThankyou, setIsVisibleThankyou] = useState(false); // Thankyou Modal
  const [isVisibleAssign, setIsVisibleAssign] = useState(false); // Assign Modal
  const [isVisiblePolitics, setIsVisiblePolitics] = useState(false); // Politics Modal
  const [isVisibleReview, setIsVisibleReview] = useState(false); // Review Form Modal
  const [isVisibleReviewThankyou, setIsVisibleReviewThankyou] = useState(false); // Review Thankyou Modal
  const [isVisibleSizetable, setIsVisibleSizetable] = useState(false); // Modal SizeTable

  const [isVisibleNotificationAddtoCart, setisVisibleNotificationAddtoCart] =
    useState(false); // Notification Add to Cart

  const handleReview = () => {
    setIsVisibleReview(true);
  };
  const {
    contentHeader,
    contentHero,
    contentAbout,
    contentDesciption,
    contentAboutUs,
    contentReview,
    contentGallery,
    contentSizeTable,
    contentAdvantage,
    contentCart,
    contentSubmit,
    contentThankYou,
    contentReviewModal,
    contentReviewThankYou,
    contentAssign,
    contentPolitics,
    contentModalSizeTable
  } = CONTENT;

  return (
    <>
      {isLoading && <LoadingBox type="bars" color="red" />}

      <NotificationBox
        text="Товар додано до кошика"
        img={agree}
        isVisibleNotificationAddtoCart={isVisibleNotificationAddtoCart}
      />
      <HeaderBlock
        content={contentHeader}
        isVisibleNotificationAddtoCart={isVisibleNotificationAddtoCart}
        setIsVivsibleCart={setIsVivsibleCart}
      />
      <AnimationWrapper>
        <HeroBlock
          setIsVisibleSizetable={setIsVisibleSizetable}
          isColor={isColor}
          setIsColor={setIsColor}
          addNotification={setisVisibleNotificationAddtoCart}
          data={DATA_SHIRTS}
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
          data={DATA_SHIRTS}
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
          data={DATA_SHIRTS}
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
          data={DATA_SHIRTS}
          selected={selected}
        />
      </AnimationWrapper>
      <AnimationWrapper>
        <HeroBlock
          setIsVisibleSizetable={setIsVisibleSizetable}
          isColor={isColor}
          setIsColor={setIsColor}
          addNotification={setisVisibleNotificationAddtoCart}
          data={DATA_SHIRTS}
          selected={selected}
          setSelected={setSelected}
          content={contentHero}
        />
      </AnimationWrapper>

      {/* modals  */}
      <Cart
        content={contentCart}
        isVisibleCart={isVisibleCart}
        setIsVivsibleCart={setIsVivsibleCart}
        setIsVisibleSubmit={setIsVisibleSubmit}
      />
      <Submit
        content={contentSubmit}
        itemName={ITEM}
        googleSheet={GOOGLE_SHEET}
        googleList={GOOGLE_LIST}
        setIsLoading={setIsLoading}
        isVisibleSubmit={isVisibleSubmit}
        setIsVisibleSubmit={setIsVisibleSubmit}
        setIsVisibleThankyou={setIsVisibleThankyou}
        setIsVisibleAssign={setIsVisibleAssign}
        setIsVisiblePolitics={setIsVisiblePolitics}
      />
      <Thankyou
        content={contentThankYou}
        isVisibleThankyou={isVisibleThankyou}
        setIsVisibleThankyou={setIsVisibleThankyou}
      />
      <Review
        content={contentReviewModal}
        itemName={ITEM}
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
      <Assign
        content={contentAssign}
        isVisibleAssign={isVisibleAssign}
        setIsVisibleAssign={setIsVisibleAssign}
      />
      <Politics
        content={contentPolitics}
        isVisiblePolitics={isVisiblePolitics}
        setIsVisiblePolitics={setIsVisiblePolitics}
      />
      <SizeTable
        content={contentModalSizeTable}
        isVisibleSizetable={isVisibleSizetable}
        setIsVisibleSizetable={setIsVisibleSizetable}
      />
    </>
  );
};

export default Shirts;
