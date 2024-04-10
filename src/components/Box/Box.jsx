import { memo } from "react";
import styles from "./style.module.scss";

const Box = (props) => {
  const { value } = props;
  return <div className={styles.box}>{value}</div>;
};

export default memo(Box);
