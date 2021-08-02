import styled from "styled-components";

export const HeaderContainer = styled.div`
  min-height: 135px;
`;

export const Navbar = styled.nav`
  padding: 55px 112px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NavBrand = styled.div`
  font-size: 24px;
  line-height: 29px;
  font-weight: bold;
  color: #fff;
`;

export const NavList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  button {
    margin-right: 1rem;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;
