import styles from "./style.module.scss";
import SizeSelectorItem from "../SizeSelectorItem/SizeSelectorItem";
import { memo } from "react";

const SizeSelectorBox = ({ sizeArray, selected, setSelected }) => {
  return (
    <div className={styles.section}>
      {sizeArray.map((el) => (
        <SizeSelectorItem
          active={el.active}
          value={el.value}
          key={el.id}
          setSelected={setSelected}
          selected={selected}
        />
      ))}
    </div>
  );
};

export default memo(SizeSelectorBox);
