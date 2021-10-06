import {
  HeaderContainer,
  Navbar,
  NavbarLeft,
  NavbarRight,
  NavbarBrand,
  NavbarNav,
  NavbarItem,
  NavLink,
} from "./header.styles";

import LogoIcon from "../../../assets/imgs/001-logo.svg";
import AccountPlusIcon from "../../../assets/imgs/004-account-plus.svg";
import BagIcon from "../../../assets/imgs/005-bag.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <Navbar>
        <NavbarLeft>
          <NavbarBrand href="#!">
            <img src={LogoIcon} alt="logo" />
          </NavbarBrand>
          <NavbarNav>
            <NavbarItem>
              <NavLink>Collections</NavLink>
            </NavbarItem>
            <NavbarItem>
              <NavLink>Montres</NavLink>
            </NavbarItem>
            <NavbarItem>              
              <NavLink>Coffrets</NavLink>
            </NavbarItem>
            <NavbarItem>
              <NavLink>Bijoux</NavLink>
            </NavbarItem>
            <NavbarItem>
              <NavLink>Bracelets de montres</NavLink>
            </NavbarItem>
            <NavbarItem>
              <NavLink>VR</NavLink>
            </NavbarItem>
            <NavbarItem>
              <button>Bientôt</button>
            </NavbarItem>
          </NavbarNav>
        </NavbarLeft>

        <NavbarRight>
          <button>
            <img src={AccountPlusIcon} alt="account-plus" />
            <span>Se connecter</span>
          </button>
          <button>
            <img src={BagIcon} alt="bag" />
            <span>0</span>
          </button>
        </NavbarRight>
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;
