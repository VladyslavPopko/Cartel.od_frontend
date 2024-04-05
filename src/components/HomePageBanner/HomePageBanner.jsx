import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import cn from "classnames";
import closeBanner from "../../img/HomePage/closeBanner.svg";

const HomePageBanner = () => {
  const [isActive, setIsActive] = useState(false);
  const [isOnce, setIsOnce] = useState(true);
  if (isOnce) {
    setTimeout(() => {
      setIsActive(true);
      setIsOnce(false);
    }, 1000);
  }

  return (
    <div className={cn(styles.wrapper, isActive && styles.active)}>
      <div className={styles.section}>
        <img
          src={closeBanner}
          className={styles.close}
          alt=""
          onClick={() => setIsActive(false)}
        />
        <div className={styles.list_left}>
          <p className={styles.title}>-60%</p>
          <p className={styles.text}>На всі товари</p>
        </div>
        <div className={styles.list_right}>
          <p className={styles.title}>Додаткова знижка!</p>
          <p className={styles.text}>-10% від 2 речей у замовленні</p>
          <p className={styles.text}>-15% від 3 речей у замовленні</p>
        </div>
      </div>
    </div>
  );
};

export default HomePageBanner;
