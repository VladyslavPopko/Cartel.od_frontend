import Button from "../../components/Button/Button";
import styles from "./style.module.scss";
import cn from "classnames";
import img from "../../img/HeaderBlock/cart.svg";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const HeaderBlock = ({
  title,
  setIsVivsibleCart,
  isVisibleNotificationAddtoCart,
}) => {
  const qty = useSelector((state) => state.cart.qty);
  const handleCart = () => {
    setIsVivsibleCart(true);
  };
  return (
    <div className={cn(styles.wrapper)}>
      <div className={styles.content}>
        <p className={styles.text}>{title}</p>
        <div className={styles.content_button}>
          <div className={cn(styles.cart,isVisibleNotificationAddtoCart && styles.active)} onClick={handleCart}>
            <p className={styles.img_text}>{qty}</p>
            <img draggable="false" className={styles.img} src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBlock;
