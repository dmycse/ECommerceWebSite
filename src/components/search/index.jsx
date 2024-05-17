import { Box, styled, Button, IconButton, Slide, TextField } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "../../styles/theme";

import { useUIContext } from "../../context/ui";

const SearchBoxContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',

  position: 'absolute',
  top: 0,
  left: 0,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 99999,
  
  background: Colors.primary,
  opacity: 0.9,
}));

const SearchField = styled(TextField)(({ theme }) => ({
  padding: '0 0 0 40px',

  ".MuiInputLabel-root": {
    color: Colors.secondary,
  },
  ".MuiInput-root": {
      fontSize: '1rem',
      [theme.breakpoints.up('md')]: {
          fontSize: '2rem',
      },
      color: Colors.secondary,
  },
  ".MuiInput-root::before": {
    borderBottom: `1px solid ${Colors.secondary}`,
  }
}));


export default function SearchBox() {
  const { showSearchBox, setShowSearchBox } = useUIContext();

return (
  <Slide direction="down" in={showSearchBox} timeout={500}>
    <SearchBoxContainer>
      <SearchField
        color="secondary"
        variant="standard"
        fullWidth
        placeholder="search..."
      />
      <IconButton>
        <SearchOutlinedIcon sx={{ fontSize: {xs: '2rem', md: '3rem'} }} color='secondary' />
      </IconButton>
      <IconButton
        onClick={() => setShowSearchBox(false)}
        sx={{
          position: 'absolute',
          top: 10,
          right: 10,
        }}
      >
        <CloseIcon sx={{ fontSize: '4rem' }} color='secondary' />
      </IconButton>
    </SearchBoxContainer>
  </Slide>
);
}