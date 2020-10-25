import React from 'react'
import Social from "./Social";

const Contacts = () => {
  return (
    <div className='contacts'>
      <div className="contacts-form">
        <div className="white-header"></div>
        <div className='cont'>
          <h2>Связаться с нами:</h2>
          <p>infoamstudio@gmail.com</p>
          <p>+7 999 999-99-99</p>
          <Social/>
        </div>

      </div>
    </div>
  )
}
export default Contacts