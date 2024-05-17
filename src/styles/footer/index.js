import { styled, Typography, TextField, Box } from "@mui/material";
import { Colors } from "../theme";

// export const FooterWrapper = styled(Box)(({ theme }) => ({
//   padding: '0px 12px',
  
//   [theme.breakpoints.down('xs')]: {
//     padding: '4px',
//     fontSize: '12px',
//   },

//   [theme.breakpoints.down('md')]: {
//     padding: '10px',
//     fontSize: '14px',
//   },
  
//   background: Colors.shaft,
//   color: Colors.white,
// }));

export const FooterTitle = styled(Typography)(() => ({
  textTransform: "uppercase",
  marginBottom: "1em"
  
}));

export const SubscribeTf = styled(TextField)(() => ({
  ".MuiInputLabel-root": {
    color: Colors.secondary,
  },

  ".MuiInput-root::before": {
    borderBottom: `1px solid ${Colors.secondary}`,
  },
}));