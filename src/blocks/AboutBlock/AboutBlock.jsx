import styles from "./style.module.scss";
import img1 from "../../img/AboutBlock/img1.png";
import img2 from "../../img/AboutBlock/img2.png";
import Box from "../../components/Box/Box";
import arrow from "../../img/PriceBlock/arrow.svg";
import PriceBlock from "../PriceBlock/PriceBlock";
const AboutBlock = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <p className={styles.title}>
            Замовляй комплекти<br></br>
            СОРОЧОК з додатковою знижкою
          </p>
          <div className={styles.list}>
            <div className={styles.list_item}>
              <img src={img1} alt="" />
            </div>
            <div className={styles.list_item}>
              <p>пРИ ЗАМОЛВЕННІ 2 СОРОЧОК ЗНИЖКА:</p>
              <div className={styles.price_list}>
                <div className={styles.price_list_item}>
                  <p>1 998 ₴</p>
                  <p>1 699 ₴ </p>
                </div>
                <Box value="-15%" />
              </div>
            </div>
          </div>
          <div className={styles.list}>
            <div className={styles.list_item}>
              <img src={img2} alt="" />
            </div>
            <div className={styles.list_item}>
              <p>пРИ ЗАМОЛВЕННІ 3 СОРОЧОК ЗНИЖКА: </p>
              <div className={styles.price_list}>
                <div className={styles.price_list_item}>
                  <p>2 997 ₴</p>
                  <p>2 399 ₴</p>
                </div>
                <Box value="-20%" />
              </div>
            </div>
          </div>
        </div>
        <PriceBlock />
      </div>
    </div>
  );
};

export default AboutBlock;
