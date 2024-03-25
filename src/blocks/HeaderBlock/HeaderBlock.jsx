import Button from "../../components/Button/Button";
import styles from "./style.module.scss";
import cn from "classnames";
import img from "../../img/HeaderBlock/cart.svg";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const HeaderBlock = ({ title, setIsVivsibleCart }) => {
  const qty = useSelector((state) => state.cart.qty);
  const handleCart = () => {
    setIsVivsibleCart(true);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <p className={styles.text}>{title}</p>
        <div className={styles.content_button}>
          <div className={styles.cart} onClick={handleCart}>
            <p className={styles.img_text}>{qty}</p>
            <img className={styles.img} src={img} alt=""  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBlock;
