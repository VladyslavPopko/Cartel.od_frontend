import styles from "./style.module.scss";
import ColorCircle from "../ColorCircle/ColorCircle";
import { memo } from "react";

const GaleryListChoose = ({ isColor, setIsColor, data }) => {
  return (
    <div className={styles.section}>
      {data.map((el) => (
        <ColorCircle
          color={el.color}
          key={el.id}
          setIsColor={setIsColor}
          isColor={isColor}
        />
      ))}
    </div>
  );
};

export default memo(GaleryListChoose);
