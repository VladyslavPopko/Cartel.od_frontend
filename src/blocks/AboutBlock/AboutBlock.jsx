import styles from "./style.module.scss";
import Box from "../../components/Box/Box";
import PriceBlock from "../PriceBlock/PriceBlock";
import { memo } from "react";
const AboutBlock = ({
  radioId1,
  radioId2,
  radioId3,
  data,
  selected,
  addNotification,
  content,
}) => {
  const {
    second_title,
    title,
    subtitle_first_text1,
    subtitle_first_text2,
    subtitle_first_text3,
    subtitle_second_text1,
    subtitle_second_text2,
    subtitle_second_text3,
    subtitle_first_old_price,
    subtitle_first_price,
    subtitle_first_value,
    subtitle_second_old_price,
    subtitle_second_price,
    subtitle_second_value,
    subtitle_first_img,
    subtitle_second_img,

  } = content;
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <p className={styles.title}>
            {title}
            <br></br>
            {second_title}
          </p>
          <div className={styles.list}>
            <div className={styles.list_item}>
              <img draggable="false" className={styles.img} src={subtitle_first_img} alt="" />
            </div>
            <div className={styles.list_item}>
              <p>
                {subtitle_first_text1}{" "}
                <span className={styles.select}>{subtitle_first_text2}</span>
                {subtitle_first_text3}
              </p>
              <div className={styles.price_list}>
                <div className={styles.price_list_item}>
                  <p> {subtitle_first_old_price} </p>
                  <p>{subtitle_first_price}</p>
                </div>
                <Box value={subtitle_first_value} />
              </div>
            </div>
          </div>
          <div className={styles.list}>
            <div className={styles.list_item}>
              <img draggable="false" className={styles.img} src={subtitle_second_img} alt="" />
            </div>
            <div className={styles.list_item}>
              <p>
                {subtitle_second_text1}{" "}
                <span className={styles.select}>{subtitle_second_text2}</span>
                {subtitle_second_text3}
              </p>
              <div className={styles.price_list}>
                <div className={styles.price_list_item}>
                  <p>{subtitle_second_old_price}</p>
                  <p>{subtitle_second_price}</p>
                </div>
                <Box value={subtitle_second_value} />
              </div>
            </div>
          </div>
        </div>
        <PriceBlock
          content={content}
          addNotification={addNotification}
          radioId1={radioId1}
          radioId2={radioId2}
          radioId3={radioId3}
          data={data}
          selected={selected}
        />
      </div>
    </div>
  );
};

export default AboutBlock;
