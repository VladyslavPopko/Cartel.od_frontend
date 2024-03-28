import styles from "./style.module.scss";
import cn from "classnames";
import "./colors.scss";


const ColorCircle = ({ color,setIsColor,isColor}) => {
  

  const handleSetColor = () => {
    setIsColor(color);
    // console.log(color);
    // const root = document.querySelector(":root");

    // root.style.setProperty("--hero-background", `var(--${color})`);
    // root.style.setProperty("--hero-color", "#ffffff");

    // root.style.setProperty("--border-ONE", "0px 0px 20px #FFFFFF");
    // root.style.setProperty("--border-TWO", "0");
    // root.style.setProperty("--border-THREE", "0");
  };

  // const handleSetColorTwo = () => {
  //   const root = document.querySelector(":root");
  //   root.style.setProperty("--hero-background", "var(--TWO)");
  //   root.style.setProperty("--hero-color", "#ffffff");

  //   root.style.setProperty("--border-ONE", "0");
  //   root.style.setProperty("--border-TWO", "0px 0px 20px black");
  //   root.style.setProperty("--border-THREE", "0");
  //   dispatch(shirtsChangeColor(TWO_SHIRT));
  // };
  // const handleSetColorThree = () => {
  //   const root = document.querySelector(":root");
  //   root.style.setProperty("--hero-background", "var(--THREE)");
  //   root.style.setProperty("--hero-color", "black");

  //   root.style.setProperty("--border-ONE", "0");
  //   root.style.setProperty("--border-TWO", "0");
  //   root.style.setProperty("--border-THREE", "0px 0px 20px black");
  //   dispatch(shirtsChangeColor(THREE_SHIRT));
  // };

  return (
    <div className={styles.color_list}>
      <div
        onClick={handleSetColor}
        className={cn(styles.color_list_item, color,color===isColor && styles.active)}
      ></div>
      {/* <div onClick={handleSetColorTwo} className={styles.color_list_item}></div>
      <div
        onClick={handleSetColorThree}
        className={styles.color_list_item}
      ></div> */}
    </div>
  );
};

export default ColorCircle;
