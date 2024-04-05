import { NavLink } from "react-router-dom";
import styles from "./style.module.scss";
import { Suspense, memo, useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import HomePageItemBox from "../../components/HomePageItemBox/HomePageItemBox";
import NotificationBox from "../../components/NotificationBox/NotificationBox";
import agree from "../../img/Notifications/agree.svg";
import cn from "classnames";
import HomePageBanner from "../../components/HomePageBanner/HomePageBanner";
import { MENU } from "../../datas/data";
import open from "../../img/HomePage/open.png";

import { DATA_FARSH_DROP_SHIRTS } from "../../datas/Farsh_Drop/data_shirts";
import { DATA_SLAVS_DROP_HOODIE_SI } from "../../datas/Slavs_Drop/data_hoodie_si";
import { DATA_SLAVS_DROP_JACKET_CP } from "../../datas/Slavs_Drop/data_jacket_cp";
import { DATA_SLAVS_DROP_SWEATSHIRT_SI } from "../../datas/Slavs_Drop/data_sweatshirt_si";
import { DATA_SLAVS_DROP_Zipsweatshirt_SI } from "../../datas/Slavs_Drop/data_zipsweatshirt_si";
import { DATA_FARSH_DROP_CostumeOverBaza } from "../../datas/Farsh_Drop/data_costumeOverBaza";
import { DATA_FARSH_DROP_CostumeTech } from "../../datas/Farsh_Drop/data_costumeTech";
import { DATA_FARSH_DROP_CostumeParashute } from "../../datas/Farsh_Drop/data_costumeParashute";
import { DATA_FARSH_DROP_ComplectOverTrousersTshirt } from "../../datas/Farsh_Drop/data_complectOverTrousersTshirt";
import { DATA_FARSH_DROP_KoftaRubchikOver } from "../../datas/Farsh_Drop/data_koftaRubchikOver";
import { DATA_FARSH_DROP_TrousersZmeyka } from "../../datas/Farsh_Drop/data_trousersZmeyka";
import { DATA_FARSH_DROP_TrousersKargo } from "../../datas/Farsh_Drop/data_trousersKargo";
import { DATA_FARSH_DROP_TrousersCutSummer } from "../../datas/Farsh_Drop/data_trousersCutSummer";
import { DATA_FARSH_DROP_ComplectOverShortsTshirt } from "../../datas/Farsh_Drop/data_complectOverShortsTshirt";
import { DATA_FARSH_DROP_ComplectLampasShortsTshirt } from "../../datas/Farsh_Drop/data_complectLampasShortsTshirt";
import { DATA_FARSH_DROP_ComplectSummerRubchik } from "../../datas/Farsh_Drop/data_complectSummerRubchik";
import { DATA_FARSH_DROP_ComplectKant } from "../../datas/Farsh_Drop/data_complectKant";
import { DATA_FARSH_DROP_ShortsKargoSummer } from "../../datas/Farsh_Drop/data_shortsKargoSummer";
import { DATA_FARSH_DROP_TshirtOver } from "../../datas/Farsh_Drop/data_tshirtOver";
import { DATA_FARSH_DROP_TshirtSummerLong } from "../../datas/Farsh_Drop/data_TshirtSummerLong";
import { DATA_FARSH_DROP_HoodieZmeykaOver } from "../../datas/Farsh_Drop/data_hoodieZmeykaOver";
import { DATA_FARSH_DROP_ShortsTrikotaj } from "../../datas/Farsh_Drop/data_shortsTrikotaj";
import { DATA_FARSH_DROP_ShortsSummerClassic } from "../../datas/Farsh_Drop/data_shortsSummerClassic";
import { DATA_FARSH_DROP_ShortsLyon } from "../../datas/Farsh_Drop/data_ShortsLyon";
import { DATA_FARSH_DROP_ShirtLyon } from "../../datas/Farsh_Drop/data_shirtLyon";
import { DATA_SLAVS_DROP_Sweatshirt_CP } from "../../datas/Slavs_Drop/data_sweatshirt_cp";
import { DATA_SLAVS_DROP_Trousers_CP } from "../../datas/Slavs_Drop/data_trousers_cp";
import { DATA_SLAVS_DROP_Jeans_SI } from "../../datas/Slavs_Drop/data_jeans_si";
import { DATA_SLAVS_DROP_Shorts_SI } from "../../datas/Slavs_Drop/data_shorts_si";
import { DATA_SLAVS_DROP_Longsliv_SI } from "../../datas/Slavs_Drop/data_longsliv_si";
import { DATA_SLAVS_DROP_ZIPHOODIE_SI } from "../../datas/Slavs_Drop/data_ziphoodie_si";
import { DATA_FARSH_DROP_CostumeZamsh } from "../../datas/Farsh_Drop/data_costumeZamsh";
import { DATA_SLAVS_DROP_ClassicSweatshirt_SI } from "../../datas/Slavs_Drop/data_classicsweatshirt_SI";
import AnimationWrapper from "../../wrappers/AnimationWrapper";
import AnimationTranslateXUp from "../../wrappers/AnimationTranslateXUp";

const HomepageBlock = () => {
  const data = [];
  // const data = [];

  data.push(DATA_FARSH_DROP_SHIRTS);
  data.push(DATA_FARSH_DROP_ShirtLyon);

  data.push(DATA_FARSH_DROP_CostumeOverBaza);
  data.push(DATA_FARSH_DROP_CostumeZamsh);
  data.push(DATA_FARSH_DROP_CostumeTech);
  data.push(DATA_FARSH_DROP_CostumeParashute);
  data.push(DATA_FARSH_DROP_ComplectOverTrousersTshirt);

  data.push(DATA_FARSH_DROP_ComplectOverShortsTshirt);
  data.push(DATA_FARSH_DROP_ComplectLampasShortsTshirt);
  data.push(DATA_FARSH_DROP_ComplectSummerRubchik);
  data.push(DATA_FARSH_DROP_ComplectKant);

  data.push(DATA_FARSH_DROP_TshirtOver);
  data.push(DATA_FARSH_DROP_TshirtSummerLong);

  data.push(DATA_FARSH_DROP_HoodieZmeykaOver);

  data.push(DATA_FARSH_DROP_KoftaRubchikOver);

  data.push(DATA_FARSH_DROP_TrousersZmeyka);
  data.push(DATA_FARSH_DROP_TrousersKargo);
  data.push(DATA_FARSH_DROP_TrousersCutSummer);

  data.push(DATA_FARSH_DROP_ShortsKargoSummer);
  data.push(DATA_FARSH_DROP_ShortsTrikotaj);
  data.push(DATA_FARSH_DROP_ShortsSummerClassic);
  data.push(DATA_FARSH_DROP_ShortsLyon);

  data.push(DATA_SLAVS_DROP_HOODIE_SI);
  data.push(DATA_SLAVS_DROP_ZIPHOODIE_SI);
  data.push(DATA_SLAVS_DROP_SWEATSHIRT_SI);
  data.push(DATA_SLAVS_DROP_ClassicSweatshirt_SI);
  data.push(DATA_SLAVS_DROP_Jeans_SI);
  data.push(DATA_SLAVS_DROP_Shorts_SI);
  data.push(DATA_SLAVS_DROP_Zipsweatshirt_SI);
  data.push(DATA_SLAVS_DROP_Longsliv_SI);

  data.push(DATA_SLAVS_DROP_JACKET_CP);
  data.push(DATA_SLAVS_DROP_Sweatshirt_CP);
  data.push(DATA_SLAVS_DROP_Trousers_CP);

  const [isVisibleNotificationAddtoCart, setisVisibleNotificationAddtoCart] =
    useState(false); // Notification Add to Cart
  const [isActive, setIsActive] = useState(false);
  const [isCategory, setIsCategory] = useState(false);
  const [isStatus, setIsStatus] = useState("All");
  const [isPage, setIsPage] = useState(1);
  const [isPageCategory, setIsPageCategory] = useState(1);

  const menu = MENU;
  const handleALL = () => {
    setIsStatus("All");
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
            className={cn(
              styles.menu_mainitem,
              !isActive && !isCategory && styles.active
            )}
            onClick={handleALL}
          >
            ВCІ ТОВАРИ
          </p>
          {menu.map((element, index) => (
            <div key={index} className={cn(styles.category)}>
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
                  {element.title} <img src={open} className={styles.open} />
                </p>
              )}

              {element.category.map((el, index) => (
                <div
                  key={index}
                  className={cn(
                    styles.subcategory_wrapper,
                    isCategory === element.title && styles.active
                  )}
                >
                  {!el.element ? (
                    <div className={styles.subcategory}>
                      <p
                        onClick={() => {
                          setIsActive(el.title);
                          setIsStatus("Category");
                        }}
                        className={cn(
                          styles.text,
                          isActive === el.title && styles.active
                        )}
                      >
                        {el.title}
                      </p>
                      {el.products.map((e) => (
                        <div key={e.full_name} className={styles.product}>
                          <p
                            onClick={() => {
                              setIsActive(e.title);
                              setIsStatus("Product");
                            }}
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
                        onClick={() => {
                          setIsActive(el.title);
                          setIsStatus("Product");
                        }}
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

        {/* <div className={cn(styles.products, styles.list)}>
          {data.map(
            (element, index) =>
              index < (6*isPage) && (
                <div key={index}>
                  <AnimationWrapper>
                    <HomePageItemBox
                      element={element[0]}
                      setisVisibleNotificationAddtoCart={
                        setisVisibleNotificationAddtoCart
                      }
                    />
                  </AnimationWrapper>
                </div>
              )
          )}
        </div> */}
        {!isActive && isStatus === "All" && (
          <div className={styles.products}>
            {data.map((element, index) => (
              <div key={index}>
                <div>
                  <AnimationWrapper>
                    {index <= isPage && (
                      <h2 className={styles.product_name}>
                        {element[0].main_title}
                      </h2>
                    )}

                    <div className={styles.list}>
                      {element.map(
                        (el, indexj) =>
                          index <= isPage && (
                            <div key={indexj} className={styles.homepage_item}>
                              <HomePageItemBox
                                element={el}
                                setisVisibleNotificationAddtoCart={
                                  setisVisibleNotificationAddtoCart
                                }
                              />
                            </div>
                          )
                      )}
                    </div>
                  </AnimationWrapper>
                </div>
              </div>
            ))}
            <Button
              onClick={() => {
                setIsPage(isPage + 2);
                setIsPageCategory(isPageCategory + 2);
              }}
              text="Показати ще"
              className={styles.button_more}
            />
          </div>
        )}

        {isActive && isStatus === "Category" && (
          <div className={styles.products}>
            {data.map((element, index) => (
              <div key={index}>
                {isActive === element[0].category && (
                  <div>
                    <AnimationWrapper>
                      <h2 className={styles.product_name}>
                        {element[0].main_title}
                      </h2>

                      <div className={styles.list}>
                        {element.map((el, indexj) => (
                          <div key={indexj} className={styles.homepage_item}>
                            <HomePageItemBox
                              element={el}
                              setisVisibleNotificationAddtoCart={
                                setisVisibleNotificationAddtoCart
                              }
                            />
                          </div>
                        ))}
                      </div>
                    </AnimationWrapper>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {isActive && isStatus === "Product" && (
          <div className={styles.products}>
            {data.map((element, index) => (
              <div key={index}>
                {isActive === element[0].main_title && (
                  <div>
                    <AnimationWrapper>
                      <h2 className={styles.product_name}>
                        {element[0].main_title}
                      </h2>

                      <div className={styles.list}>
                        {element.map((el, index) => (
                          <div key={index} className={styles.homepage_item}>
                            <HomePageItemBox
                              element={el}
                              setisVisibleNotificationAddtoCart={
                                setisVisibleNotificationAddtoCart
                              }
                            />
                          </div>
                        ))}
                      </div>
                    </AnimationWrapper>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* <div className={styles.products}>
          {data.map((element, index) => (
            <div key={index}>
              {(isActive === element[0].main_title ||
                isActive === element[0].category ||
                isActive === false) && (
                <div>
                  <AnimationWrapper>
                    <h2 className={styles.product_name}>
                      {element[0].main_title}
                    </h2>
                    
                    <div className={styles.list}>
                   
                      {element.map((el, index) => (
                        <div key={index} className={styles.homepage_item}>
                          <HomePageItemBox
                            element={el}
                            setisVisibleNotificationAddtoCart={
                              setisVisibleNotificationAddtoCart
                            }
                          />
                        </div>
                      ))}
                    </div>
                  </AnimationWrapper>
                </div>
              )}
            </div>
          ))}
        </div> */}
      </div>

      <HomePageBanner />
    </div>
  );
};

export default memo(HomepageBlock);
