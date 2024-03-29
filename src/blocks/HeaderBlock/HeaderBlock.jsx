import styles from "./style.module.scss";
import cn from "classnames";
import img from "../../img/HeaderBlock/cart.svg";
import { useSelector } from "react-redux";
import { memo } from "react";
import imgham from "../../img/MenuBox/menu.svg";

const HeaderBlock = ({ content, setIsVivsibleCart, handleMenu }) => {
  const qty = useSelector((state) => state.cart.qty);
  const handleCart = () => {
    setIsVivsibleCart(true);
  };
  const { title } = content;
  return (
    <div className={cn(styles.wrapper)}>
      <div className={styles.content}>
        <div onClick={handleMenu} className={styles.menu_hamburger}>
          <img src={imgham} alt="" />
          <p>Меню</p>
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

export default HeaderBlock;
