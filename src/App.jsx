import { NavLink, Route, Routes } from "react-router-dom";
import Shirts from "./pages/main";
import Cart from "./pages/cart";
import Assign from "./pages/assign";
import Politics from "./pages/politics";
import Review from "./pages/review";
import ReviewThankyou from "./pages/reviewThankyou";
import Thankyou from "./pages/thankyou";

import "reset-css";
import "./style/main.scss";

const App = () => {
  return (
    <>
      <nav>
        <NavLink className="link" to="/">
          Main page
        </NavLink>
        <NavLink className="link" to="/cart">
          Cart
        </NavLink>
        <NavLink className="link" to="/assign">
          Assign
        </NavLink>
        <NavLink className="link" to="/politics">
          Politics
        </NavLink>
        <NavLink className="link" to="/review">
          Review
        </NavLink>
        <NavLink className="link" to="/reviewThankyou">
          ReviewThankYou
        </NavLink>
        <NavLink className="link" to="/ThankYou">
          ThankYou
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Shirts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/assign" element={<Assign />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="/review" element={<Review />} />
        <Route path="/reviewThankyou" element={<ReviewThankyou />} />
        <Route path="/ThankYou" element={<Thankyou />} />
      </Routes>
    </>
  );
};

export default App;
