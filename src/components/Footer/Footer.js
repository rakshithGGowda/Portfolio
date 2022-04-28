import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
     <LinkList>
     <LinkColumn>
     <LinkTitle>You can contact me at:</LinkTitle>
     <LinkItem href="tel:9731429857">+91 9731429857</LinkItem>
     </LinkColumn>
     <LinkColumn>
     <LinkTitle>You can Email to:</LinkTitle>
     <LinkItem href="mailto:rakshithgowdag89@mail.com">rakshithgowdag89@mail.com</LinkItem>
     </LinkColumn>
     </LinkList>
     <SocialIconsContainer>
       <CompanyContainer>
         <Slogan>const justDoit = (success) => success ? searchForNextBiggerThings() : justDoit(tryAgain(this.state.beAwesome))</Slogan>
       </CompanyContainer>
       <SocialContainer>
        <SocialIcons href="https://github.com/rakshithGGowda" style = {{color:"white"}}>
        <AiFillGithub/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/rakshith-gowda-604a94178/" style = {{color:"white"}}>
        <AiFillLinkedin/>
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/" style = {{color:"white"}}>
        <AiFillInstagram/>
      </SocialIcons>
       </SocialContainer>
     </SocialIconsContainer>
   </FooterWrapper>
  );
};

export default Footer;
