import styles from "./style.module.scss";

import img1 from "../../img/HeroBlock/shirts/img1.png";
import img2 from "../../img/HeroBlock/shirts/img2.png";
import img3 from "../../img/HeroBlock/shirts/img3.png";

import { useDispatch, useSelector } from "react-redux";
import ColorCircle from "../../components/ColorCircle/ColorCircle";
import Select from "../../components/Select/Select";
import Button from "../../components/Button/Button";
import { addToCart } from "../../redux/slices/cartSlice";
import {
  DATA_SHIRTS,
  ONE_SHIRT,
  THREE_SHIRT,
  TWO_SHIRT,
} from "../../constanses/data_shirts";

const HeroBlock = ({
  data,
  selectedColor,
  old_price,
  price,
  selected,
  setSelected,
}) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    
    const info = data.filter((el) => el.color === selectedColor);
    let size;
    switch (selected) {
      case "Розмір: S": {
        size = "S";
        break;
      }
      case "Розмір: M": {
        size = "M";
        break;
      }
      case "Розмір: L": {
        size = "L";
        break;
      }
      case "Розмір: XL": {
        size = "XL";
        break;
      }
      case "Розмір: XXL": {
        size = "XXL";
        break;
      }
      default: {
        size = "Уточнити"
        break;
      }
    }
    info[0].size = size;
    console.log(info);
    info.map((e) => dispatch(addToCart(e)));
  };

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
                <ColorCircle color={ONE_SHIRT} />
                <ColorCircle color={TWO_SHIRT} />
                <ColorCircle color={THREE_SHIRT} />
              </div>
              <p className={styles.price_text}>Стара ціна:</p>
              <p className={styles.price_old}>{old_price} грн</p>
              <p className={styles.price}>
                <span className={styles.price_select}>{price}</span> грн.
              </p>
              <div className={styles.size}>
                <p className={styles.size_text}>Розмір:</p>
                <p className={styles.size_table}>таблиця розмірів</p>
              </div>
              <div className={styles.select}>
                <Select selected={selected} setSelected={setSelected} />
              </div>
              <div className={styles.button}>
                <Button
                  onClick={handleAddToCart}
                  className={styles.btn}
                  href="#submitForm"
                  text="В кошик"
                />
              </div>
            </div>
            <div className={styles.content_top_item}>
              {selectedColor === ONE_SHIRT && (
                <img src={img1} alt="" className={styles.img} />
              )}
              {selectedColor === TWO_SHIRT && (
                <img src={img2} alt="" className={styles.img} />
              )}
              {selectedColor === THREE_SHIRT && (
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
