import Link from 'next/link';
import React,{useState} from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin,AiFillCloseCircle } from 'react-icons/ai';
import { FaHamburger } from 'react-icons/fa';
import { SiRiot } from 'react-icons/si';
import { GrClose } from 'react-icons/gr';

import { Container, Logo, NavLinks, Social, NavLink, SocialIcons,HamBurger } from './HeaderStyles';

const Header = () =>  {
  const [isOpen, setisOpen] = useState(false)
  return(
  <Container className = "animate__animated animate__fadeInDown">
  <Logo>
   <Link href="/">
     <a style={{ display:"flex", alignItems:"center", color:"black"}}>
      <SiRiot size = "3rem"/>
     </a>
   </Link>
  </Logo>
  <NavLinks isOpen = {isOpen}>
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
  </NavLinks>
  <Social>
    <SocialIcons href="https://github.com/rakshithGGowda">
      <AiFillGithub/>
    </SocialIcons>
    <SocialIcons href="https://www.linkedin.com/in/rakshith-gowda-604a94178/">
      <AiFillLinkedin/>
    </SocialIcons>
    <SocialIcons href="https://twitter.com/Rakshit86337943">
      <AiFillTwitterCircle/>
    </SocialIcons>
  </Social>
  <HamBurger onClick = {() => setisOpen(!isOpen)}>
    {isOpen? <GrClose style={{ color:"black"}}/> : <FaHamburger style={{ color:"black"}}/> }
    
  </HamBurger>
  </Container>
  )
  }

export default Header;
