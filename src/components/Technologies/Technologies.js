import React from 'react';
import { DiFirebase, DiReact,DiNodejs,DiRubyRough } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section style={{paddingTop:"14vh"}} id="tech"> 
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
    I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.<br/>
    I also Learning/applying full-stack development with popular open-source platform like NodeJs(Express), MongoDB, Firebase and others
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with <br/>
              ReactJs
            </ListParagraph>
          </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/>
          <ListContainer>
            <ListTitle>Database</ListTitle>
            <ListParagraph>
            Experience with <br/>
              Firebase, MongoDB and AWS
            </ListParagraph>
          </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejs size="3rem"/>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
            Experience with <br/>
              NodeJs with Express, SpringBoot
            </ListParagraph>
          </ListContainer>
      </ListItem>
      <ListItem>
        <DiRubyRough size="3rem"/>
          <ListContainer>
            <ListTitle>UI Automation</ListTitle>
            <ListParagraph>
            Experience with <br/>
              Ruby, Selenium with BDD
            </ListParagraph>
          </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
