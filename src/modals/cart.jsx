import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQty,
  deleteFromCart,
  incrementQty,
} from "../redux/slices/cartSlice";
import Cartblock from "../blocks/CartBlock/Cartblock";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const finalPrice = useSelector((state) => state.cart.finalPrice);
  const qty = useSelector((state) => state.cart.qty);

  return (
    <div>
      <Cartblock />
    </div>
  );
};

export default Cart;
