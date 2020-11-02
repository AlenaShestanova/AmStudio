import React, {useEffect} from 'react'
import Social from "./Social";
import send from '../assets/img/send.svg'
import GoBack from "./GoBack";
import axios from "axios";
import ModalPortal from "./ModalPortal";
import {useOnClickOutside} from "./useClickOutside";

const Contacts = () => {
  const [input, setInput] = React.useState({})
  const [errors, setErrors] = React.useState(new Map([]))
  const [openModal, setOpenModal] = React.useState(false)
  const [response, setResponse] = React.useState()
  const closeModal = () => {
    setOpenModal(false)
  }
  useEffect(() => {
    window.scrollTo(0, 0)

  }, [])

  async function postRequest(event) {
    inputHandler()
    if (Object.keys(input).length === 3) {
      event.preventDefault()
      try {
        const response = await axios.post("/contacts/feedback/", {input})
        setResponse(response.status)
        setOpenModal(true)
        console.log(response)
      } catch (error) {

      }
    }
  }


  const inputHandler = () => {
    const map = new Map([])
    if (Object.keys(input).length !== 0) {
      if (!input.name) map.set('name', 'Введите имя')
      if (!input.email) map.set('email', 'Введите майл')
      if (!input.text) map.set('text', 'Введите ваш вопрос')
    } else {
      map.set('empty', 'Заполните пустые поля')
    }
    setErrors(new Map(map))

  }
  const inputOnChange = (key, value) => {
    if (value) {
      setInput(prevState => ({...prevState, [key]: value}))

    } else {
      delete input[key]
      setInput(prevState => ({...prevState}))
    }
  }

  const modalRef = React.useRef()
  useOnClickOutside([modalRef], () => closeModal());
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
          <input className={`${errors.get('name') || errors.get('empty') ? 'errorsInput' : ''}`}
                 onChange={({target}) => (inputOnChange('name', target.value))}
                 placeholder='Ольга' id='name' type="text" maxLength='75'/>
          <div className='errors'> {errors.get('name')}</div>
          <label htmlFor="email">E-mail</label>
          <input className={`${errors.get('email') || errors.get('empty') ? 'errorsInput' : ''}`}
                 onChange={({target}) => (inputOnChange('email', target.value))}
                 placeholder='example@mail.ru' id='email' type="text" maxLength='75'/>
          <div className='errors'>  {errors.get('email')}</div>

          <label htmlFor="question">Ваш вопрос</label>
          <textarea className={`${errors.get('text') || errors.get('empty') ? 'errorsInput' : ''}`}
                    onChange={({target}) => (inputOnChange('text', target.value))}
                    placeholder='Здравствуйте, я хотел бы узнать...' name="" id="question" rows={12}
                    maxLength='3000'/>
          <div className='errors'> {errors.get('text')}{errors.get('empty')}</div>

          <div onClick={(event) => postRequest(event)} className="send-btn">
            <div className='send-btn-title'>Отправить</div>
            <img src={send} alt=""/>
          </div>
          <div className="rules">
            Мы не передаем данные третьим лицам
          </div>
        </div>

      </div>
      <GoBack color={'white'} link={'/about'}/>
      {openModal &&
      <ModalPortal>
        <div className="modal">
          <div ref={modalRef} className='modal-container'>
            <div className="modal_header">
              <div onClick={closeModal} style={{cursor: 'pointer', color: '#9CA1A6'}}>&#10006;</div>
            </div>
            <div className="modal_content">
              {response === 200 ? 'Ваше сообщение доставлено' : 'Извините, проблемы с сервером:('}
            </div>
            <div className="modal_footer">
              <button onClick={closeModal} className='modal_footer_btn  doneBtn'>ok</button>
            </div>

          </div>
        </div>
      </ModalPortal>
      }
    </div>
  )
}
export default Contacts