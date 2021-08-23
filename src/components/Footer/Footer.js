import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
     <LinkList>
     <LinkColumn>
     <LinkTitle>Call</LinkTitle>
     <LinkItem href="tel:9731429857">9731429857</LinkItem>
     </LinkColumn>
     <LinkColumn>
     <LinkTitle>Email</LinkTitle>
     <LinkItem href="mailto:rakshithgowdag89@mail.com">rakshithgowdag89@mail.com</LinkItem>
     </LinkColumn>
     </LinkList>
     <SocialIconsContainer>
       <CompanyContainer>
         <Slogan>Do Epic Shit!</Slogan>
       </CompanyContainer>
       <SocialContainer>
        <SocialIcons href="https://github.com/rakshithGGowda">
        <AiFillGithub/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/rakshith-gowda-604a94178/">
        <AiFillLinkedin/>
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/">
        <AiFillInstagram/>
      </SocialIcons>
       </SocialContainer>
     </SocialIconsContainer>
   </FooterWrapper>
  );
};

export default Footer;
