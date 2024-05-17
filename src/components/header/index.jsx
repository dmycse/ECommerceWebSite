import { useMediaQuery, useTheme } from "@mui/material";
import HeaderMobile from './headerMobile';
import HeaderDesktop from './headerDesktop';


function Header() {

  let theme = useTheme();
  let matches = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <>
      {matches 
        ? <HeaderMobile matches={matches} /> 
        : <HeaderDesktop matches={matches}/>
      }
    </>
  )
}

export default Header;