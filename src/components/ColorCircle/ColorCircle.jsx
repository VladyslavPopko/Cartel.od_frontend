import { useDispatch } from "react-redux";
import styles from "./style.module.scss";
import cn from "classnames";
import { shirtsChangeColor } from "../../redux/slices/shirtsColorSlice";
import { ONE_SHIRT, THREE_SHIRT, TWO_SHIRT } from "../../constanses/data_shirts";

const ColorCircle = () => {
  const dispatch = useDispatch();

  const handleSetColorOne = () => {
    const root = document.querySelector(":root");
    root.style.setProperty("--hero-background", "var(--ONE)");
    root.style.setProperty("--hero-color", "#ffffff");

    root.style.setProperty("--border-ONE", "0px 0px 20px #FFFFFF");
    root.style.setProperty("--border-TWO", "0");
    root.style.setProperty("--border-THREE", "0");
    dispatch(shirtsChangeColor(ONE_SHIRT));
  };
  const handleSetColorTwo = () => {
    const root = document.querySelector(":root");
    root.style.setProperty("--hero-background", "var(--TWO)");
    root.style.setProperty("--hero-color", "#ffffff");

    root.style.setProperty("--border-ONE", "0");
    root.style.setProperty("--border-TWO", "0px 0px 20px black");
    root.style.setProperty("--border-THREE", "0");
    dispatch(shirtsChangeColor(TWO_SHIRT));
  };
  const handleSetColorThree = () => {
    const root = document.querySelector(":root");
    root.style.setProperty("--hero-background", "var(--THREE)");
    root.style.setProperty("--hero-color", "black");

    root.style.setProperty("--border-ONE", "0");
    root.style.setProperty("--border-TWO", "0");
    root.style.setProperty("--border-THREE", "0px 0px 20px black");
    dispatch(shirtsChangeColor(THREE_SHIRT));
  };

  return (
    <div className={styles.color_list}>
      <div onClick={handleSetColorOne} className={styles.color_list_item}></div>
      <div onClick={handleSetColorTwo} className={styles.color_list_item}></div>
      <div
        onClick={handleSetColorThree}
        className={styles.color_list_item}
      ></div>
    </div>
  );
};

export default ColorCircle;
