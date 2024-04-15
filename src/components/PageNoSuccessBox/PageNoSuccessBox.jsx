import styles from "./style.module.scss";
import smiley from "../../img/HomePage/smiley_sad.svg";

const PageNoSuccessBox = () => {
  return (
    <div className={styles.section}>
      <p className={styles.title}>Отакої...</p>
      <img src={smiley} className={styles.img} alt="" />
      <p className={styles.text}>Каталог поки що пустий, але не на довго </p>
    </div>
  );
};

export default PageNoSuccessBox;
