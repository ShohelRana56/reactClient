import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterWrap,
  FooterLinksTitle,
  FooterLink,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  WebsiteRights,
  SocialIconLink,
} from "./FooterElements";

import {
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinksTitle>About Us</FooterLinksTitle>
              <FooterLink to="/">How it works</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Invertore</FooterLink>
              <FooterLink to="/">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinksTitle>Contact Us</FooterLinksTitle>
              <FooterLink to="/">Contact</FooterLink>
              <FooterLink to="/">Support</FooterLink>
              <FooterLink to="/">Destiantions</FooterLink>
              <FooterLink to="/">Sponsorships</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinksTitle>Videos</FooterLinksTitle>
              <FooterLink to="/">Submit Video</FooterLink>
              <FooterLink to="/">Amgassadors</FooterLink>
              <FooterLink to="/">Agency</FooterLink>
              <FooterLink to="/">Influence</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinksTitle>Social Media</FooterLinksTitle>
              <FooterLink to="/">Instagram</FooterLink>
              <FooterLink to="/">Facebook</FooterLink>
              <FooterLink to="/">Youtube</FooterLink>
              <FooterLink to="/">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMediaWrap>
          <SocialLogo to="/" onClick={toggleHome}>
            dolla
          </SocialLogo>
          <WebsiteRights>
            dolla © {new Date().getFullYear()} All rights reserved.
          </WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="/" target="_blank" aria-label="facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="edin">
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
