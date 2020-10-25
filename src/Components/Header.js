import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/img/Logo.svg'

const Header = () => {
  return (
    <ul className='navigation-wrapper'>
      <Link to='/'> <img src={logo} alt=""/></Link>
      <Link to='/'> Главная</Link>
      <Link to='/services'> Услуги и цены</Link>
      <Link to='projects'> Проекты</Link>
      <Link to='about'> О нас </Link>
      <Link to='contacts'>Контакты</Link>
      <li> Заказать</li>

    </ul>
  )
}
export default Header