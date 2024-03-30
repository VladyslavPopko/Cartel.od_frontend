import React, { memo } from "react";
import ReviewThankyouBlock from "../blocks/ReviewThankyouBlock/ReviewThankyouBlock";

const ReviewThankyou = ({
  isVisibleReviewThankyou,
  setIsVisibleReviewThankyou,
  content,
}) => {
  return (
    <div>
      <ReviewThankyouBlock
        content={content}
        isVisibleReviewThankyou={isVisibleReviewThankyou}
        setIsVisibleReviewThankyou={setIsVisibleReviewThankyou}
      />
    </div>
  );
};

export default memo(ReviewThankyou);
