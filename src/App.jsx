import { Container, ThemeProvider } from "@mui/material";
import theme from './styles/theme';

import Header from './components/header';
import Banner from "./components/banner";
import Promotions from "./components/promotions";
import Products from "./components/products";


function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='xl' sx={{background: '#fff'}}>
        <Header />
        <Banner />
        <Promotions />
        <Products />
      </Container>
    </ThemeProvider>
  )
}

export default App;
