"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/actions/cartAction";

const MyButton = ({ data}) => {
  const dispatch = useDispatch();
  const handleCart = () => {
    dispatch(addToCart(data));
  };
  return (
    <>
      <button
        onClick={handleCart}
        className="py-2 my-2 px-4 bg-red-300 text-black font-semibold"
      >
        Add to cart
      </button>
    </>
  );
};

export default MyButton;
