import { Container, ThemeProvider } from "@mui/material";
import theme from './styles/theme';

import { UIProvider } from "./context/ui";

import Header from './components/header';
import HeaderDrawer from "./components/header/drawer";
import Banner from "./components/banner";
import Promotions from "./components/promotions";
import Products from "./components/products";
import Footer from "./components/footer";
import SearchBox from "./components/search";


function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='xl' sx={{background: '#fff'}}>
        <UIProvider>
          <Header />
          <Banner />
          <Promotions />
          <Products />
          <Footer />
          <HeaderDrawer />
          <SearchBox />
        </UIProvider>
      </Container>
    </ThemeProvider>
  )
}

export default App;
