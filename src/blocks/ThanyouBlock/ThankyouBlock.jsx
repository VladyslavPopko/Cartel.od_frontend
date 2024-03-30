import styles from "./style.module.scss";
import close from "../../img/ThankyouBlock/close.svg";
import cn from "classnames";
import { memo } from "react";

const ThankyouBlock = ({
  isVisibleThankyou,
  setIsVisibleThankyou,
  content,
}) => {
  const {title, text, img, status} = content;
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
          <h2 className={styles.title}>{title}</h2>
          <h3 className={styles.text}>{text}</h3>
          <img draggable="false" className={styles.img} src={img} alt="" />
          <h3 className={styles.status}>{status}</h3>
        </main>
      </div>
    </div>
  );
};

export default memo(ThankyouBlock);
