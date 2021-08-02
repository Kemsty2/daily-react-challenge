import { HeaderContainer, Navbar, NavBrand, NavList } from "./header.styles";
import Button from "../../UIs/Button/button.ui";

const Header = () => {
  return (
    <HeaderContainer>
      <Navbar>
        <NavBrand>EkiéBozeur</NavBrand>

        <NavList>
          <Button title="Sign in" btntype="classic-link" />
          <Button title="No account ? Create an account" btntype="primary" />
        </NavList>
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;
