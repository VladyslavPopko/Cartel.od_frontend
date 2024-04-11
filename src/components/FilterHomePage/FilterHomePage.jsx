import styles from "./style.module.scss";
import filterImg from "../../img/HomePage/filter.svg";
import sortImg from "../../img/HomePage/sort.svg";
import { memo, useState } from "react";
import cn from "classnames";
import open from "../../img/HomePage/open.png";

const FilterHomePage = ({
  menu,
  isValueFilter,
  setIsValueFilter,
  isValueSort,
  setIsValueSort,
}) => {
  const [isActiveFilter, setIsActiveFilter] = useState(false); // Нажата ли фильтр
  const [isActiveSort, setIsActiveSort] = useState(false); // Нажата ли сортировка

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
      <div className={styles.section_content}>
        <div className={styles.header_section}>
          {isValueFilter ? (
            <h2
              onClick={handleFilter}
              className={cn(
                styles.filter_title,
                isActiveFilter && styles.active
              )}
            >
              {isValueFilter}
              <img className={styles.open_img} src={open} alt="" />
            </h2>
          ) : (
            <h2
              onClick={handleFilter}
              className={cn(
                styles.filter_title,
                isActiveFilter && styles.active
              )}
            >
              Всі товари
              <img className={styles.open_img} src={open} alt="" />
            </h2>
          )}

          <div className={cn(styles.title_section)}>
            <div className={styles.title_list} onClick={handleFilter}>
              <h2 className={cn(styles.title, isActiveFilter && styles.active)}>
                ФІЛЬТР
              </h2>
              <img
                className={cn(
                  styles.title_img,
                  isActiveFilter && styles.active
                )}
                src={filterImg}
                alt=""
              />
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
              <h2 className={cn(styles.title, isActiveSort && styles.active)}>
                сортування
              </h2>
              <img
                className={cn(styles.title_img, isActiveSort && styles.active)}
                src={sortImg}
                alt=""
              />
            </div>
          </div>
        </div>

        <div
          className={cn(styles.main_filter, isActiveFilter && styles.active)}
        >
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
                      onClick={() => (
                        setIsValueFilter(category.title),
                        setIsActiveFilter(false),
                        setIsActiveSort(false)
                      )}
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
                isValueSort === "За новизною" && styles.active
              )}
              onClick={() => (
                setIsValueSort("За новизною"),
                setIsActiveFilter(false),
                setIsActiveSort(false)
              )}
            >
              За новизною
            </p>
            <p
              className={cn(
                styles.main_sort_text,
                isValueSort === "За спаданням ціни" && styles.active
              )}
              onClick={() => (
                setIsValueSort("За спаданням ціни"),
                setIsActiveFilter(false),
                setIsActiveSort(false)
              )}
            >
              За спаданням ціни
            </p>
            <p
              className={cn(
                styles.main_sort_text,
                isValueSort === "За зростанням ціни" && styles.active
              )}
              onClick={() => (
                setIsValueSort("За зростанням ціни"),
                setIsActiveFilter(false),
                setIsActiveSort(false)
              )}
            >
              За зростанням ціни
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(FilterHomePage);
