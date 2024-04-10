import React, { memo } from "react";
import cn from "classnames";
import styles from "./style.module.scss";

const ModalWrapper = ({ isVisible, handleClose, children }) => {
  return (
    <div
      className={cn(styles.wrapper, isVisible && styles.active)}
      onClick={handleClose}
    >
      <div className={styles.section} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default memo(ModalWrapper);
