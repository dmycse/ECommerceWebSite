import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { HeaderContainer, HeaderTitle, HeaderList } from "../../styles/header";
import HeaderActions from "./headerActions";

function HeaderDesktop({matches}) {
  
  return (
    <HeaderContainer component="header" direction="row">
      <HeaderTitle>My Bags</HeaderTitle>
      <HeaderList type='row' component='nav'>
        <ListItemText primary="Home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="Products" />
        <ListItemText primary="Contacts" />
        <ListItemButton>
          <ListItemIcon>
            <SearchOutlinedIcon />
          </ListItemIcon>
        </ListItemButton>
      </HeaderList>
      <HeaderActions matches={matches} />
    </HeaderContainer>
  )
}

export default HeaderDesktop;