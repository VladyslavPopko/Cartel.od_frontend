import "./style.scss";
import { NavLink } from "react-router-dom";
import { MENU } from "../../datas/data";
import cn from "classnames";
import { memo, useState } from "react";

const MenuBox = ({ isMenu, setIsMenu }) => {
  const menu = MENU;
  const [isActive, setActive] = useState(false);
  return (
    <div className="wrapper">
      <nav className={cn("section", isMenu && "active")}>
        {menu.map((el) => (
          <div key={el.title}>
            <div
              className={cn("category", isActive === el.title && "active")}
              onMouseOver={() => setActive(el.title)}
            >
              {el.title}
            </div>
            <div>
              {el.submenu.map((e) => (
                <div
                  className={cn("submenu", isActive === el.title && "active")}
                  key={e.title}
                >
                  <NavLink className="subcategory" to={e.path}>
                    {e.title}
                  </NavLink>
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
