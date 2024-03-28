import ReviewCart from "../../components/ReviewCart/ReviewCart";
import styles from "./style.module.scss";

import Button from "../../components/Button/Button";

const ReviewBlock = ({ handleReview, content }) => {
  const {
    title,
    item1_img1,
    item2_img1,
    item3_img1,
    item1_name,
    item1_text,
    item2_name,
    item2_text,
    item3_name,
    item3_text,
  } = content;
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.list}>
        <ReviewCart img={item1_img1} name={item1_name} text={item1_text} />
        <ReviewCart img={item2_img1} name={item2_name} text={item2_text} />
        <ReviewCart img={item3_img1} name={item3_name} text={item3_text} />
      </div>
      <Button
        onClick={handleReview}
        className={styles.button}
        text="Залишити відгук"
        type="button"
      />
    </div>
  );
};

export default ReviewBlock;
