import { memo } from "react";
import styles from "./style.module.scss";
import ModalWrapper from "../../wrappers/ModalWrapper/ModalWrapper";

const SizetableModalBlock = ({
  isVisibleSizetable,
  setIsVisibleSizetable,
  content,
}) => {
  const { title, img } = content;
  const handleClose = () => {
    setIsVisibleSizetable(false);
  };

  return (
    <ModalWrapper isVisible={isVisibleSizetable} handleClose={handleClose}>
      <article className={styles.section}>
        <h2 className={styles.title}>{title}</h2>
        <img draggable="false" className={styles.img} src={img} alt="" />
      </article>
    </ModalWrapper>
  );
};

export default memo(SizetableModalBlock);
