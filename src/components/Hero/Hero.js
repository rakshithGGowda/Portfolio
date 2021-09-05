
import React from 'react';
import "animate.css"


import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding><br/>

    <LeftSection >
      <SectionTitle main center ><div class="animate__animated animate__fadeInLeft">Hey.. <br/></div>
      <div class="animate__animated animate__fadeInUp animate__delay-1s">I'm Rakshith<br/></div>
      <div class="animate__animated animate__flipInX animate__delay-2s">A Web developer</div>
      </SectionTitle>
      <SectionText>
      <span class="animate__animated animate__flipInX animate__delay-3s">
      Working in a environment that counties to nurture innovation, I intend to build my career developing software that matters. I would like to be associated with a progressive organization that would foster my creativity and give me the opportunity and add value to the organization by sharing my technical and collaborative skills.
      </span>
      </SectionText>
      <div class="animate__animated animate__jackInTheBox animate__delay-4s"><Button onClick={() => window.location = ""}>Learn More</Button></div>
    </LeftSection>
  </Section>
);

export default Hero;