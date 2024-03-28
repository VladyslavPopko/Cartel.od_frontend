import HeaderBlock from "../blocks/HeaderBlock/HeaderBlock";
import HeroBlock from "../blocks/HeroBlock/HeroBlock";
import AboutBlock from "../blocks/AboutBlock/AboutBlock";

import DescriptionBlock from "../blocks/DescriptionBlock/DescriptionBlock";
import AboutUsBlock from "../blocks/AboutUsBlock/AboutUsBlock";
import ReviewBlock from "../blocks/ReviewBlock/ReviewBlock";
import GalleryBlock from "../blocks/GalleryBlock/GalleryBlock";
import SizetableBlock from "../blocks/SizetableBlock/SizetableBlock";
import AdvantageBlock from "../blocks/AdvantageBlock/AdvantageBlock";
import { DATA_SHIRTS, ONE_SHIRT } from "../constanses/data_shirts";
import { useState } from "react";
import Cart from "../modals/cart";
import Submit from "../modals/submit";
import Thankyou from "../modals/thankyou";
import { CONTENT_SHIRTS } from "../contents/shirts";
import Review from "../modals/review";
import ReviewThankyou from "../modals/reviewThankyou";
import NotificationBox from "../components/NotificationBox/NotificationBox";

import agree from "../img/Notifications/agree.svg";
import Assign from "../modals/assign";
import Politics from "../modals/politics";
import SizeTable from "../modals/sizeTable";
import LoadingBox from "../components/LoadingBox/LoadingBox";
import { GOOGLE_LIST, GOOGLE_SHEET, ITEM } from "../constanses/shirts/constanses";
import { REVIEW_LIST } from "../constanses/constanses";

const Shirts = () => {
  const [selected, setSelected] = useState(null); // size
  const [isColor, setIsColor] = useState(ONE_SHIRT); // color
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
    useState(false);

  const handleReview = () => {
    setIsVisibleReview(true);
  };

  const content = CONTENT_SHIRTS;
  return (
    <>
      {isLoading && <LoadingBox type="bars" color="red" />}
      <NotificationBox
        text="Товар додано до кошика"
        img={agree}
        isVisibleNotificationAddtoCart={isVisibleNotificationAddtoCart}
      />
      <HeaderBlock
        isVisibleNotificationAddtoCart={isVisibleNotificationAddtoCart}
        title={content.header_title}
        setIsVivsibleCart={setIsVivsibleCart}
      />
      <HeroBlock
        setIsVisibleSizetable={setIsVisibleSizetable}
        isColor={isColor}
        setIsColor={setIsColor}
        addNotification={setisVisibleNotificationAddtoCart}
        data={DATA_SHIRTS}
        selected={selected}
        setSelected={setSelected}
        price={content.hero_price}
        old_price={content.hero_old_price}
        title={content.hero_title}
        subtitle={content.hero_subtitle}
        footerText={content.hero_footerText}
      />
      <AboutBlock
        addNotification={setisVisibleNotificationAddtoCart}
        radioId1="radio1"
        radioId2="radio2"
        radioId3="radio3"
        data={DATA_SHIRTS}
        selected={selected}
      />
      <DescriptionBlock />
      <AboutUsBlock />
      <ReviewBlock handleReview={handleReview} />
      <GalleryBlock
        data={DATA_SHIRTS}
        isColor={isColor}
        setIsColor={setIsColor}
      />
      <SizetableBlock setIsVisibleSizetable={setIsVisibleSizetable} />
      <AdvantageBlock />
      <AboutBlock
        addNotification={setisVisibleNotificationAddtoCart}
        radioId1="radio4"
        radioId2="radio5"
        radioId3="radio6"
        data={DATA_SHIRTS}
        selected={selected}
      />
      <HeroBlock
        setIsVisibleSizetable={setIsVisibleSizetable}
        isColor={isColor}
        setIsColor={setIsColor}
        addNotification={setisVisibleNotificationAddtoCart}
        data={DATA_SHIRTS}
        selected={selected}
        setSelected={setSelected}
        price={content.hero_price}
        old_price={content.hero_old_price}
        title={content.hero_title}
        subtitle={content.hero_subtitle}
        footerText={content.hero_footerText}
      />

      {/* modals  */}
      <Cart
        isVisibleCart={isVisibleCart}
        setIsVivsibleCart={setIsVivsibleCart}
        setIsVisibleSubmit={setIsVisibleSubmit}
      />
      <Submit
        isVisibleSubmit={isVisibleSubmit}
        setIsVisibleSubmit={setIsVisibleSubmit}
        setIsVisibleThankyou={setIsVisibleThankyou}
        setIsVisibleAssign={setIsVisibleAssign}
        setIsVisiblePolitics={setIsVisiblePolitics}
      />
      <Thankyou
        isVisibleThankyou={isVisibleThankyou}
        setIsVisibleThankyou={setIsVisibleThankyou}
      />
      <Review
        itemName={ITEM}
        googleSheet={GOOGLE_SHEET}
        googleList={REVIEW_LIST}
        isVisibleReview={isVisibleReview}
        setIsVisibleReview={setIsVisibleReview}
        setIsVisibleReviewThankyou={setIsVisibleReviewThankyou}
        setIsLoading={setIsLoading}
      />
      <ReviewThankyou
        isVisibleReviewThankyou={isVisibleReviewThankyou}
        setIsVisibleReviewThankyou={setIsVisibleReviewThankyou}
      />
      <Assign
        isVisibleAssign={isVisibleAssign}
        setIsVisibleAssign={setIsVisibleAssign}
      />
      <Politics
        isVisiblePolitics={isVisiblePolitics}
        setIsVisiblePolitics={setIsVisiblePolitics}
      />
      <SizeTable
        isVisibleSizetable={isVisibleSizetable}
        setIsVisibleSizetable={setIsVisibleSizetable}
      />
    </>
  );
};

export default Shirts;
