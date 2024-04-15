import styles from "./style.module.scss";
import question from "../../img/HomePage/question.svg";
import RecomendedProducts from "../RecomendedProducts/RecomendedProducts";
import { memo } from "react";

const SearchNoSuccessBox = ({
  isSearch,
  setisVisibleNotificationAddtoCart,
  data_recomended,
}) => {
  return (
    <>
      <div className={styles.section}>
        <img src={question} className={styles.img} alt="" />
        <div className={styles.content}>
          <div className={styles.content_header}>Вибачте, але</div>
          <div className={styles.content_footer}>
            за запитом <span className={styles.selected}>«{isSearch}» </span>
            нічого не знайдено :(
          </div>
        </div>
      </div>
      <div className={styles.products}>
        <p className={styles.products_title}>Кращі пропозиції тижня:</p>
        <RecomendedProducts data_recomended={data_recomended}
          setisVisibleNotificationAddtoCart={setisVisibleNotificationAddtoCart}
        />
      </div>
    </>
  );
};

export default memo(SearchNoSuccessBox);
