import { memo } from "react";
import styles from "./style.module.scss";
import cn from "classnames";

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
    <div
      className={cn(styles.wrapper, isVisibleSizetable && styles.active)}
      onClick={handleClose}
    >
      <div className={styles.section_content}>
        <div className={styles.section} onClick={(e) => e.stopPropagation()}>
          <h2 className={styles.title}>{title}</h2>
          <img draggable="false" className={styles.img} src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default memo(SizetableModalBlock);
