import { NavLink, Navigate } from "react-router-dom";
import styles from "./style.module.scss";
import cn from "classnames";
import { useState } from "react";

const FooterBlock = ({
  setIsVisiblePolitics,
  setIsVisibleAssign,
  isVisibleAssign,
  isVisiblePolitics,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.section}>
        <p
          onClick={() => setIsVisiblePolitics(true)}
          className={cn(styles.link, isVisiblePolitics && styles.active)}
        >
          Політика конфеденційності
        </p>
        <NavLink to="/about_us" className={styles.link}>
          ПРо нас
        </NavLink>
        <p
          onClick={() => setIsVisibleAssign(true)}
          className={cn(styles.link, isVisibleAssign && styles.active)}
        >
          Угода користувача
        </p>
      </div>
    </div>
  );
};

export default FooterBlock;
