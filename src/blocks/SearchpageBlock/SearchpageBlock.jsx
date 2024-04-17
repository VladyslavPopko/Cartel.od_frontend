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
import { changeSearch } from "../../redux/slices/searchSlice";
import ChangeSexHomePage_withoutSearch from "../../components/ChangeSexHomePage_WithoutSearch/ChangeSexHomePage_withoutSearch";

const SearchpageBlock = ({ database, data_recomended }) => {
  const [isVisibleNotificationAddtoCart, setisVisibleNotificationAddtoCart] =
    useState(false); // Notification Add to Cart

  const dispatch = useDispatch();

  const searchValue = useSelector((state) => state.search.search);

  const isPage = useSelector((state) => state.pagination.page);

  let data = database;

  searchValue &&
    (data = data.filter((element) =>
      element.search?.toLowerCase().includes(searchValue.toLowerCase())
    ));

  const [value, setValue] = useState(searchValue);
  const SubmitSearchName = (e) => {
    e.preventDefault();
    dispatch(changeSearch(value));
  };

  return (
    <>
      <ChangeSexHomePage_withoutSearch />
      <div className={styles.wrapper}>
        <NotificationBox
          text="Товар додано до кошика"
          img={agree}
          isVisibleNotificationAddtoCart={isVisibleNotificationAddtoCart}
        />

        <form className={styles.input_section} onSubmit={SubmitSearchName}>
          <div className={styles.input_section}>
            <input
              inputMode="search"
              className={styles.input}
              type="text"
              placeholder="Пошук"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button className={styles.submit} type="submit"></button>
          </div>
        </form>
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
        {data.length === 0 && searchValue && (
          <div className={styles.search_nosuccess}>
            <SearchNoSuccessBox
              data_recomended={data_recomended}
              isSearch={searchValue}
              setisVisibleNotificationAddtoCart={
                setisVisibleNotificationAddtoCart
              }
            />
          </div>
        )}
        {data.length === 0 && !searchValue && (
          <div className={styles.search_nosuccess}>
            <PageNoSuccessBox />
          </div>
        )}
      </div>
    </>
  );
};

export default memo(SearchpageBlock);
