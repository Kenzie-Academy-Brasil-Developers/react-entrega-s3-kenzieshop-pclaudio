const KENZIESHOP_CART = "@KenzieShop/Cart";

export const getProductsFromCart = () =>
  JSON.parse(localStorage.getItem(KENZIESHOP_CART)) || [];

export const setProductsToCart = (products) => {
  localStorage.setItem(KENZIESHOP_CART, JSON.stringify(products));
};

export const getProductQuantity = (id) => {
  const productsFromCart = getProductsFromCart();
  const product = productsFromCart.find((product) => product.id === id);

  return product?.quantity || 0;
};
