
import React from 'react';
import "animate.css"


import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding><br/>

    <LeftSection >
      <SectionTitle main center ><div className="animate__animated animate__fadeInLeft">Hey.. <br/></div>
      <span className="animate__animated animate__fadeInUp animate__delay-1s">I'm</span> <span className="animate__animated animate__fadeInUp" style={{animationDelay:"1.5s"}}>Rakshith<br/></span>
      <span className="animate__animated animate__fadeInUp" style={{animationDelay:"2s"}} >A</span> <span className="animate__animated animate__fadeInUp" style={{animationDelay:"2.2s"}} >Machine Learning</span> <span className="animate__animated animate__fadeInUp" style={{animationDelay:"2.7s"}} >Engineer</span>
      </SectionTitle>
      <SectionText>
      <span className="animate__animated animate__flipInX animate__delay-3s">As a Machine Learning Engineer and Software Developer with over three years of experience in developing innovative solutions to develop Artificial intelligence</span>
       <span className="animate__animated animate__flipInX" style={{animationDelay:"3.4s"}} >I intend to build my career developing software that matters.</span> <span className="animate__animated animate__flipInX" style={{animationDelay:"3.7s"}} >
       My expertise encompasses a wide range of areas, including machine learning model research/deployment, generative AI, and full-stack web application development.</span>
      
      </SectionText>
      <div className="animate__animated animate__fadeIn" style={{animationDelay:"4.5s", animationDuration: "2s"}} >
        <a href="https://github.com/rakshithGGowda/Portfolio/blob/master/public/Resume.pdf" target="_blank" rel="noopener noreferrer">
          <Button>Learn More</Button>
        </a>
      </div>
    </LeftSection>
  </Section>
);

export default Hero;