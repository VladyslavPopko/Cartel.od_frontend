import { useDispatch } from "react-redux";
import styles from "./style.module.scss";
import cn from "classnames";
import { changeColor } from "../../redux/slices/colorSlice";
import { ONE, THREE, TWO } from "../../constanses/constanses";

const ColorCircle = () => {
  const dispatch = useDispatch();

  const handleSetColorOne = () => {
    const root = document.querySelector(":root");
    root.style.setProperty("--hero-background", "var(--ONE)");
    root.style.setProperty("--hero-color", "#ffffff");

    root.style.setProperty("--border-ONE", "0px 0px 20px #FFFFFF");
    root.style.setProperty("--border-TWO", "0");
    root.style.setProperty("--border-THREE", "0");
    dispatch(changeColor(ONE));
  };
  const handleSetColorTwo = () => {
    const root = document.querySelector(":root");
    root.style.setProperty("--hero-background", "var(--TWO)");
    root.style.setProperty("--hero-color", "#ffffff");

    root.style.setProperty("--border-ONE", "0");
    root.style.setProperty("--border-TWO", "0px 0px 20px black");
    root.style.setProperty("--border-THREE", "0");
    dispatch(changeColor(TWO));
  };
  const handleSetColorThree = () => {
    const root = document.querySelector(":root");
    root.style.setProperty("--hero-background", "var(--THREE)");
    root.style.setProperty("--hero-color", "black");

    root.style.setProperty("--border-ONE", "0");
    root.style.setProperty("--border-TWO", "0");
    root.style.setProperty("--border-THREE", "0px 0px 20px black");
    dispatch(changeColor(THREE));
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
