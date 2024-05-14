import { styled, Box, Stack, Typography } from "@mui/material";
import { Colors } from "../theme";


export const PromotionsContainer = styled(Box)(({ theme }) => ({
  padding: '20px 0px 20px',
  [theme.breakpoints.up('md')]: {
    padding: '40px 0px',
  },

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  
  // overflow: "hidden",
  background: Colors.secondary,
}));

export const MessageContainer = styled(Stack)({
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
});

export const MessageText = styled(Typography)(({ theme }) => ({
  padding: '0px 5px',
  
  fontFamily: '"Montez", "cursive"',

  fontSize: "1.8rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },

  color: Colors.white,
}));