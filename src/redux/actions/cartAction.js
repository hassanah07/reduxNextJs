// // redux/actions/cartActions.js
export const addToCart = (product) => ({
  type: "ADD_TO_CART",
  payload: product
});
// redux/actions/cartActions.js

// Action Types
export const LOAD_CART_FROM_LOCAL_STORAGE = "LOAD_CART_FROM_LOCAL_STORAGE";

// Action Creators
export const loadCartFromLocalStorage = () => {
  const items = JSON.parse(localStorage.getItem("cartItems")) || [];
  return {
    type: LOAD_CART_FROM_LOCAL_STORAGE,
    payload: items
  };
};
