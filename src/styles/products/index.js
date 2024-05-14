import { styled, Grid, Box, Button, IconButton } from "@mui/material";
import { slideInBottom, slideInRight } from '../animation';
import { Colors } from "../theme";


export const ProductsTitle = styled(Box)({
  padding: '32px',
  display: 'flex', 
  justifyContent: 'center',
});


export const GridItem = styled(Grid)({
  display: 'flex', 
  flexDirection: 'column',
  alignItems: 'center',
});

export const Product = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  // border: '1px solid red',

  [theme.breakpoints.up('md')]: {
    position: 'relative',
  },
}));

export const ProductImageWrapper = styled(Box)(({width, theme}) => ({
  width: width || '100%',
  // height: '20rem',
  // padding: '10px',

  background: Colors.light_gray,

  // [theme.breakpoints.down('md')]: {
  //   width: '80%', 
  //   padding: '24px',
  // },
}));

export const ProductImage = styled('img')(({width, src, theme }) => ({
  src: `url(${src})`,

  width: '100%',
  height: '100%',
  objectFit: 'contain'

  // background: Colors.light_gray,

  // [theme.breakpoints.down('md')]: {
  //   // width: '80%', 
  //   // padding: '24px',
  // },
}));

export const ProductActionButton = styled(IconButton)(({theme}) => ({
  background: Colors.white,
  margin: 3,
  
  
}));

export const ProductFavoriteButton = styled(ProductActionButton)(({ isfavorite, theme }) => ({
  color: isfavorite ? Colors.primary : Colors.light,
  
 
  [theme.breakpoints.up('md')]: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
}));

export const ProductAddToCart = styled(Button, {
  shouldForwardProp: (prop) => prop !== "show"
})(({ show, theme }) => ({
    width: '120px',
    fontSize: '12px',
    
    background: Colors.secondary,
    opacity: 0.9,
    
    [theme.breakpoints.up('md')]: {
      width: '95%',
      padding: '10px 5px',

      position: 'absolute',    
      bottom: '2%',

      animation:
        show &&
        `${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
    },
}));

export const ProductAddToCartChat = styled(Button, {
  shouldForwardProp: (prop) => prop !== "show",
})(({theme}) => ({
  padding: "4px 4px",
  fontSize: "12px",

  [theme.breakpoints.up("md")]: {
    position: "absolute", 
  },   
  bottom: "2%",

  background: Colors.primary,
  opacity: 0.85,
}));

export const ProductMetaWrapper = styled(Box)(({theme}) => ({
  padding: 4,
  
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

export const ProductActionsWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "show",
})(({ show, theme }) => ({ 
  [theme.breakpoints.up('md')]: {
    display: show ? 'visible' : 'none',
    
    position: 'absolute',
    right: 0,
    top: '27%',
    
    animation: show && `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  },

  [theme.breakpoints.up('lg')]: {
    top: '20%'
  }

}));

export const ProductActionsWrapperChat = styled(Box)(({ show, theme }) => ({ 
  [theme.breakpoints.up('md')]: {
    display: show ? 'visible' : 'none',
    right: 0,
    top: '20%',
    animation: show && `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  }
}));