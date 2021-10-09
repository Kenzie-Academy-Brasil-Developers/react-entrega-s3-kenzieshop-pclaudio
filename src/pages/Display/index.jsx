import productsDB from "../../services/db";
import { Grid } from "@mui/material";
import ProductCard from "../../components/ProductCard";

const Display = () => {
  const products = productsDB;

  return (
    <Grid container spacing={2}>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </Grid>
  );
};

export default Display;
