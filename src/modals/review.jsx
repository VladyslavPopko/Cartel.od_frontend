import React from "react";
import ReviewModalBlock from "../blocks/ReviewModalBlock/ReviewModalBlock";

const Review = ({
  isVisibleReview,
  setIsVisibleReview,
  setIsVisibleReviewThankyou,
}) => {
  return (
    <div>
      <ReviewModalBlock
        isVisibleReview={isVisibleReview}
        setIsVisibleReview={setIsVisibleReview}
        setIsVisibleReviewThankyou={setIsVisibleReviewThankyou}
      />
    </div>
  );
};

export default Review;
