import { memo, useEffect } from "react";
import HeroBlock from "../blocks/HeroBlock/HeroBlock";
import DescriptionBlock from "../blocks/DescriptionBlock/DescriptionBlock";
import SizetableBlock from "../blocks/SizetableBlock/SizetableBlock";
import SizeTable from "../modals/sizeTable";
import NotificationBox from "../components/NotificationBox/NotificationBox";
import LoadingBox from "../components/LoadingBox/LoadingBox";
import AnimationWrapper from "../wrappers/AnimationWrapper";
import agree from "../img/Notifications/agree.svg";
import { useState } from "react";
import Main from "./Main";
import GalleryPage from "../modals/gallery";

const ProductPage_WithoutAbout = ({ data, info, content }) => {
  const { GOOGLE_LIST, GOOGLE_SHEET, XS, L, M, ONE, S, XL, XXL, XXXL } = info;

  const [selected, setSelected] = useState(null); // size
  const [isColor, setIsColor] = useState(ONE); // color
  const [isLoading, setIsLoading] = useState(true); // loading

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
    contentDesciption,
    contentSizeTable,
    contentModalSizeTable,
    sizeArray,
  } = content;
  if (isLoading) {
    window.scrollTo(pageYOffset, 0);
    setIsLoading(false);
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
            sizeValue={selected}
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
          <DescriptionBlock content={contentDesciption} />
        </AnimationWrapper>

        <AnimationWrapper>
          <SizetableBlock
            content={contentSizeTable}
            setIsVisibleSizetable={setIsVisibleSizetable}
          />
        </AnimationWrapper>

        <AnimationWrapper>
          <HeroBlock
            sizeArray={sizeArray}
            sizeValue={selected}
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

        {/* <Review
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
        /> */}

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
