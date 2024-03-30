import { memo } from "react";
import styles from "./style.module.scss";
import cn from "classnames";

const ReviewThankyouBlock = ({
  isVisibleReviewThankyou,
  setIsVisibleReviewThankyou,
  content
}) => {
  const {text} = content;
  const handleCloseThankyou = () => {
    setIsVisibleReviewThankyou(false);
  };
  return (
    <div
      className={cn(styles.wrapper, isVisibleReviewThankyou && styles.active)}
      onClick={handleCloseThankyou}
    >
      <div className={styles.section} onClick={(e) => e.stopPropagation()}>
        {text}
      </div>
    </div>
  );
};

export default memo(ReviewThankyouBlock);
