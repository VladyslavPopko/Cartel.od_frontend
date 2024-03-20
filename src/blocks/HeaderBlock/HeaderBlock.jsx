import Button from "../../components/Button/Button";
import styles from "./style.module.scss";
import cn from "classnames";

const HeaderBlock = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <p>ВЕСНЯНИЙ РОЗПРОДАЖ -60% ВІД СТОРОЇ ЦІНИ</p>
        <Button className={styles.button} text="ЗАМОВИТИ" />
      </div>
    </div>
  );
};

export default HeaderBlock;
