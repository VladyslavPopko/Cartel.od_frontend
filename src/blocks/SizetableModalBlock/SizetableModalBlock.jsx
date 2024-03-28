import styles from "./style.module.scss";
import cn from "classnames";
import table from "../../img/SizetableBlock/table.jpg"

const SizetableModalBlock = ({ isVisibleSizetable, setIsVisibleSizetable }) => {
  const handleClose = () => {
    setIsVisibleSizetable(false);
  };

  return (
    <div
      className={cn(styles.wrapper, isVisibleSizetable && styles.active)}
      onClick={handleClose}
    >
      <div
        className={styles.section}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className={styles.title}>Таблиця розмірів</h2>
      <img className={styles.img} src={table} alt="" />
      </div>
    </div>
  );
};

export default SizetableModalBlock;
