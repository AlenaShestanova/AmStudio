import React from 'react'
import {Link, NavLink, useHistory} from 'react-router-dom'
import logo from '../assets/img/Logo.svg'
import burger from '../assets/img/burger.svg'

const Header = () => {
  let history = useHistory()
  const[ openMenu,setOpenMenu]=React.useState(false)
  const arr = [
    {title: 'Главная', link: '/'},
    {title: 'Услуги и цены', link: '/services'},
    {title: 'Проекты', link: '/projects'},
    {title: 'О нас', link: '/about'},
    {title: 'Контакты', link: '/contacts'},

  ]
  const mobileMenu=(
    <div className={ `mobile-menu ${openMenu&& 'mobile-menu-active'}`}>
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
  )

const redirect = () => (history.push('/contacts'))

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
    <li onClick={redirect} className='order'> Заказать</li>
    <img className='burger-menu' src={burger} onClick={()=>setOpenMenu(!openMenu)} alt=""/>
    {openMenu && mobileMenu}
  </ul>
)
}
export default Header