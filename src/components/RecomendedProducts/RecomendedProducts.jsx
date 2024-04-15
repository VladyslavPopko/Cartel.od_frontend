import { memo } from "react";
import AnimationWrapper from "../../wrappers/AnimationWrapper";
import HomePageItemBox from "../HomePageItemBox/HomePageItemBox";
import styles from "./style.module.scss";

const RecomendedProducts = ({
  setisVisibleNotificationAddtoCart,
  data_recomended,
}) => {
  const data = data_recomended;
  return (
    <div className={styles.section}>
      {data?.map((element, index) => (
        <AnimationWrapper key={index} className={styles.homepage_item_wrapper}>
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
  );
};

export default memo(RecomendedProducts);
