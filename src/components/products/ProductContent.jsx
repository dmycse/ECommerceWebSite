import { Typography } from "@mui/material";
import { ProductMetaWrapper } from "../../styles/products";

function ProductContent({ product, matches }) {
  return (
    <ProductMetaWrapper>
      <Typography 
        variant={matches ? "h6" : "h5"}
        textTransform="capitalize"  
        lineHeight={2}
      >
        {product.name}
      </Typography>
      <Typography variant={matches ? "caption" : "subtitle2"}>
        &#8364; {product.price}
      </Typography>
    </ProductMetaWrapper>
  );
}

export default ProductContent;