import { useState } from "react";

import ProductContent from "./ProductContent";
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavoriteButton, ProductImage, ProductImageWrapper } from "../../styles/products";

import { Stack } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FitScreenIcon from '@mui/icons-material/FitScreen';


function ProductItemDesktop({product, matches}) {

  let [showOptions, setShowOptions] = useState(false);

  let handleMouseEnter = () => {
    setShowOptions(true);
  };

  let handleMouseLeave = () => {
    setShowOptions(false);
  };
  
  return (
    <>
      <Product 
        onMouseEnter = {handleMouseEnter}
        onMouseLeave = {handleMouseLeave}
      >
        <ProductImageWrapper>
          <ProductImage src={product.image} />
          <ProductFavoriteButton isfavorite={0}>
              <FavoriteIcon />
          </ProductFavoriteButton>
        </ProductImageWrapper>
        {
            showOptions && (
              <ProductAddToCart show={showOptions} variant='contained'>
                Add to cart
              </ProductAddToCart>
            )
          }
        <ProductActionsWrapper show={showOptions}>
          <Stack>
            <ProductActionButton>
              <ShareIcon color='primary' />
            </ProductActionButton>
            <ProductActionButton>
              <FitScreenIcon color='primary' />
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      </Product>
      <ProductContent product={product} matches={matches} />
    </>
  )
}

export default ProductItemDesktop;