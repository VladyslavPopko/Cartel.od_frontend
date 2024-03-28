import styles from "./style.module.scss";
import close from "../../img/SubmitBlock/close.svg";

import Form from "../../components/Form/Form";
import CartBox from "../../components/CartBox/CartBox";
import SubmitBox from "../../components/SubmitBox/SubmitBox";
import { decrementQty, incrementQty } from "../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formValidationSchema } from "../../validationSchemas/formValidationsSchema";
import useFetchToGoogle from "../../hooks/useFetchToGoogle";

const SubmitBlock = ({
  isVisibleSubmit,
  setIsVisibleSubmit,
  setIsVisibleThankyou,
  setIsVisibleAssign,
  setIsVisiblePolitics,
  itemName,
  googleSheet,
  googleList,
  setIsLoading,
  content,
}) => {
  const { title_name, content_title, content_text, img } = content;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const finalPrice = useSelector((state) => state.cart.finalPrice);
  const qty = useSelector((state) => state.cart.qty);
  const title = "Весняна сорочка в клітинку";

  const handleCloseSubmit = () => {
    setIsVisibleSubmit(false);
  };
  const onSubmit = (data) => {
    console.log(cart);
    cart.map((el) => {
      let formBody = [];
      for (let property in data) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(data[property]);
        formBody.push(encodedKey + "=" + encodedValue);
      }
      formBody.push("item=" + itemName);
      formBody.push("google=" + googleSheet);
      formBody.push("list=" + googleList);
      formBody.push("price=" + el.price);
      formBody.push("color=" + el.color);
      formBody.push("size=" + el.size);
      formBody = formBody.join("&");
      useFetchToGoogle(formBody, setIsLoading);
      console.log(formBody);
    });

    setIsLoading(true);
    setIsVisibleSubmit(false);
    setIsVisibleThankyou(true);
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
    resolver: yupResolver(formValidationSchema),
    mode: "onChange",
  });
  return (
    <div
      className={cn(styles.wrapper, isVisibleSubmit && styles.active)}
      onClick={handleCloseSubmit}
    >
      <div className={styles.section} onClick={(e) => e.stopPropagation()}>
        <header className={styles.header}>
          <h2 className={styles.title}>{title_name}</h2>
          <img
            draggable="false"
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
                <h3 className={styles.main_title}>{content_title}</h3>
                <h4 className={styles.main_text}>{content_text}</h4>
              </div>
              <img draggable="false" src={img} alt="" />
            </div>

            <Form register={register} errors={errors} />
          </main>
          <footer className={styles.footer}>
            <div className={styles.footer_left}>
              <h3 className={styles.footer_title}>Ваше замовлення:</h3>
              {cart.map((el) => (
                <CartBox
                  key={el.id}
                  img={el.img}
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
