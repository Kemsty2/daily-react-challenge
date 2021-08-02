import SoundIcon from "../../../assets/imgs/001-sound-icon.svg";
import FacebookIcon from "../../../assets/imgs/002-facebook-icon.svg";
import TwitterIcon from "../../../assets/imgs/003-twitter.icon.svg";
import LinkedInIcon from "../../../assets/imgs/004-linkedin-icon.svg";

import { FooterContainer, FooterRight, FooterLeft } from "./footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLeft>
        <img src={SoundIcon} alt="sound-icon" />
        <span>sound on</span>
      </FooterLeft>
      <FooterRight>
        <img src={FacebookIcon} alt="facebook-icon" />
        <img src={TwitterIcon} alt="twitter-icon" />
        <img src={LinkedInIcon} alt="linkedin-icon" />
      </FooterRight>
    </FooterContainer>
  );
};

export default Footer;
