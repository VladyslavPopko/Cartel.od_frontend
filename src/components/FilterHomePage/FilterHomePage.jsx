import styles from "./style.module.scss";
import filterImg from "../../img/HomePage/filter.png";
import sortImg from "../../img/HomePage/sort.png";
import { useState } from "react";
import cn from "classnames";

const FilterHomePage = ({
  menu,
  isValueFilter,
  setIsValueFilter,
  isValueSort,
  setIsValueSort,
}) => {
  const [isActive, setIsActive] = useState(false); //Нажата ли по названию
  const [isActiveFilter, setIsActiveFilter] = useState(false); // Нажата ли фильтр
  const [isActiveSort, setIsActiveSort] = useState(false); // Нажата ли сортировка

  const handleActiveMenu = () => {
    setIsActive(!isActive);
    setIsActiveSort(false);
    setIsActiveFilter(false);
  };
  const handleFilter = () => {
    setIsActiveFilter(!isActiveFilter);
    setIsActiveSort(false);
  };

  const handleSort = () => {
    setIsActiveSort(!isActiveSort);
    setIsActiveFilter(false);
  };

  return (
    <div className={styles.section}>
      {isValueFilter ? (
        <h2
          onClick={handleActiveMenu}
          className={cn(styles.filter_title, isActive && styles.active)}
        >
          {isValueFilter} {isValueSort && <span>({isValueSort})</span>}
        </h2>
      ) : (
        <h2
          onClick={handleActiveMenu}
          className={cn(styles.filter_title, isActive && styles.active)}
        >
          Всі товари {isValueSort && <span>({isValueSort})</span>}
        </h2>
      )}
      <div className={cn(styles.title_section, isActive && styles.active)}>
        <div className={styles.title_list} onClick={handleFilter}>
          <img
            className={cn(styles.title_img, isActiveFilter && styles.active)}
            src={filterImg}
            alt=""
          />
          <h2 className={cn(styles.title, isActiveFilter && styles.active)}>
            Фильтр
          </h2>
        </div>
        {isValueFilter && (
          <p
            onClick={() => setIsValueFilter(null)}
            className={styles.filter_reset}
          >
            СбросФильтр
          </p>
        )}
        <div className={styles.title_list} onClick={handleSort}>
          <img
            className={cn(styles.title_img, isActiveSort && styles.active)}
            src={sortImg}
            alt=""
          />
          <h2 className={cn(styles.title, isActiveSort && styles.active)}>
            Сортировка
          </h2>
        </div>
      </div>
      <div className={cn(styles.main_filter, isActiveFilter && styles.active)}>
        <div className={styles.main_filter_content}>
          {menu.map((title, titleIndex) => (
            <div className={styles.collumn_menu} key={titleIndex}>
              <p
                className={cn(
                  styles.menu_title,
                  isValueFilter === title.title && styles.active
                )}
              >
                {title.title}
              </p>
              {title.category.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <p
                    onClick={() => setIsValueFilter(category.title)}
                    className={cn(
                      styles.category_title,
                      isValueFilter === category.title && styles.active
                    )}
                  >
                    {category.title}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className={cn(styles.main_sort, isActiveSort && styles.active)}>
        <div className={styles.main_sort_content}>
          <p
            className={cn(
              styles.main_sort_text,
              isValueSort === "По убыванию цены" && styles.active
            )}
            onClick={() => setIsValueSort("По убыванию цены")}
          >
            По убыванию цены
          </p>
          <p
            className={cn(
              styles.main_sort_text,
              isValueSort === "По возрастанию цены" && styles.active
            )}
            onClick={() => setIsValueSort("По возрастанию цены")}
          >
            По возрастанию цены
          </p>
        </div>
      </div>
    </div>
  );
};

export default FilterHomePage;
