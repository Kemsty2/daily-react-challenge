import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  /* flex: 1; */
  margin: 0 112px 36px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const FooterRight = styled.div`
  img {
    margin-right: 24px;
    &:last-of-type: {
      margin-right: 0;
    }
  }
`;

export const FooterLeft = styled.div`
  color: #fff;
  img {
    margin-right: 12px;
  }
`;
