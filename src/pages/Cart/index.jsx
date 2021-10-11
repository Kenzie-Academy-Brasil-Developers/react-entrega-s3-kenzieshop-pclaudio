import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import currencyFormatter from "../../utils/currencyFormatter";
import { Paper, Total, Typography } from "./styles";
import { Grid } from "@mui/material";
import ProductCard from "../../components/ProductCard";

const getTotalCart = (cart) =>
  cart.reduce((total, currentProduct) => total + currentProduct.total, 0);

const Cart = () => {
  const { cart } = useSelector((state) => state);

  const [totalCart, setTotalCart] = useState(getTotalCart(cart));

  useEffect(() => {
    setTotalCart(getTotalCart(cart));
  }, [cart]);

  return (
    <>
      {cart.length === 0 ? (
        <Typography variant="h2" display="block" align="center">
          Carrinho vazio.
        </Typography>
      ) : (
        <>
          <Grid container spacing={2}>
            {cart.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </Grid>

          <Paper>
            <Total variant="h2" display="block" align="right">
              {`Total: ${currencyFormatter(totalCart)}`}
            </Total>
          </Paper>
        </>
      )}
    </>
  );
};

export default Cart;
