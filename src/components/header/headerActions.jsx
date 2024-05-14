import { ListItemButton, Divider } from '@mui/material';
import { HeaderList, HeaderItemIcon, HeaderActionsIconsContainer} from '../../styles/header';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import PersonIcon from '@mui/icons-material/Person';


function HeaderActions({matches}) {

  return (
    <HeaderActionsIconsContainer>
      <HeaderList type="row">
        <ListItemButton sx={{justifyContent: 'center'}}>
          <HeaderItemIcon matches={matches}>
            <ShoppingCartOutlinedIcon />
          </HeaderItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton sx={{justifyContent: 'center'}}>
          <HeaderItemIcon matches={matches}>
            <FavoriteOutlinedIcon />
          </HeaderItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton sx={{justifyContent: 'center'}}>
          <HeaderItemIcon matches={matches}>
            <PersonIcon />
          </HeaderItemIcon>
        </ListItemButton>
      </HeaderList>
    </HeaderActionsIconsContainer>
  )
}

export default HeaderActions;