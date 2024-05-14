import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

import { HeaderContainer, HeaderTitle } from "../../styles/header";
import HeaderActions from "./headerActions";


function HeaderMobile({matches}) {
 
  return (
    <HeaderContainer component='nav' direction='row'>
      <IconButton>
        <MenuIcon />
      </IconButton>
      <HeaderTitle variant='h4' matches={matches}>
        My Bags
      </HeaderTitle>
      <IconButton>
        <SearchIcon />
      </IconButton>
      <HeaderActions matches={matches} />
    </HeaderContainer>
  )
}

export default HeaderMobile;