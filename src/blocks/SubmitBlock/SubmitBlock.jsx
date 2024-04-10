import styles from "./style.module.scss";
import close from "../../img/SubmitBlock/close.svg";

import Form from "../../components/Form/Form";
import CartBox from "../../components/CartBox/CartBox";
import SubmitBox from "../../components/SubmitBox/SubmitBox";
import {
  decrementQty,
  deleteCart,
  incrementQty,
} from "../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formValidationSchema } from "../../validationSchemas/formValidationsSchema";

import ModalWrapper from "../../wrappers/ModalWrapper/ModalWrapper";
import { UseFetchToCRM } from "../../hooks/useFetchToCRM";
import { UseFetchToGoogle } from "../../hooks/UseFetchToGoogle";

const SubmitBlock = ({
  isVisibleSubmit,
  setIsVisibleSubmit,
  setIsVisibleThankyou,
  setIsVisibleAssign,
  setIsVisiblePolitics,
  googleSheet,
  googleList,
  setIsLoading,
  content,
}) => {
  const { title_name, content_title, content_text, img } = content;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const handleCloseSubmit = () => {
    setIsVisibleSubmit(false);
  };
  const onSubmit = (data) => {
    cart.map((el) => {
      let formBody = [];
      for (let property in data) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(data[property]);
        formBody.push(encodedKey + "=" + encodedValue);
      }
      formBody.push("item=" + el.page);
      formBody.push("google=" + googleSheet);
      formBody.push("list=" + googleList);
      formBody.push("price=" + el.price);
      formBody.push("color=" + el.id);
      formBody.push("size=" + el.size);
      formBody.push("count=" + el.qty);
      formBody.push("vendor=" + el.vendor);
      formBody = formBody.join("&");

      UseFetchToGoogle(formBody, setIsLoading);
    });
    const products = [];

    cart.map((el) => {
      const product_not_exist_vendor_not_exist = {
        vendor_name: el.vendor, // название поставщика (заменить)
        product_title: el.full_name, // название нового товара
        drop_price: 0,
        price: el.price, // цена продажи товара (заменить)
        amount: el.qty, // количество товара
        size_title: el.size, // размер товара (необязательно)
        // size_note: el.color, // примечание к размеру (необязательно)
      };
      products.push(product_not_exist_vendor_not_exist);
    });

    const data_prod = {
      name: data.name, // имя покупателя
      phone: data.tel, // телефон
      products: products, // массив с товарами заказа
      order_source: "", // источник заказа (необязательно)
      traffic_source: "", // источник трафика (необязательно)
      utm_source: "", // utm_source (необязательно)
      utm_medium: "", // utm_medium (необязательно)
      utm_term: "", // utm_term (необязательно)
      utm_content: "", // utm_content (необязательно)
      utm_campaign: "", // utm_campaign (необязательно)
    };

    UseFetchToCRM(data_prod, setIsLoading);
    dispatch(deleteCart());
    reset();
    setIsLoading(true);
    setIsVisibleSubmit(false);
    setIsVisibleThankyou(true);
    // start facebook event pixel
    // fbq("track", "Purchase");
    // end facebook event pixel
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
    <ModalWrapper isVisible={isVisibleSubmit} handleClose={handleCloseSubmit}>
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
                key={el.full_name}
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
    </ModalWrapper>
  );
};

export default SubmitBlock;
