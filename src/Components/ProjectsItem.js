import React from 'react'
import someImg from '../assets/img/someImg.svg'
const ProjectsItem=({title})=>{
  return(
    <div className='item'>
      <img src={someImg} alt=""/>
      <div> {title}</div>
    </div>
  )
}
export default ProjectsItem