import styles from "./style.module.scss";
import img1 from "../../img/AdvantageBlock/img1.svg";
import img2 from "../../img/AdvantageBlock/img2.svg";
import img3 from "../../img/AdvantageBlock/img3.svg";
import img4 from "../../img/AdvantageBlock/img4.svg";
import img5 from "../../img/AdvantageBlock/img5.svg";
import img6 from "../../img/AdvantageBlock/img6.svg";
import AdvantageBox from "../../components/AdvantageBox/AdvantageBox";

const AdvantageBlock = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Наші переваги:</h2>
      <div className={styles.list}>
        <AdvantageBox
          img={img1}
          title="Зручність"
          text="Весь одяг створюється з використанням високоякісних матеріалів, що робить його надзвичайно м'яким та еластичним."
        />
        <AdvantageBox
          img={img2}
          title="Якість"
          text="Під час виготовлення одягу використовуються тільки найвищої якості матеріали і тканини. Виробництво проходить строгий контроль."
        />
        <AdvantageBox
          img={img3}
          title="Практичність"
          text="Тканина витримує багаторазові прання, зберігаючи свою початкову якість, насичений колір і не втрачає свою барвистість."
        />
        <AdvantageBox
          img={img4}
          title="Швидка доставка"
          text="Строк доставки не перевищує 1-2 днів з моменту замовлення."
        />
        <AdvantageBox
          img={img5}
          title="Захист покупців"
          text="Ви маєте право повернути придбаний товар протягом 14 днів з дати покупки."
        />
        <AdvantageBox
          img={img6}
          title="Ніяких передплат"
          text="Оплата за замовлення проводиться після отримання та перевірки товару."
        />
      </div>
    </div>
  );
};

export default AdvantageBlock;
