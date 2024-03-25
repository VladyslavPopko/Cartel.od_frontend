import styles from "./style.module.scss";
import close from "../../img/CartBlock/close.svg";
import CartBox from "../../components/CartBox/CartBox";
import img1 from "../../img/CartBlock/img1.jpg";
import img2 from "../../img/CartBlock/img2.jpg";
import img3 from "../../img/CartBlock/img3.jpg";
import Button from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { decrementQty, incrementQty } from "../../redux/slices/cartSlice";
import { NavLink } from "react-router-dom";
import cartImg from "../../img/CartBlock/cart.svg";

const Cartblock = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const finalPrice = useSelector((state) => state.cart.finalPrice);
  const oldPrice = useSelector((state) => state.cart.finalOldPrice);
  const qty = useSelector((state) => state.cart.qty);

  return (
    <div className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.header_title}>Кошик</h2>
        <img src={close} alt="" />
      </header>
      <main className={styles.main}>
        {qty === 0 && (
          <div className={styles.cart_free}>
            <img className={styles.cart_free_img} src={cartImg} alt="" />
            <h3 className={styles.cart_free_title}>Кошик пустий.</h3>
            <h4 className={styles.cart_free_text}>
              Але це можна легко виправити)
            </h4>
            <Button
              text="Продовжити покупки"
              className={styles.button_continue}
            />
          </div>
        )}
        {qty > 0 && (
          <>
            <div className={styles.main_list}>
              {cart.map((el) => (
                <CartBox
                  img={el.img}
                  title={el.name}
                  color={el.color}
                  size={el.size}
                  count={el.qty}
                  old_price={el.old_price}
                  price={el.price}
                  onClickInc={() => dispatch(incrementQty(el))}
                  onClickDec={() => dispatch(decrementQty(el))}
                />
              ))}
            </div>
            <div className={styles.main_buttons}>
              <Button
                text="Продовжити покупки"
                className={styles.button_continue}
              />
              <div className={styles.main_buttons_right}>
                <div className="">
                  <p className={styles.old_price}>{oldPrice} ₴</p>
                  <p className={styles.price}>{finalPrice} ₴</p>
                </div>
                <NavLink to="/submit">
                  <Button
                    text="Оформити замовлення"
                    className={styles.button_submit}
                  />
                </NavLink>
              </div>
            </div>
          </>
        )}
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Cartblock;
