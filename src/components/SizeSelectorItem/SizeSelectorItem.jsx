import { memo } from "react";
import styles from "./style.module.scss";
import cn from "classnames";

const SizeSelectorItem = ({ value, selected, setSelected, active }) => {
  const handleSelect = (e) => {
    selected === e.target.outerText
      ? setSelected(null)
      : setSelected(e.target.outerText);
  };
  return active ? (
    <div
      className={cn(styles.section, selected === value && styles.active)}
      onClick={handleSelect}
    >
      {value}
    </div>
  ) : (
    <div className={cn(styles.disable)}>{value}</div>
  );
};

export default memo(SizeSelectorItem);
