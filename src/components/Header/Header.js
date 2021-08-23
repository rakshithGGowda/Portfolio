import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SiRiot } from 'react-icons/si';

import { Container, Div1, Div2, Div3, NavLink,Span, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  
  <Container>

  <Div1>
   <Link href="/">
     <a style={{ display:"flex", alignItems:"center", color:"white"}}>
      <SiRiot size = "3rem"/>
     </a>
   </Link>
  </Div1>
  <Div2>
    <li>
      <Link href="#projects">
        <NavLink>My Projects</NavLink>
      </Link>
    </li>
    <li>
      <Link href="#tech">
        <NavLink>Technologies</NavLink>
      </Link>
    </li>
    <li>
      <Link href="#about">
        <NavLink>About Me</NavLink>
      </Link>
    </li>
  </Div2>
  <Div3>
    <SocialIcons href="https://github.com/rakshithGGowda">
      <AiFillGithub/>
    </SocialIcons>
    <SocialIcons href="https://www.linkedin.com/in/rakshith-gowda-604a94178/">
      <AiFillLinkedin/>
    </SocialIcons>
    <SocialIcons href="https://www.instagram.com/">
      <AiFillInstagram/>
    </SocialIcons>
  </Div3>
  </Container>
);

export default Header;
