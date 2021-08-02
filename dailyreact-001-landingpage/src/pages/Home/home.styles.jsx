import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex: 1;
  align-self: center;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const Wrapper = styled.div`
  margin: 0 315px;
`;

export const Title = styled.p`
  font-size: 48px;
  font-weight: bold;
  line-height: 58px;
  letter-spacing: -0.02em;
`;
export const SubTitle = styled.p`
  font-size: 20px;
  line-height: 24px;
`;

export const WrapperButton = styled.div`
  button {
    margin-right: 20px;
    &:last-of-type: {
      margin-right: 0;
    }
  }
`;
