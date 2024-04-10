import styles from "./style.module.scss";
import DescriptionItem from "../../components/DescriptionItem/DescriptionItem";
import { memo } from "react";

const DescriptionBlock = ({ content }) => {
  const {
    title,
    item1_logo,
    item1_logotext,
    item1_title,
    item1_subtitle,
    item1_text,
    item2_logo,
    item2_logotext,
    item2_title,
    item2_text,
    item3_logo,
    item4_logo,
    item3_logotext,
    item3_title,
    item3_text,
    item4_logotext,
    item4_title,
    item4_subtitle,
    item4_text,
  } = content;
  return (
    <div className={styles.section}>
      <div className={styles.section_content}>
        <h2 className={styles.section_title}>{title}</h2>
        <div className={styles.section_list}>
          <DescriptionItem
            img={item1_logo}
            logotext={item1_logotext}
            title={item1_title}
            subtitle={item1_subtitle}
            text={item1_text}
          />
          <DescriptionItem
            img={item2_logo}
            logotext={item2_logotext}
            title={item2_title}
            text={item2_text}
          />
          <DescriptionItem
            img={item3_logo}
            logotext={item3_logotext}
            title={item3_title}
            text={item3_text}
          />
          <DescriptionItem
            img={item4_logo}
            logotext={item4_logotext}
            title={item4_title}
            subtitle={item4_subtitle}
            text={item4_text}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(DescriptionBlock);
