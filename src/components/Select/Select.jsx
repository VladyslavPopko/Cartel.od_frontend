import React, { memo, useState } from "react";
import styles from "./style.module.scss";
import cn from "classnames";

const Select = ({ selected, setSelected }) => {
  const options = [
    { id: 1, value: "S" },
    { id: 2, value: "M" },
    { id: 3, value: "L" },
    { id: 4, value: "XL" },
  ];
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
          {options.map((option) => {
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
