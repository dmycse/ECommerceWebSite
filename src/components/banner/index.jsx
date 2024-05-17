import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTitle } from "../../styles/banner";


function Banner() {

  let theme = useTheme();
  let matches = useMediaQuery(theme.breakpoints.down('md'));


  return (
    <BannerContainer component="section">
      <BannerImage src="/images/banner/banner.png" />
      <BannerContent>
        <Typography variant="h6">Huge Collecton</Typography> 
        <BannerTitle variant="h2">New Bags</BannerTitle>
        <BannerDescription variant="subtitle1" component="p">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Exercitationem ex delectus fuga dicta voluptatibus cum impedit.
        </BannerDescription>
        <BannerShopButton color='primary'>Shop Now</BannerShopButton>
      </BannerContent>
    </BannerContainer>
  )
}

export default Banner