import { getProductsFromCart } from "../localStorageController";
import { UPDATE_CART } from "./actionsTypes";

const initialState = getProductsFromCart();

const cartReducer = (state = initialState, { type, products }) => {
  switch (type) {
    case UPDATE_CART:
      return products;

    default:
      return state;
  }
};

export default cartReducer;
