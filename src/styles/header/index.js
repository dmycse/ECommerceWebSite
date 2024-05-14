import { styled, Box, Stack, Typography, List, ListItemIcon } from "@mui/material";
import "@fontsource/montez";

import { Colors } from "../theme";

// container
export const HeaderContainer = styled(Stack)({
  marginTop: 4, 
  padding: '2px 8px', 
  // display: 'flex', 
  justifyContent: 'center',
  alignItems: 'center',
});

// header
export const HeaderTitle = styled(Typography)(({matches, theme}) => ({
  padding: '4px',
  flexGrow: 1,

  fontSize: '4em',
  fontFamily: '"Montez", "cursive"',
  
  color: Colors.secondary,

  [theme.breakpoints.down("md")]: {
    textAlign: 'center',
    }
  // textAlign can be done like that
  // textAlign: matches && 'center',
  
  // "&:hover": {
  //   animation: `${textPopUpTop} 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both`,
  // },
}));

export const HeaderList = styled(List)(({ type }) => ({
  flexGrow: 3,
  display: type === 'row' ? 'flex' : 'block',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const HeaderItemIcon = styled(ListItemIcon)(({matches}) => ({
  display: 'flex', 
  justifyContent: 'center',
  color: matches && Colors.secondary
}));

// export const HeaderActionsIconsContainerMobile = styled(Box)({
//   width: '100%',

//   // display: 'flex',
//   // alignItems: 'center',
  
//   position: 'fixed',
//   bottom: 0,
//   left: 0,
//   zIndex: 99,
  
//   background: Colors.shaft,
//   borderTop: `1px solid ${Colors.border}`
// });

// export const HeaderActionsIconsContainerDesktop = styled(Box)({
//   flexGrow: 0,
// });

export const HeaderActionsIconsContainer = styled(Box)(({theme}) => ({
  flexGrow: 0,
  [theme.breakpoints.down("md")]: {
    width: '100%',

    // display: 'flex',
    // alignItems: 'center',
    
    position: 'fixed',
    bottom: 0,
    left: 0,
    zIndex: 99,
    
    background: Colors.shaft,
    borderTop: `1px solid ${Colors.border}`
  }
}));