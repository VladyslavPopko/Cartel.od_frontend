import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import "reset-css";
import "./style/main.scss";
import LoadingBox from "./components/LoadingBox/LoadingBox";

const ShirtsLazy = lazy(() => import ("./pages/Shirts"));

const App = () => {
  return (
    <>
    <Suspense fallback={
      <LoadingBox type="bars" color="red" />
    } >
      <Routes>
        <Route path="/" element={<ShirtsLazy />} />
      </Routes>
      </Suspense>
    </>
  );
};

export default App;
