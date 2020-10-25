import React from 'react'
import {Link} from "react-router-dom";

const BackNext = ({color, next,back}) => {
  return (
    <div className="navigation-pages" >
      <Link style={{color: color}} to={back}>
        <div className="go-back">
          go back <br/>
          <span>
         <svg width="69" height="13" viewBox="0 0 69 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M69 6.5H1M1 6.5L9 1M1 6.5L9 12" stroke={color}/>
         </svg>

          </span>
        </div>
      </Link>
      <Link to={next}>
        <div style={{color: color}} className="next-page">
          next page <br/>
          <span>
         <svg width="69" height="12" viewBox="0 0 69 12" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 6H68M68 6L60 0.5M68 6L60 11.5" stroke={color}/>
          </svg>

        </span>
        </div>
      </Link>
    </div>
  )
}
export default BackNext