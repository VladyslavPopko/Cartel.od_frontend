import { memo, useState } from "react";
import styles from "./style.module.scss";
import { NavLink, Navigate } from "react-router-dom";
import cn from "classnames";
import "./style.scss";
import { useDispatch } from "react-redux";
import { changeSearch } from "../../redux/slices/searchSlice";

const ChangeSexHomePage_WithoutSearch = ({}) => {
  return (
    <div className={styles.section}>
      <div className={styles.section_content}>
        <div className={styles.list}>
          <NavLink className={cn(styles.title)} to="/">
            Чоловікам
          </NavLink>
          <NavLink className={cn(styles.title)} to="/women">
            жінкам
          </NavLink>
          <NavLink className={cn(styles.title)} to="/military">
            Військовим
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default memo(ChangeSexHomePage_WithoutSearch);
