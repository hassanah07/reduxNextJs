// redux/reducers/cartReducer.js
const initialState = {
  items: [] // This will be populated from localStorage when the app initializes on the client-side
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        // Product exists in cart, increment quantity
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item
          )
        };
      } else {
        // Product does not exist in cart, add new item with qty = 1
        return {
          ...state,
          items: [...state.items, { ...action.payload, qty: 1 }]
        };
      }
    case "LOAD_CART_FROM_LOCAL_STORAGE":
      // Load cart data from localStorage
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
};

export default cartReducer;
