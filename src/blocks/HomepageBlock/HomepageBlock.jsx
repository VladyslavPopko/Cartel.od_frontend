import { NavLink } from "react-router-dom";
import styles from "./style.module.scss";
import { memo, useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import HomePageItemBox from "../../components/HomePageItemBox/HomePageItemBox";
import NotificationBox from "../../components/NotificationBox/NotificationBox";
import agree from "../../img/Notifications/agree.svg";
import cn from "classnames";

const HomepageBlock = ({ data }) => {
  const [isVisibleNotificationAddtoCart, setisVisibleNotificationAddtoCart] =
    useState(false); // Notification Add to Cart
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.wrapper}>
      <NotificationBox
        text="Товар додано до кошика"
        img={agree}
        isVisibleNotificationAddtoCart={isVisibleNotificationAddtoCart}
      />
      <div className={styles.section}>
        <div className={styles.menu}>
          <p
            className={cn(styles.menu_item, !isActive && styles.active)}
            onClick={() => setIsActive(false)}
          >
            ВCІ ТОВАРИ
          </p>
          {data.map((element) => (
            <p
              key={element[0].main_title}
              className={cn(
                styles.menu_item,
                isActive === element[0].main_title && styles.active
              )}
              onClick={() => setIsActive(element[0].main_title)}
            >
              {element[0].main_title}
            </p>
          ))}
        </div>
        <div>
          {data.map((element) => (
            <>
              {(isActive === element[0].main_title || isActive === false) && (
                <div key={element.full_name}>
                  <h2 className={styles.product_name}>
                    {element[0].full_name}
                  </h2>
                  <div className={styles.list}>
                    {element.map((el) => (
                      <HomePageItemBox
                        key={el.full_name}
                        element={el}
                        setisVisibleNotificationAddtoCart={
                          setisVisibleNotificationAddtoCart
                        }
                      />
                    ))}
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(HomepageBlock);
