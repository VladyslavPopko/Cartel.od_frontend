import React, { memo } from "react";
import styles from "./style.module.scss";

const ProducPageReviewBlock = ({ handleReview }) => {
  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <p className={styles.title}>Вже замовили?</p>
        <p className={styles.text}>
          НАм дуже важлива ваша думка, Бо прагнемо стати краще
        </p>
      </div>
      <button className={styles.button} onClick={handleReview}>
        Залишити відгук
      </button>
      <hr className={styles.hr} />
    </div>
  );
};

export default memo(ProducPageReviewBlock);
