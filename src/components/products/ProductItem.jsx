import ProductContent from "./ProductContent";
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavoriteButton, ProductImage, ProductImageWrapper } from "../../styles/products";
import { Stack } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FitScreenIcon from '@mui/icons-material/FitScreen';


function ProductItem({product, matches}) {
  
  return (
    <>
      <Product>
        <ProductImageWrapper>
          <ProductImage src={product.image} />
        </ProductImageWrapper>
        <ProductContent product={product} matches={ matches} />
        <ProductActionsWrapper>
          <Stack direction='row'>
            <ProductFavoriteButton isfavorite={0}>
              <FavoriteIcon />
            </ProductFavoriteButton>
            <ProductActionButton>
              <ShareIcon color='primary' />
            </ProductActionButton>
            <ProductActionButton>
              <FitScreenIcon color='primary' />
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      </Product>
      <ProductAddToCart variant='contained'>
        Add to cart
      </ProductAddToCart>
    </>
  )
}

export default ProductItem;