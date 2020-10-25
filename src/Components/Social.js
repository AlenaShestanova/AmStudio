import React from 'react'
import {Link} from "react-router-dom";
import insta from "../assets/img/instagram.svg";
import telega from "../assets/img/telegram.svg";
import vk from "../assets/img/vk.svg";
const Social=()=>{
  return(
      <div className="social-icons">
        <Link to=''><img src={insta} alt=""/> </Link>
        <Link to=''> <img src={telega} alt=""/></Link>
        <Link to=''> <img src={vk} alt=""/></Link>
      </div>
  )
}
export default Social