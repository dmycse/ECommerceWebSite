import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { HeaderContainer, HeaderTitle } from "../../styles/header";
import HeaderActions from "./headerActions";
import { useUIContext } from "../../context/ui";


function HeaderMobile({matches}) {

  const { setDrawerOpen, setShowSearchBox } = useUIContext();
 
  return (
    <HeaderContainer component='nav' direction='row'>
      <IconButton onClick={() => setDrawerOpen(true)}> 
        <MenuIcon />
      </IconButton>
      <HeaderTitle variant='h4' matches={matches}>
        My Bags
      </HeaderTitle>
      <IconButton onClick={() => setShowSearchBox(true) }>
        <SearchOutlinedIcon />
      </IconButton>
      <HeaderActions matches={matches} />
    </HeaderContainer>
  )
}

export default HeaderMobile;