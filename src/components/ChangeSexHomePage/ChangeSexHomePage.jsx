import { memo, useState } from "react";
import styles from "./style.module.scss";
import { NavLink } from "react-router-dom";
import cn from "classnames";
import "./style.scss";

const ChangeSexHomePage = ({ setisSearch, isSearch }) => {
  const [value, setValue] = useState();

  const SubmitSearchName = (e) => {
    e.preventDefault();
    setisSearch(value);
  };
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
        </div>
        <form onSubmit={SubmitSearchName}>
          <div className={styles.input_section}>
            <input
              inputMode="search"
              className={styles.input}
              type="text"
              placeholder="Пошук"
              onChange={(e) => setValue(e.target.value)}
            />
            <button className={styles.submit} type="submit"></button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default memo(ChangeSexHomePage);
