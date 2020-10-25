import React from 'react'
import img from "../assets/img/img1.svg";
import next from "../assets/img/next.svg";
import {Link} from "react-router-dom";

const NextPage = ({link, color}) => {
  return (
    <Link to={link}>
      <div style={{color:color}} className="next-page">
        next page <br/>
        <span>
         <svg width="69" height="12" viewBox="0 0 69 12" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 6H68M68 6L60 0.5M68 6L60 11.5" stroke={color}/>
          </svg>

        </span>
      </div>
    </Link>
  )
}
export default NextPage