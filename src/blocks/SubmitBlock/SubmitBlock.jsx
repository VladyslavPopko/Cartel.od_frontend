import styles from "./style.module.scss";
import close from "../../img/SubmitBlock/close.svg";
import img from "../../img/SubmitBlock/img.svg";
import Form from "../../components/Form/Form";
import CartBox from "../../components/CartBox/CartBox";
import img1 from "../../img/CartBlock/img1.jpg";
import img2 from "../../img/CartBlock/img2.jpg";
import img3 from "../../img/CartBlock/img3.jpg";
import SubmitBox from "../../components/SubmitBox/SubmitBox";
import { decrementQty, incrementQty } from "../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { shirtsValidationSchema } from "../../validationSchemas/shirtsValidationsSchema";

const SubmitBlock = ({
  isVisibleSubmit,
  setIsVisibleSubmit,
  setIsVisibleThankyou,
  setIsVisibleAssign,
  setIsVisiblePolitics,
}) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const finalPrice = useSelector((state) => state.cart.finalPrice);
  const qty = useSelector((state) => state.cart.qty);
  const title = "Весняна сорочка в клітинку";

  const handleCloseSubmit = () => {
    setIsVisibleSubmit(false);
  };
  const onSubmit = (data) => {
    setIsVisibleSubmit(false);
    setIsVisibleThankyou(true);
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      tel: "",
    },
    resolver: yupResolver(shirtsValidationSchema),
    mode: "onChange",
  });
  return (
    <div
      className={cn(styles.wrapper, isVisibleSubmit && styles.active)}
      onClick={handleCloseSubmit}
    >
      <div className={styles.section} onClick={(e) => e.stopPropagation()}>
        <header className={styles.header}>
          <h2 className={styles.title}>Оформлення замовлення</h2>
          <img
            className={styles.close}
            src={close}
            alt=""
            onClick={handleCloseSubmit}
          />
        </header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <main className={styles.main}>
            <div className={styles.main_header}>
              <div className="">
                <h3 className={styles.main_title}>
                  Укажіть свої контактні дані
                </h3>
                <h4 className={styles.main_text}>
                  Ми зв’яжемося з вами у найближчий час
                </h4>
              </div>
              <img src={img} alt="" />
            </div>

            <Form register={register} errors={errors} />
          </main>
          <footer className={styles.footer}>
            <div className={styles.footer_left}>
              <h3 className={styles.footer_title}>Ваше замовлення:</h3>
              {cart.map((el) => (
                <CartBox
                  key={el.id}
                  img={img1}
                  title={title}
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
            <div className={styles.footer_right}>
              <input
                className={styles.input}
                type="text"
                placeholder="Промокод на знижку"
              />
              <SubmitBox
                setIsVisibleAssign={setIsVisibleAssign}
                setIsVisiblePolitics={setIsVisiblePolitics}
              />
            </div>
          </footer>
        </form>
      </div>
    </div>
  );
};

export default SubmitBlock;
