import styles from "./style.module.scss";
import cn from "classnames";
import close from "../../img/ReviewModalBlock/close.svg";
import Button from "../../components/Button/Button";

const ReviewModalBlock = ({
  isVisibleReview,
  setIsVisibleReview,
  setIsVisibleReviewThankyou,
}) => {
  const handleCloseReview = () => {
    setIsVisibleReview(false);
  };
  const handleReview = () => {
    setIsVisibleReview(false);
    setIsVisibleReviewThankyou(true);
  }
  return (
    <div
      className={cn(styles.wrapper, isVisibleReview && styles.active)}
      onClick={handleCloseReview}
    >
      <div className={styles.section} onClick={(e) => e.stopPropagation()}>
        <header className={styles.header}>
          <img src={close} alt="" onClick={handleCloseReview} />
        </header>
        <main className={styles.main}>
          <h2 className={styles.title}>Залиште ваш відгук</h2>
          <div className={styles.input_list}>
            <input type="text" placeholder="П.І.Б" className={styles.input} />
            <input
              type="text"
              placeholder="Введіть Ваш телефон"
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Введіть Ваш Email"
              className={styles.input}
            />
            <textarea
              type="text"
              placeholder="Введіть Ваш відгук"
              className={styles.input}
            />
          </div>
          <Button text="відправити" className={styles.btn} onClick={handleReview}/>
        </main>
      </div>
    </div>
  );
};

export default ReviewModalBlock;
