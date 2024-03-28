import styles from "./style.module.scss";
import close from "../../img/ThankyouBlock/close.svg";
import box from "../../img/ThankyouBlock/box.jpg";
import cn from "classnames";

const ThankyouBlock = ({ isVisibleThankyou, setIsVisibleThankyou }) => {
  const handleCloseThankYou = () => {
    setIsVisibleThankyou(false);
  };
  return (
    <div
      className={cn(styles.wrapper, isVisibleThankyou && styles.active)}
      onClick={handleCloseThankYou}
    >
      <div className={styles.section} onClick={(e) => e.stopPropagation()}>
        <header className={styles.header}>
          <img
            draggable="false"
            className={styles.close}
            src={close}
            alt=""
            onClick={handleCloseThankYou}
          />
        </header>
        <main className={styles.main}>
          <h2 className={styles.title}>Дякуємо за замовлення!</h2>
          <h3 className={styles.text}>
            Очікуйте на менеджера для уточнення адреси доставки та способу
            оплати
          </h3>
          <img draggable="false" className={styles.img} src={box} alt="" />
          <h3 className={styles.status}>Стан замовлення: упаковується</h3>
        </main>
      </div>
    </div>
  );
};

export default ThankyouBlock;
