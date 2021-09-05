import React from 'react';
import { DiFirebase, DiReact,DiNodejs,DiRubyRough } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech"> 
    <SectionDivider/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked litle nskdnk nkssd sll  ks sl sskdn smasasa san pad sd sind 
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
