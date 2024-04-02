import styles from "./style.module.scss";
import close from "../../img/CartBlock/close.svg";
import CartBox from "../../components/CartBox/CartBox";
import Button from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { decrementQty, incrementQty } from "../../redux/slices/cartSlice";
import cn from "classnames";
import { memo } from "react";

const Cartblock = ({
  isVisibleCart,
  setIsVivsibleCart,
  setIsVisibleSubmit,
  content,
}) => {
  const { title, empty_text, empty_subtext, empty_img } = content;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const finalPrice = useSelector((state) => state.cart.finalPrice);
  const oldPrice = useSelector((state) => state.cart.finalOldPrice);
  const qty = useSelector((state) => state.cart.qty);
  const handleCloseCart = () => {
    setIsVivsibleCart(false);
  };
  const handleOpenSubmit = () => {
    setIsVivsibleCart(false);
    setIsVisibleSubmit(true);
    // start facebook event pixel
    // fbq("track", "InitiateCheckout");
    // end facebook event pixel
  };

  return (
    <div
      className={cn(styles.wrapper, isVisibleCart && styles.active)}
      onClick={handleCloseCart}
    >
      <div className={styles.section_content}>
        <div className={styles.section} onClick={(e) => e.stopPropagation()}>
          <header className={styles.header}>
            <h2 className={styles.header_title}>{title}</h2>
            <img
              draggable="false"
              className={styles.close}
              src={close}
              alt=""
              onClick={handleCloseCart}
            />
          </header>
          <main className={styles.main}>
            {qty === 0 && (
              <div className={styles.cart_free}>
                <img
                  draggable="false"
                  className={styles.cart_free_img}
                  src={empty_img}
                  alt=""
                />
                <h3 className={styles.cart_free_title}>{empty_text}</h3>
                <h4 className={styles.cart_free_text}>{empty_subtext}</h4>
                <Button
                  text="Продовжити покупки"
                  className={styles.button_continue}
                  onClick={handleCloseCart}
                />
              </div>
            )}
            {qty > 0 && (
              <>
                <div className={styles.main_list}>
                  {cart.map((el) => (
                    <CartBox
                      key={el.id}
                      img={el.img}
                      title={el.name}
                      color={el.color}
                      size={el.size}
                      count={el.qty}
                      old_price={el.old_price}
                      price={el.price}
                      page={el.page}
                      onClickInc={() => dispatch(incrementQty(el))}
                      onClickDec={() => dispatch(decrementQty(el))}
                    />
                  ))}
                </div>
                <div className={styles.main_buttons}>
                  <Button
                    text="Продовжити покупки"
                    className={styles.button_continue}
                    onClick={handleCloseCart}
                  />
                  <div className={styles.main_buttons_right}>
                    <div className="">
                      <p className={styles.old_price}>{oldPrice} ₴</p>
                      <p className={styles.price}>{finalPrice} ₴</p>
                    </div>

                    <Button
                      text="Оформити замовлення"
                      className={styles.button_submit}
                      onClick={handleOpenSubmit}
                    />
                  </div>
                </div>
              </>
            )}
          </main>
          <footer className={styles.footer}></footer>
        </div>
      </div>
    </div>
  );
};

export default memo(Cartblock);
