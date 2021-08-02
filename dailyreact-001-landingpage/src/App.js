import Home from "./pages/Home/home.page";
import Header from "./components/Layouts/Header/header.layout";
import Footer from "./components/Layouts/Footer/footer.layout";
import { LayoutContainer } from "./App.styles";

const App = () => {
  return (
    <LayoutContainer>
      <Header />
      <Home />
      <Footer />
    </LayoutContainer>
  );
};
export default App;
