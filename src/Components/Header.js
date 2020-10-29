import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import logo from '../assets/img/Logo.svg'


const Header = () => {
  const arr = [
    {title: 'Главная', link: '/'},
    {title: 'Услуги и цены', link: '/services'},
    {title: 'Проекты', link: '/projects'},
    {title: 'О нас', link: '/about'},
    {title: 'Контакты', link: '/contacts'},

  ]
  return (
    <ul className='navigation-wrapper'>
      <Link to='/'> <img src={logo} alt=""/></Link>
      {arr.map((item) =>
        <NavLink
          exact activeClassName="active"
          to={item.link}
        >
          {item.title}
        </NavLink>
      )}
      <li> Заказать</li>

    </ul>
  )
}
export default Header