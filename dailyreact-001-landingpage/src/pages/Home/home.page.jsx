import Button from "../../components/UIs/Button/button.ui";
import PlayIcon from "../../assets/imgs/005-play-icon.svg";

import {
  MainContainer,
  Wrapper,
  Title,
  SubTitle,
  WrapperButton,
} from "./home.styles";

const Home = () => {
  return (
    <MainContainer>
      <Wrapper>
        <Title>Build and listen to your own beat</Title>

        <SubTitle>
          Use 2M+ more samples and loops from splice sounds, + download your
          beats as MIDI or Toraiz SP-16 files.
        </SubTitle>

        <WrapperButton>
          <Button title="Learn more" btntype="secondary" icon={PlayIcon} />
          <Button title="Try for free $5.99Mo" btntype="primary" />
        </WrapperButton>
      </Wrapper>
    </MainContainer>
  );
};

export default Home;
