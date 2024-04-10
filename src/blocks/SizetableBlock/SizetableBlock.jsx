import { memo } from "react";
import styles from "./style.module.scss";

const SizetableBlock = ({ setIsVisibleSizetable, content }) => {
  const { title, img } = content;
  const handleSizetable = () => {
    setIsVisibleSizetable(true);
  };
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <img
        draggable="false"
        onClick={handleSizetable}
        className={styles.img}
        src={img}
        alt=""
      />
    </div>
  );
};

export default memo(SizetableBlock);
