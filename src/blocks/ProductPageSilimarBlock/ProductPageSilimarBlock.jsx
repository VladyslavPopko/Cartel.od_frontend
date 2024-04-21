import React, { memo } from "react";
import styles from "./style.module.scss";
import AnimationWrapper from "../../wrappers/AnimationWrapper";
import HomePageItemBox from "../../components/HomePageItemBox/HomePageItemBox";
import { DATA_RECOMENDED_MEN } from "../../datas/data_recomended_men";

const ProductPageSilimarBlock = ({
  title,
  setisVisibleNotificationAddtoCart,
}) => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.list}>
        {DATA_RECOMENDED_MEN.map((element, index) => (
          <AnimationWrapper
            key={index}
            className={styles.homepage_item_wrapper}
          >
            <div className={styles.homepage_item}>
              <HomePageItemBox
                element={element}
                setisVisibleNotificationAddtoCart={
                  setisVisibleNotificationAddtoCart
                }
              />
            </div>
          </AnimationWrapper>
        ))}
      </div>
    </div>
  );
};

export default memo(ProductPageSilimarBlock);
