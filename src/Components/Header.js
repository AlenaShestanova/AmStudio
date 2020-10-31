import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import logo from '../assets/img/Logo.svg'
import burger from '../assets/img/burger.svg'

const Header = () => {
  const arr = [
    {title: 'Главная', link: '/'},
    {title: 'Услуги и цены', link: '/services'},
    {title: 'Проекты', link: '/projects'},
    {title: 'О нас', link: '/about'},
    {title: 'Контакты', link: '/contacts'},

  ]
  const getMobileMenu=()=>{
    return  <div className="mobile-menu">
      {arr.map((item) =>
        <NavLink
          exact
          activeClassName="active"
          to={item.link}
        >
          {item.title}
        </NavLink>
      )}
    </div>
  }
  return (
    <ul className='navigation-wrapper'>
      <Link to='/'> <img src={logo} alt=""/></Link>
      {arr.map((item) =>
        <NavLink
          exact
          activeClassName="active"
          to={item.link}
        >
          {item.title}
        </NavLink>
      )}
      <li className='order'> Заказать</li>
      <img className='burger-menu' src={burger} onClick={getMobileMenu()} alt=""/>

    </ul>
  )
}
export default Header