import styles from "./style.module.scss";

import img1 from "../../img/HeroBlock/img1.png";
import img2 from "../../img/HeroBlock/img2.png";
import img3 from "../../img/HeroBlock/img3.png";

import { useSelector } from "react-redux";
import { ONE, THREE, TWO } from "../../constanses/constanses";
import ColorCircle from "../../components/ColorCircle/ColorCircle";
import Select from "../../components/Select/Select";
import Button from "../../components/Button/Button";

const HeroBlock = () => {
  const selectedColor = useSelector((state) => state.color.selectedColor);
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.content_top}>
            <div className={styles.content_top_item}>
              <p className={styles.title}>Весняна</p>
              <p className={styles.title}>сорочка в клітинку</p>
              <p className={styles.text_color}>колір:</p>
              <div className={styles.color_list}>
                <ColorCircle />
              </div>
              <p className={styles.price_text}>Стара ціна:</p>
              <p className={styles.price_old}>1 599 грн</p>
              <p className={styles.price}>
                <span className={styles.price_select}>999</span> грн.
              </p>
              <div className={styles.size}>
                <p className={styles.size_text}>Розмір:</p>
                <p className={styles.size_table}>таблиця розмірів</p>
              </div>
              <div className={styles.select}>
              <Select />
              </div>
              <div className={styles.button}>
                <Button className={styles.btn} href="#submitForm" text="Швидке замовлення"/>
              </div>
            </div>
            <div className={styles.content_top_item}>
              {selectedColor === ONE && (
                <img src={img1} alt="" className={styles.img} />
              )}
              {selectedColor === TWO && (
                <img src={img2} alt="" className={styles.img} />
              )}
              {selectedColor === THREE && (
                <img src={img3} alt="" className={styles.img} />
              )}
            </div>
          </div>
          <p className={styles.content_bottom}>втілення якості та стилю</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBlock;
