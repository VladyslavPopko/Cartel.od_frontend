import styles from "./style.module.scss";
import cn from "classnames";
import img from "../../img/HeaderBlock/cart.svg";
import { useSelector } from "react-redux";
import { memo } from "react";
import imgham from "../../img/MenuBox/menu.svg";
import close from "../../img/MenuBox/close.svg";
import icon from "../../img/icon.jpg";

const HeaderBlock = ({ content, setIsVivsibleCart, handleMenu, isMenu }) => {
  const qty = useSelector((state) => state.cart.qty);
  const handleCart = () => {
    setIsVivsibleCart(true);
  };
  const { title } = content;
  return (
    <div className={cn(styles.wrapper)}>
      <div className={styles.content}>
        <div onClick={handleMenu} className={styles.menu_hamburger}>
          {/* <img className={styles.logo} src={icon} alt="" /> */}
          <img
            className={cn(styles.hamburger, !isMenu && styles.active)}
            src={imgham}
            alt=""
          />
          <img
            className={cn(styles.close, isMenu && styles.active)}
            src={close}
            alt=""
          />
          
          <p>Каталог</p>
        </div>

        <p className={styles.text}>{title}</p>
        <div className={styles.content_button}>
          <div className={cn(styles.cart)} onClick={handleCart}>
            <p className={styles.img_text}>{qty}</p>
            <img draggable="false" className={styles.img} src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(HeaderBlock);
