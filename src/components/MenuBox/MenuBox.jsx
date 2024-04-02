import "./style.scss";
import { NavLink } from "react-router-dom";
import { MENU } from "../../datas/data";
import cn from "classnames";
import { memo, useState } from "react";

const MenuBox = ({ isMenu, setIsMenu }) => {
  const menu = MENU;
  const [isCategory, setIsCategory] = useState("category");
  const [isSubCategory, setIsSubCategory] = useState(false);

  // const handleToCategory = () => {
  //   setIsCategory("category");
  // };
  // const handleToSubCategory = () => {
  //   setIsSubCategory(false);
  // };
  return (
    <div className="wrapper">
      <nav className={cn("section", isMenu && "appear")}>
        {/* <div
          onClick={handleToCategory}
          className={cn(
            "back_category",
            isCategory !== "category" && isSubCategory === false && "appear"
          )}
        >
          Назад
        </div>
        <div
          onClick={handleToSubCategory}
          className={cn("back_category", isSubCategory && "appear")}
        >
          Назад
        </div> */}
        {menu.map((element) => (
          <div key={element.title}>
            <div
              // isCategory === "category" &&
              className={cn(
                "category",
                "appear",
                isCategory === element.title && "active"
              )}
              onClick={() => {
                setIsCategory(element.title);
                setIsSubCategory(false);
              }}
            >
              {element.title}
            </div>
            <div>
              {element.category.map((el) => (
                <div key={el.title}>
                  <div
                    className={cn(
                      "submenu",
                      isCategory === element.title &&
                        // isSubCategory === false &&
                        "appear"
                    )}
                    key={el.title}
                  >
                    {el.element ? (
                      <NavLink className="products" to={el.path}>{el.title}</NavLink>
                    ) : (
                      <div
                        className={cn(
                          "subcategory",
                          isSubCategory === el.title && "active"
                        )}
                        onClick={() => setIsSubCategory(el.title)}
                      >
                        {el.title}
                      </div>
                    )}
                  </div>
                  {el.products ? (
                    el.products.map((e) => (
                      <div
                        className={cn(
                          "submenu",
                          isSubCategory === el.title && "appear"
                        )}
                        key={e.title}
                      >
                        <NavLink to={e.path} className="products">
                          {e.title}
                        </NavLink>
                      </div>
                    ))
                  ) : (
                    <p> s</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default memo(MenuBox);
