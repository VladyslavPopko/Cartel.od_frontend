import styles from "./style.module.scss";
import AdvantageBox from "../../components/AdvantageBox/AdvantageBox";

const AdvantageBlock = ({ content }) => {
  const {
    title,
    item1_img1,
    item2_img1,
    item3_img1,
    item4_img1,
    item5_img1,
    item6_img1,
    item1_title,
    item1_text,
    item2_title,
    item2_text,
    item3_title,
    item3_text,
    item4_title,
    item4_text,
    item5_title,
    item5_text,
    item6_title,
    item6_text,
  } = content;
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.list}>
        <AdvantageBox img={item1_img1} title={item1_title} text={item1_text} />
        <AdvantageBox img={item2_img1} title={item2_title} text={item2_text} />
        <AdvantageBox img={item3_img1} title={item3_title} text={item3_text} />
        <AdvantageBox img={item4_img1} title={item4_title} text={item4_text} />
        <AdvantageBox img={item5_img1} title={item5_title} text={item5_text} />
        <AdvantageBox img={item6_img1} title={item6_title} text={item6_text} />
      </div>
    </div>
  );
};

export default AdvantageBlock;
