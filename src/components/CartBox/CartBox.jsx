import { memo } from "react";
import styles from "./style.module.scss";
import { NavLink } from "react-router-dom";

const CartBox = (props) => {
  const {
    img,
    title,
    color,
    size,
    count,
    old_price,
    price,
    onClickInc,
    onClickDec,
    page,
  } = props;
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
    <div className={styles.section}>
      <NavLink className={styles.img_wrapper} to={page}>
        <img draggable="false" className={styles.img} src={img} alt="" />
      </NavLink>
      <div className={styles.list}>
        <NavLink className={styles.title} to={page}>
          <p className={styles.title}>{title}</p>
        </NavLink>
        {color && (
          <>
            <p className={styles.text_color}>Колір:</p>
            <p className={styles.color}>{color}</p>
          </>
        )}

        {size && <p className={styles.size}>Розмір : {size}</p>}
        <p className={styles.price_old}>{arrayOldPrice} ₴</p>
        <div className={styles.list_item}>
          <div className={styles.list_item_left}>
            <span onClick={onClickDec} className={styles.decrement}>
              -
            </span>
            <span className={styles.input}>{count} </span>
            <span onClick={onClickInc} className={styles.increment}>
              +
            </span>
          </div>
          <div className={styles.list_item_right}>
            <p className={styles.price}>{arrayPrice} ₴</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(CartBox);
