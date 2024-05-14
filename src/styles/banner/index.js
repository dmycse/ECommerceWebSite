import { styled, Box, Typography } from "@mui/material";
import { Colors } from "../theme";


export const BannerContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  padding: "0px 0px",
  
  background: Colors.dove_gray,

  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
  // backgroundImage: `url(/images/banner/banner.png)`,
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "center",
}));

export const BannerImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  // backgroundImage: `url(${src})`,
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "center",
  width: "500px",
  
  [theme.breakpoints.down("md")]: {
    width: "280px",
    height: "280px"
  },
  [theme.breakpoints.down("sm")]: {
    width: "300px",
    height: "300px",
  },
}));

export const BannerContent = styled(Box)(() => ({
  maxWidth: 420,
  padding: '30px',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  // alignItems: "center"
}));

export const BannerTitle = styled(Typography)(({ theme }) => ({
  marginBottom: '20px',

  lineHeight: 1.5,
  
  fontSize: '4.5rem',
  [theme.breakpoints.down('lg')]: {
    fontSize: '3.9rem',    
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '2.8rem',    
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.65rem',    
  }
}));

export const BannerDescription = styled(Typography)(({ theme }) => ({
  marginBottom: '3em',

  lineHeight: 1.25,
  letterSpacing: 1.25,

  [theme.breakpoints.down("md")]: {
    marginBottom: '1.5em',

    lineHeight: 1.15,
    letterSpacing: 1.15,
  },
}));

export const BannerShopButton = styled(Button, {
  // Configure which props should be forwarded on DOM
  shouldForwardProp: (prop) => prop !== "color",
  name: "MyShopButton",
  slot: "root",
  // We are specifying here how the styleOverrides are being applied based on props
  overridesResolver: (props, styles) => [
    styles.root,
    props.color === "primary" && styles.primary,
    props.color === "secondary" && styles.secondary,
  ],
})(({ theme }) => ({
  padding: "20px 0px",
  color: Colors.white,
  fontWeight: "bold",
  fontSize: "16px",
  [theme.breakpoints.down("sm")]: {
    padding: "10px 0px",
    fontSize: "14px",
  },
}));
