import styles from "./style.module.scss";
import star from "../../img/ReviewBlock/star.svg";

const ReviewCart = (props) => {
  const { img, name, text } = props;
  return (
    <div className={styles.section}>
      <img className={styles.img} src={img} alt="" />
      <h2 className={styles.title}>{name}</h2>
      <div className={styles.star_list}>
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default ReviewCart;
