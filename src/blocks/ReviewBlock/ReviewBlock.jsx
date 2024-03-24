import ReviewCart from "../../components/ReviewCart/ReviewCart";
import styles from "./style.module.scss";
import img1 from "../../img/ReviewBlock/img1.png";
import img2 from "../../img/ReviewBlock/img2.png";
import img3 from "../../img/ReviewBlock/img3.png";
import Button from "../../components/Button/Button";

const ReviewBlock = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Відгуки:</h2>
      <div className={styles.list}>
        <ReviewCart
          img={img1}
          title="Іван"
          text="Гарна якість, не линяє. замовив 3 сорочки. повністю задоволений"
        />
        <ReviewCart
          img={img2}
          title="Дмитро"
          text="Тепла та комфортна. На весню/осінь - ідеально"
        />
        <ReviewCart
          img={img3}
          title="Іван"
          text="Замовила на подарунок хлопцю. Дуже гарно виглядає, нам обом все сподобалось."
        />
      </div>
      <Button className={styles.button} text="Залишити відгук" type="button"/>
    </div>
  );
};

export default ReviewBlock;
