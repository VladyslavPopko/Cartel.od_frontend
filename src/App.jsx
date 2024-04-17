import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import "reset-css";
import "./style/main.scss";
import LoadingBox from "./components/LoadingBox/LoadingBox";
import {  ROUTES } from "./datas/data";
import HomePageBanner from "./components/HomePageBanner/HomePageBanner";
import HomePage from "./pages/HomePage";
import { DATA_MEN, MENU_MEN } from "./datas/data_men";

const HomePageLazy = lazy(() => import("./pages/HomePage"));

const App = () => {
  const routes = ROUTES;
  return (
    <>
      <HomePageBanner />
      <Suspense fallback={<LoadingBox type="bars" color="red" />}>
        <Routes>
          {routes.map((element) => (
            <>
              <Route
                key={element.path}
                path={element.path}
                element={element.element}
              />
              {element.category.map((el) => (
                <>
                  <Route key={el.path} path={el.path} element={el.element} />

                  {el.products.map((e) => (
                    <Route key={e.path} path={e.path} element={e.element} />
                  ))}
                </>
              ))}
            </>
          ))}
          <Route
            path="*"
            element={<HomePageLazy data={DATA_MEN} menu={MENU_MEN} />}
          />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
