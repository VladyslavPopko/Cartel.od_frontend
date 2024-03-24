import DescriebeBox from "../DescriebeBox/DescriebeBox";
import styles from "./style.module.scss";

const DescriptionItem = (props) => {
  const { img, logotext, title, subtitle, text } = props;
  return (
    <div className={styles.section}>
      <DescriebeBox img={img} text={logotext} />
      <div className={styles.section_content}>
        <p className={styles.section_title}>
            {title}
        </p>
        <p className={styles.section_subtitle}>
            {subtitle}
        </p>
        <p className={styles.section_text}>
            {text}
        </p>
      </div>
    </div>
  );
};

export default DescriptionItem;
