import React, { memo } from "react";
import styles from "./style.module.scss";
import ProductPageInfoBox from "../../components/ProductPageInfoBox.jsx/ProductPageInfoBox";
import img1 from "../../img/ProductPage/InfoBlock/img1.svg";
import img2 from "../../img/ProductPage/InfoBlock/img2.svg";
import img3 from "../../img/ProductPage/InfoBlock/img3.svg";

const ProductPageInfoBlock = () => {
  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <ProductPageInfoBox
          img={img1}
          text="Безкоштовна доставка від 3000 грн."
        />
        <ProductPageInfoBox img={img2} text="Справжні товари на фото" />
        <ProductPageInfoBox img={img3} text="Легке повернення та обмін" />
      </div>
      <hr className={styles.hr} />
    </div>
  );
};

export default memo(ProductPageInfoBlock);
