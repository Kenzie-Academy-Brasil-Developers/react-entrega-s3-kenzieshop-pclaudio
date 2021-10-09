import { useEffect, useState } from "react";
import currencyFormatter from "../../utils/currencyFormatter";
import { IconButton } from "@mui/material";
import { Add, AddShoppingCart, Remove } from "@mui/icons-material";
import { Button, ButtonContainer, ButtonController } from "./styles";

const AddButton = ({
  product: { price, discount, stock },
  quantity,
  setQuantity,
  initialQuantity,
}) => {
  const [total, setTotal] = useState(quantity * price);

  const [
    isDecreaseQuantityButtonDisabled,
    setIsDecreaseQuantityButtonDisabled,
  ] = useState(true);

  const [
    isIncreaseQuantityButtonDisabled,
    setIsIncreaseQuantityButtonDisabled,
  ] = useState(false);

  const decreaseQuantity = () => {
    setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  useEffect(() => {
    setTotal(quantity * (price - discount));
    setIsDecreaseQuantityButtonDisabled(quantity === initialQuantity);
    setIsIncreaseQuantityButtonDisabled(quantity === stock);

    // eslint-disable-next-line
  }, [quantity]);

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
        // disabled={isAddShoppingCartButtonDisabled}
        // onClick={addProductToShoppingCart}
      >
        <AddShoppingCart />
        <span>{currencyFormatter(total)}</span>
      </Button>
    </ButtonContainer>
  );
};

export default AddButton;
