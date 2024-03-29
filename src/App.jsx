import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import "reset-css";
import "./style/main.scss";
import LoadingBox from "./components/LoadingBox/LoadingBox";
import { MENU } from "./datas/data";

const HomePageLazy = lazy(() => import("./pages/HomePage"));

const App = () => {
  const routes = MENU;
  return (
    <>
      <Suspense fallback={<LoadingBox type="bars" color="red" />}>
        <Routes>
          {routes.map((el) => (
            <>
              <Route key={el.path} path={el.path} element={el.element} />
              {el.submenu.map((e) => (
                <Route key={e.path} path={e.path} element={e.element} />
              ))}
            </>
          ))}
          <Route path="*" element={<HomePageLazy />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
