import styles from "./style.module.scss";

import { useDispatch } from "react-redux";
import ColorCircle from "../../components/ColorCircle/ColorCircle";
import Button from "../../components/Button/Button";
import { addToCart } from "../../redux/slices/cartSlice";
import cn from "classnames";
import { memo } from "react";
import SliderHomeBox from "../../components/SliderHomeBox/SliderHomeBox";
import SizeSelectorBox from "../../components/SizeSelectorBox/SizeSelectorBox";

const HeroBlock = ({
  setIsVisibleSizetable,
  data,
  selected,
  setSelected,
  addNotification,
  isColor,
  setIsColor,
  sizeValue,
  sizeArray,
  setIsVisibleGallery,
}) => {
  const title = data[0].name;
  const info = data.filter((el) => el.color === isColor);
  let article = info[0]?.article;

  document.title = `Cartel - ${title}`;

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    const info = data.filter((el) => el.color === isColor);
    !selected && SizeVisible === true
      ? (info[0].size = "Уточнити")
      : (info[0].size = sizeValue);

    info.map((e) => dispatch(addToCart(e)));
    addNotification(true);
    setTimeout(addNotification, 2000, false);
  };
  const handleSizetable = () => {
    setIsVisibleSizetable(true);
  };
  let ColorVisible, SizeVisible;
  data.map((el) => {
    el.color ? (ColorVisible = true) : (ColorVisible = false);
  });
  sizeArray[0]?.value ? (SizeVisible = true) : (SizeVisible = false);
  let price = data[0].price;
  let old_price = data[0].old_price;
  let arrayPrice = String(price).split("");
  let countPrice = 0;

  for (let i = arrayPrice.length - 1; i > 0; i--) {
    if (countPrice === 2) {
      arrayPrice.splice(i, 0, " "); // Вставляем пробел после каждых трех символов
      countPrice = 0; // Сбрасываем счетчик
    } else {
      countPrice++; // Увеличиваем счетчик
    }
  }

  arrayPrice = arrayPrice.join(""); // Объединяем массив обратно в строку и выводим

  let arrayOldPrice = String(old_price).split("");
  let countOldPrice = 0;

  for (let i = arrayOldPrice.length - 1; i > 0; i--) {
    if (countOldPrice === 2) {
      arrayOldPrice.splice(i, 0, " "); // Вставляем пробел после каждых трех символов
      countOldPrice = 0; // Сбрасываем счетчик
    } else {
      countOldPrice++; // Увеличиваем счетчик
    }
  }

  arrayOldPrice = arrayOldPrice.join(""); // Объединяем массив обратно в строку и выводим

  return (
    <div>
      <div className={cn(styles.wrapper)}>
        <div className={styles.content}>
          <div className={styles.content_top}>
            <div className={styles.content_top_item}>
              <p className={styles.title}>{title}</p>
              <p className={styles.article}>Артикул: {article}</p>
              {ColorVisible && (
                <>
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
                </>
              )}

              <p className={styles.price_text}>Стара ціна:</p>
              <p className={styles.price_old}>{arrayOldPrice} грн</p>
              <p className={styles.price}>
                <span className={styles.price_select}>{arrayPrice}</span> грн.
              </p>

              {SizeVisible && (
                <>
                  <div className={styles.size}>
                    <p className={styles.size_text}>Розмір:</p>
                    <p className={styles.size_table} onClick={handleSizetable}>
                      таблиця розмірів
                    </p>
                  </div>
                  <div className={styles.select}>
                    <SizeSelectorBox
                      sizeArray={sizeArray}
                      selected={selected}
                      setSelected={setSelected}
                    />
                  </div>
                </>
              )}

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
          <p className={styles.content_bottom}>втілення якості та стилю</p>
        </div>
      </div>
    </div>
  );
};

export default memo(HeroBlock);
