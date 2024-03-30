import { memo } from "react";
import AboutUsBox from "../../components/AboutUsBox/AboutUsBox";
import styles from "./style.module.scss";

const AboutUsBlock = ({ content }) => {
  const {
    item1_img1,
    item2_img1,
    item1_title,
    item1_text,
    item2_title,
    item2_text,
  } = content;
  return (
    <div className={styles.section}>
      <AboutUsBox img={item1_img1} title={item1_title} text={item1_text} />
      <AboutUsBox img={item2_img1} title={item2_title} text={item2_text} />
    </div>
  );
};

export default memo(AboutUsBlock);
