import ReactLoading from "react-loading";
import styles from "./style.module.scss";
import { memo } from "react";

const LoadingBox = ({ type, color }) => {
  return (
    <div className={styles.section}>
      <ReactLoading type={type} color={color} height="50px" width="50px" />
    </div>
  );
};

export default memo(LoadingBox);
