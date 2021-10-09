import { useEffect, useState } from "react";
import currencyFormatter from "../../utils/currencyFormatter";
import AddButton from "../AddButton";
import {
  Card,
  CardContent,
  DiscountPrice,
  EyeBrow,
  Grid,
  InStock,
  NormalPrice,
  Title,
} from "./styles";
import { CardActions, CardMedia, Divider } from "@mui/material";

const ProductCard = ({ product }) => {
  const INITIAL_QUANTITY = 0;

  const [quantity, setQuantity] = useState(INITIAL_QUANTITY);
  const [currentStock, setCurrentStock] = useState(product.stock);

  useEffect(() => {
    setCurrentStock(product.stock - quantity);

    // eslint-disable-next-line
  }, [quantity]);

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

          <NormalPrice variant="h3" display="block" align="right">
            {currencyFormatter(product.price)}
          </NormalPrice>

          <DiscountPrice variant="h3" display="block" align="right">
            {currencyFormatter(product.price - product.discount)}
          </DiscountPrice>

          <InStock variant="h3" display="block" align="right">
            {`Em estoque: ${currentStock} un.`}
          </InStock>
        </CardContent>

        <Divider />

        <CardActions>
          <AddButton
            product={product}
            quantity={quantity}
            setQuantity={setQuantity}
            initialQuantity={INITIAL_QUANTITY}
          />
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductCard;
