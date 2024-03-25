import { NavLink, Route, Routes } from "react-router-dom";
import Cart from "./modals/cart";
import Assign from "./modals/assign";
import Politics from "./modals/politics";
import Review from "./modals/review";
import ReviewThankyou from "./modals/reviewThankyou";
import Thankyou from "./modals/thankyou";

import "reset-css";
import "./style/main.scss";
import Submit from "./modals/submit";
import Shirts from "./pages/Shirts";


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
        <NavLink className="link" to="/submit">
          SubmitForm
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
        <Route path="/submit" element={<Submit />} />
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
