import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
  transition: all .25s ease-in;
  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`;

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}
`
export const ViewMore = styled.div`
opacity:0;
position:absolute;
left: 50%;
top:50%;
width:20px;
height:20px;
background-color: pink;
-webkit-transition:  .25s ease-in;
-o-transition: .25s ease-in;
transition:  .25s ease-in;
border-radius: 50%;
text-align:center;
padding-top:9px;
font-size: 3px;
cursor:pointer;
// transform: translate(-50%, -50%);

&:hover {
  background-color:black;
}
`;

export const BlogCard = styled.div`
position:relative;
  text-align: center;
  width: 400px;
  height: 200px;
  opacity:0.6;
  transition: all .25s ease-in;

  
  &:hover {
    opacity: 1;
  }

  &:hover ${ViewMore} {
  opacity:1;
  display: block;
  z-index: 9;
  background-image: linear-gradient(180deg,#a9cde8,#F9DFDC);;
  color: black;
  -webkit-transition: .2s ease-in;
  -o-transition:  .2s ease-in;
  transition:  .2s ease-in;
  -webkit-transform: scale(5);
  -ms-transform: scale(5);
  transform: scale(5);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#000;
font-size: 1.6rem;
padding:0.8rem 1.5rem;
background: #d1d3d5;
border-radius: 25px;
transition: 0.1s ease-in;
&:hover{
  background: #fff;
  padding: 0.8rem 2rem;
}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: #d8bfbf;
font-size: 1.5rem;
`;