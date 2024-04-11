import styles from "./style.module.scss";

import { useDispatch } from "react-redux";
import ColorCircle from "../../components/ColorCircle/ColorCircle";
import Select from "../../components/Select/Select";
import Button from "../../components/Button/Button";
import { addToCart } from "../../redux/slices/cartSlice";
import cn from "classnames";
import { memo } from "react";
import SliderHomeBox from "../../components/SliderHomeBox/SliderHomeBox";

const HeroBlock = ({
  setIsVisibleSizetable,
  data,
  content,
  selected,
  setSelected,
  addNotification,
  isColor,
  setIsColor,
  sizeValue,
  sizeArray,
  setIsVisibleGallery,
}) => {
  const { price, old_price, title, subtitle, footer_text } = content;
  const info = data.filter((el) => el.color === isColor);
  let article = info[0]?.article;

  if (subtitle) {
    document.title = `Cartel - ${title} ${subtitle}`;
  } else {
    document.title = `Cartel - ${title}`;
  }

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    const info = data.filter((el) => el.color === isColor);
    info[0].size = sizeValue;
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
              <p className={styles.article}>Артикул: {article}</p>
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
                <Select
                  sizeArray={sizeArray}
                  selected={selected}
                  setSelected={setSelected}
                />
              </div>
              <div className={styles.button}>
                <Button
                  onClick={handleAddToCart}
                  className={styles.btn}
                  text="В кошик"
                />
              </div>
            </div>

            <div className={styles.content_top_item}>
              <div className={styles.slider}>
                <SliderHomeBox
                  setIsVisibleGallery={setIsVisibleGallery}
                  data={data}
                  isColor={isColor}
                />
              </div>
            </div>
          </div>
          <p className={styles.content_bottom}>{footer_text}</p>
        </div>
      </div>
    </div>
  );
};

export default memo(HeroBlock);
