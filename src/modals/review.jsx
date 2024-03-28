import ReviewModalBlock from "../blocks/ReviewModalBlock/ReviewModalBlock";

const Review = ({
  isVisibleReview,
  setIsVisibleReview,
  setIsVisibleReviewThankyou,
  setIsLoading,
  itemName,
  googleSheet,
  googleList,
  content,
}) => {
  return (
    <div>
      <ReviewModalBlock
        content={content}
        itemName={itemName}
        googleSheet={googleSheet}
        googleList={googleList}
        setIsLoading={setIsLoading}
        isVisibleReview={isVisibleReview}
        setIsVisibleReview={setIsVisibleReview}
        setIsVisibleReviewThankyou={setIsVisibleReviewThankyou}
      />
    </div>
  );
};

export default Review;
