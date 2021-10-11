import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import currencyFormatter from "../../utils/currencyFormatter";
import { addToCartThunk } from "../../store/modules/cart/thunks";
import { IconButton } from "@mui/material";
import { Add, AddShoppingCart, Remove } from "@mui/icons-material";
import { Button, ButtonContainer, ButtonController } from "./styles";

const AddButton = ({ product, quantity, setQuantity }) => {
  const INITIAL_QUANTITY = 0;

  const [total, setTotal] = useState(quantity * product.price);

  const [
    isDecreaseQuantityButtonDisabled,
    setIsDecreaseQuantityButtonDisabled,
  ] = useState(true);

  const [
    isIncreaseQuantityButtonDisabled,
    setIsIncreaseQuantityButtonDisabled,
  ] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setTotal(quantity * (product.price - product.discount));
    setIsDecreaseQuantityButtonDisabled(quantity === INITIAL_QUANTITY);
    setIsIncreaseQuantityButtonDisabled(quantity === product.stock);

    // eslint-disable-next-line
  }, [quantity]);

  const decreaseQuantity = () => {
    setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const addProductToCart = () => {
    const updatedProduct = {
      ...product,
      quantity,
      total: (product.price - product.discount) * quantity,
    };

    dispatch(addToCartThunk(updatedProduct));
  };

  return (
    <ButtonContainer>
      <ButtonController>
        <IconButton
          color="error"
          disabled={isDecreaseQuantityButtonDisabled}
          onClick={decreaseQuantity}
        >
          <Remove />
        </IconButton>

        <span>{quantity}</span>

        <IconButton
          color="error"
          disabled={isIncreaseQuantityButtonDisabled}
          onClick={increaseQuantity}
        >
          <Add />
        </IconButton>
      </ButtonController>

      <Button
        variant="contained"
        color="error"
        disabled={isDecreaseQuantityButtonDisabled}
        fullWidth
        onClick={addProductToCart}
      >
        <AddShoppingCart />
        <span>{currencyFormatter(total)}</span>
      </Button>
    </ButtonContainer>
  );
};

export default AddButton;
