import React, { memo } from "react";
import styles from "./style.module.scss";
import ProductPageRecommendedCategoryBox from "../../components/ProductPageRecommendedCategoryBox/ProductPageRecommendedCategoryBox";

const ProductPageRecommendedCategory = () => {
  return (
    <div className={styles.section}>
      <hr className={styles.hr} />
      <h2 className={styles.title}>Вам також може сподобатися:</h2>
      <div className={styles.list}>
        <ProductPageRecommendedCategoryBox text="Чоловічі футболки" />
        <ProductPageRecommendedCategoryBox text="Літні комплекти" />
        <ProductPageRecommendedCategoryBox text="Спортивні костюми" />
      </div>
    </div>
  );
};

export default memo(ProductPageRecommendedCategory);
