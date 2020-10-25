import React from 'react'
import {Link} from "react-router-dom";

const GoBack = ({color, link}) => {
  return (
    <div className="navigation-pages">
      <Link style={{color: color}} to={link}>
        <div className="go-back back">
          go back <br/>
          <span>
         <svg width="69" height="13" viewBox="0 0 69 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M69 6.5H1M1 6.5L9 1M1 6.5L9 12" stroke={color}/>
         </svg>

          </span>
        </div>
      </Link>
    </div>
  )
}
export default GoBack