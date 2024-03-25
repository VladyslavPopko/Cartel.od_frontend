import styles from "./style.module.scss";
import cn from "classnames";

const ReviewThankyouBlock = ({
  isVisibleReviewThankyou,
  setIsVisibleReviewThankyou,
}) => {
  const handleCloseThankyou = () => {
    setIsVisibleReviewThankyou(false);
  };
  return (
    <div
      className={cn(styles.wrapper, isVisibleReviewThankyou && styles.active)}
      onClick={handleCloseThankyou}
    >
      <div className={styles.section} onClick={(e) => e.stopPropagation()}>
        Дякуємо за відгук!
      </div>
    </div>
  );
};

export default ReviewThankyouBlock;
