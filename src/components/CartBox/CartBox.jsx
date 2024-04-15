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

        <p className={styles.size}>Розмір : {size}</p>
        <p className={styles.price_old}>{old_price} ₴</p>
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
            <p className={styles.price}>{price} ₴</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(CartBox);
