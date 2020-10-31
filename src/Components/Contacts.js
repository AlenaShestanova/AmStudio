import React, {useEffect} from 'react'
import Social from "./Social";
import send from '../assets/img/send.svg'
import GoBack from "./GoBack";
import axios from "axios";

const Contacts = () => {
  const [input, setInput] = React.useState({})

  const baseURL = "http://amstudio.tech/contacts/feedback/";

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  async function postRequest(event) {
    event.preventDefault()
    try{
      const response= await axios.post("http://amstudio.tech/contacts/feedback/",{input})
      console.log(response)
    }
    catch (error){
      console.log(error)
    }
  }

  // const postRequest = (event) => {
  //   event.preventDefault()
  //   axios.post('')
  // }
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
          <input onChange={({target}) => setInput(prevState => ({...prevState, name: target.value}))}
                 placeholder='Ольга' id='name' type="text"/>
          <label htmlFor="email">E-mail</label>
          <input onChange={({target}) => setInput(prevState => ({...prevState, email: target.value}))}
                 placeholder='example@mail.ru' id='email' type="text"/>
          <label htmlFor="question">Ваш вопрос</label>
          <textarea onChange={({target}) => setInput(prevState => ({...prevState, text: target.value}))}
                    placeholder='Здравствуйте, я хотел бы узнать...' name="" id="question" rows={12}/>
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
    </div>
  )
}
export default Contacts