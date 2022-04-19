import styled from 'styled-components';

export const Container = styled.div `
  display: flex;
  padding-top: 1rem;
  padding:1rem;
  position: fixed;
  flex-wrap: wrap;
  z-index: 7;
  opacity:0.7;
  align-content: center;
  justify-content: space-around;
  background-image: linear-gradient(160deg,#a9cde8,#F9DFDC);
  width:100%;
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;
export const Logo = styled.div `
  display: flex;
  flex-direction: row;
  flex:30%;
  @media ${(props) => props.theme.breakpoints.sm} {
    flex:0;
  }
`;

export const Span = styled.span `
  font-size:2rem;
  color:black;
`;

export const NavLinks = styled.div `
  display: flex;
  justify-content: space-around;
  flex:30%;
  margin-right:10vh;
  @media ${(props) => props.theme.breakpoints.md} {
    overflow: hidden;
    flex-direction: column;
    text-align: center;
    width:100%;
    max-height: ${({isOpen}) => (isOpen ? "300px": "0px")};
    transition: max-height 0.4s ease-in;

  }
`;

export const HamBurger = styled.div `
  display:none;
  flex-direction: column;
  cursor:pointer;
  justify-content:center;


  span{
    height:2px;
    width:20px;
    background:black;
    margin-bottom:4px;
    border-radius:5px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    display:flex;
    margin-left:20px;
  }
`;


// Navigation Links
export const NavLink = styled.a `
  font-size: 1vw;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.90);
  opacity: 0.8;
  transition: 0.2s ease;
  color:black;
  margin-left: 20px;
  &:hover {
    color: white;
    opacity: 1;
    cursor: pointer;
    font-size:135%;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size:12px;
    &:hover {
      font-size:100%;
    }
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size:18px;
    &:hover {
      font-size:100%;
    }
  }
`;

// Social Icons 

export const SocialIcons = styled.a `
transition: 0.3s ease;
color: #212d45;
border-radius: 50px;
padding: 8px;
margin-left:25px;
&:hover {
    background-color: #212d45;
    color:white;
    transform: scale(1.2);
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    margin-left:5px;
  }
`;

export const Social = styled.div `
  display: flex;
  justify-content: flex-end;
  flex:30%;
  align-content: center;
  @media ${(props) => props.theme.breakpoints.md} {
    margin:auto;
  }
`;