import { useUIContext } from '../../../context/ui';

import { Divider, Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import { DrawerCloseButton } from '../../../styles/header';
import { lighten } from "polished";
import { Colors } from "../../../styles/theme";
import { Fragment } from 'react';
import { menuItems } from '../../../data';


const StyledListItemButton = ({children}) => (
  <ListItemButton
    sx={{
      '&:hover': { backgroundColor: lighten(0.09, Colors.primary)}
    }}
  >
    {children}
  </ListItemButton>
);

const StyledDivider = (props) => (
  <Divider variant="middle" sx={{width: 1/2}} {...props} />
);


function HeaderDrawer() {

  const { drawerOpen, setDrawerOpen } = useUIContext();
  
  return (
    <>
      {drawerOpen && (
        <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
          <CloseIcon
            sx={{
              fontSize: "2.5rem",
              color: lighten(0.09, Colors.secondary),
            }}
          />
        </DrawerCloseButton>
      )}
      <Drawer open={drawerOpen}>
        <List>
          {menuItems.map(item => (
            <Fragment key={item}>
              <StyledListItemButton>
                <ListItemText>{item}</ListItemText>
              </StyledListItemButton>
              <StyledDivider />
            </Fragment>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default HeaderDrawer;