import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/img/Logo.svg'
import {useHistory} from 'react-router-dom'
import cn from 'classnames'

const Header = () => {
  let history=useHistory()
  let location=history.location.pathname
  const [active, setActive] = React.useState(location);
  const clickHandler=(link)=>{
    setActive(link);
  }
  const arr=[
    { title:'Главная',link:'/'},
    { title:'Услуги и цены',link:'/services'},
    { title:'Проекты',link:'/projects'},
    { title:'О нас',link:'/about'},
    { title:'Контакты',link:'/contacts'},

  ]
  return (
    <ul className='navigation-wrapper'>
      <Link to='/'> <img src={logo} alt=""/></Link>
      {arr.map((item)=>
      <Link
        onClick={()=>clickHandler(item.link)}
        className={cn('someClass',{'active':item.link===location})}
        to={item.link}
      >
        {item.title}
      </Link>
      )
      }
      <li> Заказать</li>

    </ul>
  )
}
export default Header