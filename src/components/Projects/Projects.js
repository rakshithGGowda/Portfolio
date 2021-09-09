import React,{useState} from 'react';
import "animate.css"
import { AiFillCloseCircle } from 'react-icons/ai';

import { BlogCard, CardInfo, ExternalLinks, GridContainer,ViewMore, HeaderThree, Hr,Overlay,projectOverlay, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
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
          <img className = "overlay-project-img" src={projectOpened.image}></img>
            <HeaderThree title>{projectOpened.title}</HeaderThree>
              <Hr/>
        <CardInfo>{projectOpened.description}</CardInfo>
          <ExternalLinks target="_blank" href={projectOpened.visit} >Visit</ExternalLinks>
          {/* <ExternalLinks target="_blank" href={projectOpened.source} >Code</ExternalLinks> */}
      </div>
  )


  return (
  <Section nopadding style={{paddingTop:"10vh"}} id="projects">
    <SectionTitle main><div class="animate__animated animate__fadeInLeft " >Some of my projects..</div></SectionTitle>
    <GridContainer>
      {projects.map((project) =>(
        <div>
         <BlogCard onClick={() => {openDetails(project)}} key={project.id}>
           <Img src={project.image}/>
           <ViewMore >Learn More</ViewMore>
         </BlogCard>
        </div>
      ))}
    </GridContainer>
    {open ? <Overlay>{body}</Overlay> : console.log("")}
  </Section>
  )};

export default Projects;