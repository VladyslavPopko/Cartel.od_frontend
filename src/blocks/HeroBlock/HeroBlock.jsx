import styles from "./style.module.scss";

import { useDispatch } from "react-redux";
import ColorCircle from "../../components/ColorCircle/ColorCircle";
import Select from "../../components/Select/Select";
import Button from "../../components/Button/Button";
import { addToCart } from "../../redux/slices/cartSlice";
import cn from "classnames";
import { motion } from "framer-motion";
import AnimationScaleY from "../../wrappers/animationScaleY";

const HeroBlock = ({
  setIsVisibleSizetable,
  data,
  old_price,
  price,
  selected,
  setSelected,
  title,
  subtitle,
  footerText,
  addNotification,
  isColor,
  setIsColor,
}) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const info = data.filter((el) => el.color === isColor);
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
        size = "Уточнити";
        break;
      }
    }
    info[0].size = size;
    info.map((e) => dispatch(addToCart(e)));
    addNotification(true);
    setTimeout(addNotification, 2000, false);
  };
  const handleSizetable = () => {
    setIsVisibleSizetable(true);
  };

  return (
    <div>
      <div className={cn(styles.wrapper)}>
        <div className={styles.content}>
          <div className={styles.content_top}>
            <div className={styles.content_top_item}>
            
              <p className={styles.title}>{title}</p>

              <p className={styles.title}>{subtitle}</p>
              <p className={styles.text_color}>колір:</p>
              <div className={styles.color_list}>
                {data.map((el) => (
                  <ColorCircle
                    color={el.color}
                    key={el.id}
                    setIsColor={setIsColor}
                    isColor={isColor}
                  />
                ))}
              </div>
              <p className={styles.price_text}>Стара ціна:</p>
              <p className={styles.price_old}>{old_price} грн</p>
              <p className={styles.price}>
                <span className={styles.price_select}>{price}</span> грн.
              </p>
              <div className={styles.size}>
                <p className={styles.size_text}>Розмір:</p>
                <p className={styles.size_table} onClick={handleSizetable}>
                  таблиця розмірів
                </p>
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
              {data.map(
                (el) =>
                  isColor === el.color && (
                    <img
                      draggable="false"
                      src={el.hero_img}
                      key={el.id}
                      alt=""
                      className={styles.img}
                    />
                  )
              )}
            </div>
          </div>
          <p className={styles.content_bottom}>{footerText}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBlock;
