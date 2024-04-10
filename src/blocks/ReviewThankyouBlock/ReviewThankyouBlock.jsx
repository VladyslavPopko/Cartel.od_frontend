import { memo } from "react";
import styles from "./style.module.scss";
import ModalWrapper from "../../wrappers/ModalWrapper/ModalWrapper";

const ReviewThankyouBlock = ({
  isVisibleReviewThankyou,
  setIsVisibleReviewThankyou,
  content,
}) => {
  const { text } = content;
  const handleCloseThankyou = () => {
    setIsVisibleReviewThankyou(false);
  };
  return (
    <ModalWrapper
      isVisible={isVisibleReviewThankyou}
      handleClose={handleCloseThankyou}
    >
      <article className={styles.section}> {text}</article>
    </ModalWrapper>
  );
};

export default memo(ReviewThankyouBlock);
