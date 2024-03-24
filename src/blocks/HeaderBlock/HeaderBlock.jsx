import Button from "../../components/Button/Button";
import styles from "./style.module.scss";
import cn from "classnames";
import img from "../../img/HeaderBlock/cart.svg";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const HeaderBlock = () => {
  const qty = useSelector((state) => state.cart.qty);
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <p className={styles.text}>ВЕСНЯНИЙ РОЗПРОДАЖ -60% ВІД СТОРОЇ ЦІНИ</p>
        <div className={styles.content_button}>
          <Button
            href="#submitForm"
            className={styles.button}
            text="ЗАМОВИТИ"
          />
          <NavLink to="/cart">
            <div className={styles.cart}>
              <p className={styles.img_text}>{qty}</p>
              <img className={styles.img} src={img} alt="" />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HeaderBlock;
