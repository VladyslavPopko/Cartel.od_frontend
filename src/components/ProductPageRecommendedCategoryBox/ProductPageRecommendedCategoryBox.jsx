import React, { memo } from "react";
import styles from "./style.module.scss";

const ProductPageRecommendedCategoryBox = ({ text }) => {
  return <div className={styles.section}>{text}</div>;
};

export default memo(ProductPageRecommendedCategoryBox);
