import React from 'react'
import ProjectsItem from "./ProjectsItem";
import BackNext from "./BackNext";

const Projects = () => {
  return (
    <>
      <div className='projects'>
        <div className="projects-items">
          <ProjectsItem title={'Aliquam scelerisque'}/>
          <ProjectsItem title={'Aliquam scelerisque'}/>
          <ProjectsItem title={'Aliquam scelerisque'}/>
        </div>
        <div className="projects-items">
          <ProjectsItem title={'Aliquam scelerisque'}/>
          <ProjectsItem title={'Aliquam scelerisque'}/>
          <ProjectsItem title={'Aliquam scelerisque'}/>
        </div>
        <BackNext color={'white'} next={'/about'} back={'/services'}/>
      </div>
    </>
  )
}
export default Projects