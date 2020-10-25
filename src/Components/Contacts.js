import React from 'react'
import Social from "./Social";
import send from '../assets/img/send.svg'
import GoBack from "./GoBack";

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
        <div className="form">
          <label htmlFor="name">Имя</label>
          <input placeholder='Ольга' id='name' type="text"/>
          <label htmlFor="email">E-mail</label>
          <input placeholder='example@mail.ru' id='email' type="text"/>
          <label htmlFor="question">Ваш вопрос</label>
          <textarea placeholder='Здравствуйте, я хотел бы узнать...' name="" id="question" rows={12}/>
          <div className="send-btn">
            <div className='send-btn-title'>Отправить</div>
            <img src={send} alt=""/>
          </div>

          <div className="rules">
            Мы не передаем данные третьим лицам
          </div>
        </div>

      </div>
      <GoBack color={'white'} link={'/about'}/>
    </div>
  )
}
export default Contacts