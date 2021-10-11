import { setProductsToCart } from "../localStorageController";
import { updateCart } from "./actions";

export const addToCartThunk = (product) => (dispatch, getState) => {
  const { cart } = getState();
  const products = cart.filter(
    (currentProduct) => currentProduct.id !== product.id
  );

  products.push(product);

  setProductsToCart(products);

  dispatch(updateCart(products));
};

export const removeFromCartThunk = (id) => (dispatch, getState) => {
  const { cart } = getState();
  const products = cart.filter((product) => product.id !== id);

  setProductsToCart(products);

  dispatch(updateCart(products));
};
