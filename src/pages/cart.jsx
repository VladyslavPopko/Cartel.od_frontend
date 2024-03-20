import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementQty, deleteFromCart, incrementQty } from "../redux/slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const finalPrice = useSelector((state) => state.cart.finalPrice);
  const qty = useSelector((state) => state.cart.qty);
  

  return (
    <div>
      <p>Итоговая цена: {finalPrice}</p>
      <p>Всего товаров: {qty}</p>
      <ul>
        {cart.map((el) => (
          <div>
            <li>
              ID: {el.id} Color: {el.color} price: {el.price} qty: {el.qty}
            </li>
            <button onClick={() => dispatch(incrementQty(el))}>+</button>
            <button onClick={() => dispatch(decrementQty(el))}>-</button>
            <button onClick={() => dispatch(deleteFromCart(el))}>
              DELETE FROM CART
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
