import { NavLink } from "react-router-dom";
import styles from "./style.module.scss";
import { memo, useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import HomePageItemBox from "../../components/HomePageItemBox/HomePageItemBox";
import NotificationBox from "../../components/NotificationBox/NotificationBox";
import agree from "../../img/Notifications/agree.svg";
import cn from "classnames";
import HomePageBanner from "../../components/HomePageBanner/HomePageBanner";
import { MENU } from "../../datas/data";
import open from "../../img/HomePage/open.png";

const HomepageBlock = ({ data }) => {
  const [isVisibleNotificationAddtoCart, setisVisibleNotificationAddtoCart] =
    useState(false); // Notification Add to Cart
  const [isActive, setIsActive] = useState(false);
  const [isCategory, setIsCategory] = useState(false);

  const menu = MENU;
  const handleALL = () => {
    setIsActive(false);
    setIsCategory(false);
  };

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
            className={cn(styles.menu_mainitem, !isActive && !isCategory && styles.active)}
            onClick={handleALL}
          >
            ВCІ ТОВАРИ
          </p>
          {menu.map((element) => (
            <div key={element.path} className={cn(styles.category)}>
              {isCategory === element.title && (
                <div onClick={() => setIsCategory(false)}>
                  <p
                  className={cn(
                    styles.text,
                    isCategory === element.title && styles.active
                  )}
                  onClick={() => setIsCategory(element.title)}
                >
                  {" "}
                  {element.title} <img src={open} className={styles.open} />
                </p>
                </div>
              )}
              {isCategory !== element.title && (
                <p
                  className={cn(
                    styles.text,
                    isCategory === element.title && styles.active
                  )}
                  onClick={() => setIsCategory(element.title)}
                >
                  {" "}
                  {element.title} <img src={open} className={styles.open} />
                </p>
              )}

              {element.category.map((el) => (
                <div
                  key={el.path}
                  className={cn(
                    styles.subcategory_wrapper,
                    isCategory === element.title && styles.active
                  )}
                >
                  {!el.element ? (
                    <div className={styles.subcategory}>
                      <p
                        onClick={() => setIsActive(el.title)}
                        className={cn(
                          styles.text,
                          isActive === el.title && styles.active
                        )}
                      >
                        {el.title}
                      </p>
                      {el.products.map((e) => (
                        <div key={e.path} className={styles.product}>
                          <p
                            onClick={() => setIsActive(e.title)}
                            className={cn(
                              styles.text,
                              isActive === e.title && styles.active
                            )}
                          >
                            {e.title}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div key={el.path} className={styles.product}>
                      <p
                        onClick={() => setIsActive(el.title)}
                        className={cn(
                          styles.text,
                          isActive === el.title && styles.active
                        )}
                      >
                        {el.title}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div>
          {data.map((element) => (
            <>
              {(isActive === element[0].main_title ||
                isActive === element[0].category ||
                isActive === false) && (
                <div key={element.full_name}>
                  <h2 className={styles.product_name}>
                    {element[0].main_title}
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

      <HomePageBanner />
    </div>
  );
};

export default memo(HomepageBlock);
