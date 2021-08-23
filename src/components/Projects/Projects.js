import React from 'react';
import "animate.css"

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';


// const projectsItems = [1,2,3,4,5,6]

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main><div class="animate__animated animate__fadeInLeft " >Some of my projects</div></SectionTitle>
    <GridContainer>
      {projects.map((project) =>(
        <div>
         <BlogCard key={project.id}>
           <Img src={project.image}/>
           <TitleContent>
             <HeaderThree title>{project.title}</HeaderThree>
             <Hr/>
            </TitleContent>
               <CardInfo>{project.description}</CardInfo>
              <div>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {project.tags.map((tag, i) =>(
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={project.visit} >Visit</ExternalLinks>
                <ExternalLinks href={project.source} >Code</ExternalLinks>
              </UtilityList>
         </BlogCard>
        </div>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;