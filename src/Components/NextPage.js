import React from 'react'
import img from "../assets/img/img1.svg";
import next from "../assets/img/next.svg";
import {Link} from "react-router-dom";
const NextPage=(props)=>{
  return(
    <Link to={props.link}>
      <div className="next-page">
        next page <br/>
        <span>
          <img src={next} alt=""/></span>
      </div>
    </Link>
  )
}
export default NextPage