"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LOAD_CART_FROM_LOCAL_STORAGE } from "@/redux/actions/cartAction";
import Link from "next/link";

const page = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      dispatch({
        type: "LOAD_CART_FROM_LOCAL_STORAGE",
        payload: JSON.parse(cartItems)
      });
    }
  }, [dispatch]);
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item, ind) => (
          <li key={ind}>
            {ind + 1} - {item.id} - {item.price} - {item.name} - Qty.
            {item.qty}
          </li>
        ))}
      </ul>
      <Link href="/" className="underline text-indigo-400">
        Home
      </Link>
    </div>
  );
};

export default page;
