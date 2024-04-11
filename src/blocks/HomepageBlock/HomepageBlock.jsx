import styles from "./style.module.scss";
import { memo, useState } from "react";
import Button from "../../components/Button/Button";
import HomePageItemBox from "../../components/HomePageItemBox/HomePageItemBox";
import NotificationBox from "../../components/NotificationBox/NotificationBox";
import agree from "../../img/Notifications/agree.svg";
import cn from "classnames";
import { MENU } from "../../datas/data";
import open from "../../img/HomePage/open.png";

import AnimationWrapper from "../../wrappers/AnimationWrapper";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../redux/slices/pageSlice";
import { homeData } from "../../datas/data_homePage";
import FilterHomePage from "../../components/FilterHomePage/FilterHomePage";

const HomepageBlock = () => {
  const [isVisibleNotificationAddtoCart, setisVisibleNotificationAddtoCart] =
    useState(false); // Notification Add to Cart
  const [isValueFilter, setIsValueFilter] = useState(null); // filter value
  const [isValueSort, setIsValueSort] = useState(null); // sort value

  const isPage = useSelector((state) => state.pagination.page);
  const dispatch = useDispatch();

  const menu = MENU;
  let data = homeData;
  isValueFilter
    ? (data = homeData.filter(
        (category) => category.category === isValueFilter
      ))
    : (data = homeData);

  console.log(data);
  isValueSort && (
    isValueSort === "По возрастанию цены" &&
    data.sort(function (a, b) {
      return a.price - b.price;
    }) ||
    isValueSort === "По убыванию цены" &&
    data.sort(function (a, b) {
      return b.price - a.price;
    })
  )


  return (
    <div className={styles.wrapper}>
      <NotificationBox
        text="Товар додано до кошика"
        img={agree}
        isVisibleNotificationAddtoCart={isVisibleNotificationAddtoCart}
      />
      <FilterHomePage
        menu={menu}
        isValueFilter={isValueFilter}
        setIsValueFilter={setIsValueFilter}
        isValueSort={isValueSort}
        setIsValueSort={setIsValueSort}
      />

      <div className={styles.section}>
        <div className={styles.products}>
          <div className={styles.list}>
            {data.map(
              (element, index) =>
                isPage >= index && (
                  <div className={styles.homepage_item} key={index}>
                    <AnimationWrapper>
                      <HomePageItemBox
                        element={element}
                        setisVisibleNotificationAddtoCart={
                          setisVisibleNotificationAddtoCart
                        }
                      />
                    </AnimationWrapper>
                  </div>
                )
            )}
          </div>
          {data.length > isPage && (
            <Button
              onClick={() => {
                dispatch(changePage(isPage + 10));
              }}
              text="Показати ще"
              className={styles.button_more}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(HomepageBlock);
