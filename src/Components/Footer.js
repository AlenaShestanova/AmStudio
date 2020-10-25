import React from 'react'
import {Link} from 'react-router-dom'
import vk from '../assets/img/vk.svg'
import insta from '../assets/img/instagram.svg'
import telega from '../assets/img/telegram.svg'
import Social from "./Social";
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-btn"> Напишите нам</div>
      <div className="footer-amstudio">
        <div className=""> am studio</div>
        <div className=""><span>am studio</span></div>
        <div className=""><span>am studio</span></div>
      </div>
     <Social/>
    </div>
  )
}
export default Footer