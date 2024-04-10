import styles from "./style.module.scss";
import close from "../../img/ThankyouBlock/close.svg";
import { memo } from "react";
import ModalWrapper from "../../wrappers/ModalWrapper/ModalWrapper";

const ThankyouBlock = ({
  isVisibleThankyou,
  setIsVisibleThankyou,
  content,
}) => {
  const { title, text, img, status } = content;
  const handleCloseThankYou = () => {
    setIsVisibleThankyou(false);
  };
  return (
    <ModalWrapper
      isVisible={isVisibleThankyou}
      handleClose={handleCloseThankYou}
    >
      <article className={styles.section}>
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
      </article>
    </ModalWrapper>
  );
};

export default memo(ThankyouBlock);
