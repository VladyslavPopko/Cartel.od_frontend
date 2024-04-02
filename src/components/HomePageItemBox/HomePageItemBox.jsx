import { NavLink } from "react-router-dom";
import styles from "./style.module.scss";
import addToCartImg from "../../img/HomePage/addToCart.svg";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import { memo, useEffect, useState } from "react";

const HomePageItemBox = ({ element, setisVisibleNotificationAddtoCart }) => {
  const { img, main_title, price, old_price, page } = element;
  const dispatch = useDispatch();
  const qty = useSelector((state) => state.cart.qty);
  const [isValue,setIsValue] = useState(false);

  useEffect(() => {
    if (isValue) {
      dispatch(addToCart(isValue));
      setIsValue(false);
      setisVisibleNotificationAddtoCart(true);
      setTimeout(setisVisibleNotificationAddtoCart, 2000, false);
    }
  }, [isValue]);

  return (
    <div className={styles.section}>
      <div className={styles.img_wrapper}>
        <NavLink to={page}>
          <img draggable="false" className={styles.img} src={img} alt="" />
        </NavLink>
        <img
          draggable="false"
          className={styles.addToCart}
          src={addToCartImg}
          onClick={() => setIsValue(element)}
          alt=""
        />
      </div>
      <NavLink className={styles.title} to={page}>
        {main_title}
      </NavLink>
      <p className={styles.old_price}>{old_price} ₴</p>
      <p className={styles.price}>
        <span className={styles.select}>{price}</span> ₴
      </p>
    </div>
  );
};

export default memo(HomePageItemBox);
