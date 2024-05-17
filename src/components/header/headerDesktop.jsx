import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { HeaderContainer, HeaderTitle, HeaderList } from "../../styles/header";
import HeaderActions from "./headerActions";
import { menuItems } from "../../data";
import { useUIContext } from "../../context/ui";

function HeaderDesktop({matches}) {

  const { setShowSearchBox } = useUIContext();
  
  return (
    <HeaderContainer component="header" direction="row">
      <HeaderTitle>My Bags</HeaderTitle>
      <HeaderList type='row' component='nav'>
        {menuItems.map(item => <ListItemText key={item }primary={item} />)}
        <ListItemButton onClick={() => setShowSearchBox(true)}>
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