import styles from "./style.module.scss";
import { memo, useState } from "react";
import Button from "../../components/Button/Button";
import HomePageItemBox from "../../components/HomePageItemBox/HomePageItemBox";
import NotificationBox from "../../components/NotificationBox/NotificationBox";
import agree from "../../img/Notifications/agree.svg";
import cn from "classnames";

import AnimationWrapper from "../../wrappers/AnimationWrapper";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../redux/slices/pageSlice";

import FilterHomePage from "../../components/FilterHomePage/FilterHomePage";
import ChangeSexHomePage from "../../components/ChangeSexHomePage/ChangeSexHomePage";
import SearchNoSuccessBox from "../../components/SearchNoSuccessBox/SearchNoSuccessBox";
import PageNoSuccessBox from "../../components/PageNoSuccessBox/PageNoSuccessBox";

const HomepageBlock = ({ database, menu, data_recomended }) => {
  const [isVisibleNotificationAddtoCart, setisVisibleNotificationAddtoCart] =
    useState(false); // Notification Add to Cart
  const [isValueFilter, setIsValueFilter] = useState(null); // filter value
  const [isValueSort, setIsValueSort] = useState(null); // sort value
  const [isSearch, setisSearch] = useState(null); // search value

  const [isActiveFilter, setIsActiveFilter] = useState(false); // Нажата ли фильтр
  const [isActiveSort, setIsActiveSort] = useState(false); // Нажата ли сортировка

  const isPage = useSelector((state) => state.pagination.page);
  const dispatch = useDispatch();

  let data = database;

  isValueSort &&
    ((isValueSort === "За зростанням ціни" &&
      data.sort(function (a, b) {
        return a.price - b.price;
      })) ||
      (isValueSort === "За спаданням ціни" &&
        data.sort(function (a, b) {
          return b.price - a.price;
        })) ||
      (isValueSort === "За новизною" &&
        data.sort(function (a, b) {
          return b.article - a.article;
        })));

  isValueFilter
    ? (data = database.filter(
        (category) =>
          category.category === isValueFilter ||
          category.division === isValueFilter
      ))
    : (data = database);

  isSearch &&
    (data = data.filter((element) =>
      element.search?.toLowerCase().includes(isSearch.toLowerCase())
    ));

  return (
    <>
      <ChangeSexHomePage
        isSearch={isSearch}
        setisSearch={setisSearch}
        setIsValueFilter={setIsValueFilter}
        setIsValueSort={setIsValueSort}
        setIsActiveFilter={setIsActiveFilter}
        setIsActiveSort={setIsActiveSort}
      />
      <FilterHomePage
        isActiveFilter={isActiveFilter}
        setIsActiveFilter={setIsActiveFilter}
        isActiveSort={isActiveSort}
        setIsActiveSort={setIsActiveSort}
        menu={menu}
        isValueFilter={isValueFilter}
        setIsValueFilter={setIsValueFilter}
        isValueSort={isValueSort}
        setIsValueSort={setIsValueSort}
      />
      <div className={styles.wrapper}>
        <NotificationBox
          text="Товар додано до кошика"
          img={agree}
          isVisibleNotificationAddtoCart={isVisibleNotificationAddtoCart}
        />

        <div className={styles.section}>
          <div className={styles.products}>
            <div className={styles.list}>
              {data.map(
                (element, index) =>
                  isPage >= index && (
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
        {data.length === 0 && isSearch && (
          <div className={styles.search_nosuccess}>
            <SearchNoSuccessBox
              data_recomended={data_recomended}
              isSearch={isSearch}
              setisVisibleNotificationAddtoCart={
                setisVisibleNotificationAddtoCart
              }
            />
          </div>
        )}
        {data.length === 0 && !isSearch && (
          <div className={styles.search_nosuccess}>
            <PageNoSuccessBox />
          </div>
        )}
      </div>
    </>
  );
};

export default memo(HomepageBlock);
