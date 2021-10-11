import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { removeFromCartThunk } from "../../store/modules/cart/thunks";
import currencyFormatter from "../../utils/currencyFormatter";
import { getProductQuantity } from "../../store/modules/localStorageController";
import AddButton from "../AddButton";
import {
  Card,
  CardContent,
  DiscountPrice,
  EyeBrow,
  Grid,
  InStock,
  NormalPrice,
  Qauntity,
  Title,
} from "./styles";
import { Button, CardActions, CardMedia, Divider } from "@mui/material";

const ProductCard = ({ product }) => {
  const history = useHistory();

  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(getProductQuantity(product.id));
  const [currentStock, setCurrentStock] = useState(product.stock);
  const [showDisplay] = useState(history.location.pathname === "/");

  useEffect(() => {
    setCurrentStock(product.stock - quantity);

    // eslint-disable-next-line
  }, [quantity]);

  const removeProductFromCart = () => {
    dispatch(removeFromCartThunk(product.id));
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardMedia
          component="img"
          image={`/assets/images/${product.image}`}
          alt={product.name}
        />

        <Divider />

        <CardContent>
          <EyeBrow variant="overline" display="block" gutterBottom>
            POP!
          </EyeBrow>

          <Title variant="h2" display="block">
            {product.name}
          </Title>

          {showDisplay && (
            <NormalPrice variant="h3" display="block" align="right">
              {currencyFormatter(product.price)}
            </NormalPrice>
          )}

          {showDisplay ? (
            <DiscountPrice variant="h3" display="block" align="right">
              {currencyFormatter(product.price - product.discount)}
            </DiscountPrice>
          ) : (
            <>
              <DiscountPrice variant="h3" display="inline" align="right">
                {currencyFormatter(product.total)}
              </DiscountPrice>
            </>
          )}

          {showDisplay ? (
            <InStock variant="h3" display="block" align="right">
              {`Em estoque: ${currentStock} un.`}
            </InStock>
          ) : (
            <Qauntity variant="h3" display="inline" align="right">
              {quantity === 1
                ? `(${quantity} unidade)`
                : `(${quantity} unidades)`}
            </Qauntity>
          )}
        </CardContent>

        <Divider />

        <CardActions>
          {showDisplay ? (
            <AddButton
              product={product}
              quantity={quantity}
              setQuantity={setQuantity}
            />
          ) : (
            <Button
              variant="contained"
              color="error"
              fullWidth
              onClick={removeProductFromCart}
            >
              Remover
            </Button>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductCard;
