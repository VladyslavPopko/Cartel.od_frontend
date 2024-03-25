import { Route, Routes } from "react-router-dom";

import "reset-css";
import "./style/main.scss";
import Shirts from "./pages/Shirts";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Shirts />} />
      </Routes>
    </>
  );
};

export default App;
