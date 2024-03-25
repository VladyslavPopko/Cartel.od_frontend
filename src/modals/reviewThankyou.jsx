import React from "react";
import ReviewThankyouBlock from "../blocks/ReviewThankyouBlock/ReviewThankyouBlock";

const ReviewThankyou = ({
  isVisibleReviewThankyou,
  setIsVisibleReviewThankyou,
}) => {
  return (
    <div>
      <ReviewThankyouBlock
        isVisibleReviewThankyou={isVisibleReviewThankyou}
        setIsVisibleReviewThankyou={setIsVisibleReviewThankyou}
      />
    </div>
  );
};

export default ReviewThankyou;
