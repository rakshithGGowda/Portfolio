import React,{useState} from 'react';
import "animate.css"
import { AiFillCloseCircle } from 'react-icons/ai';

import { BlogCard, CardInfo, ExternalLinks, GridContainer,ViewMore, HeaderThree, Hr,Overlay,projectOverlay, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';


const Projects = () => {

  const [open, setopen] = useState(false)
  const [projectOpened, setprojectOpened] = useState({})
  
  
  const openDetails = (project) => {
    setopen(true)
    setprojectOpened(project)
    console.log(projectOpened)
  }
  
  const closeOverlay = () =>{
    setopen(false);
  }
  
  const body = (
    <div className="animate__animated animate__fadeIn">
          <AiFillCloseCircle className = "overlay-close-btn" onClick = {closeOverlay}/>
          <iframe className = "overlay-project-img"  width="fit-content" height="300" src={projectOpened.visit}></iframe>
            <HeaderThree title>{projectOpened.title}</HeaderThree>
              <Hr/>
        <CardInfo>{projectOpened.description}</CardInfo>
          <ExternalLinks target="_blank" href={projectOpened.visit} >{projectOpened.visit}</ExternalLinks>
          <ExternalLinks target="_blank" href={projectOpened.source} >{projectOpened.source}</ExternalLinks>
      </div>
  )


  return (
  <Section nopadding style={{paddingTop:"10vh"}} id="projects">
    <SectionTitle main><div className="animate__animated animate__fadeInLeft " >Some of my projects..</div></SectionTitle>
    <GridContainer>
      {projects.map((project) =>(
        <div>
         <BlogCard onClick={() => {openDetails(project)}} key={project.id}>
           <Img src={project.image}/>
           <ViewMore >VIEW PROJECT</ViewMore>
         </BlogCard>
        </div>
      ))}
    </GridContainer>
    {open ? <Overlay>{body}</Overlay> : console.log("")}
  </Section>
  )};

export default Projects;