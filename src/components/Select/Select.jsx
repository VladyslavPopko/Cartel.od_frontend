import React, { memo, useState } from "react";
import styles from "./style.module.scss";
import cn from "classnames";

const Select = ({ selected, setSelected, sizeArray }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={cn(styles.select)}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={cn(styles.select_main, styles.text_center)}
      >
        {selected ?? "Оберіть розмір"}
      </div>
      {isOpen && (
        <ul className={styles.select_list}>
          {sizeArray.map((option) => {
            return (
              <li
                className={styles.select_list_item}
                key={option.id}
                onClick={() => {
                  setSelected("Розмір: " + option.value);
                  setIsOpen(!isOpen);
                }}
              >
                {option.value}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default memo(Select);
