import { useTheme } from "@emotion/react";
import { Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { products } from "../../data";
import { GridItem, ProductsTitle } from "../../styles/products";
import ProductItem from "./ProductItem";
import ProductItemDesktop from "./ProductItemDesktop";


function Products() {

  let theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  let renderProducts = products.map(product => (
    <GridItem 
      item
      xs={2}
      sm={4}
      md={4} 
      key={product.id}
    >
      {matches 
        ? <ProductItem product={product} matches={matches} /> 
        : <ProductItemDesktop product={product} matches={matches} />
      }
    </GridItem>
  ))

  return (
    <Container>
      <ProductsTitle>
        <Typography variant='h4'>
          Our Products
        </Typography>
      </ProductsTitle>
      <Grid 
        container
        spacing={{xs: 2, md: 3}}
        columns={{xs: 4, sm: 8, md: 12 }} 
        sx={{
          margin: '20px 4px 10px',
          justifyContent: 'center'
        }}
      >
        {renderProducts}
      </Grid>
    </Container>
  )
}

export default Products;