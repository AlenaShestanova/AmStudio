import React, {useEffect} from 'react'
import img from '../assets/img/img1.svg'
import NextPage from "./NextPage";

const Main = () => {
  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])
  return (
    <div className='main'>
      <div className='main-desc'>
        <div className='item left'>
          <img src={img} alt=""/>
        </div>
        <div className='right item'>
          <h1> am <br/>studio </h1>
          <p>Разработка, внедрение и обслуживание программного обеспечения и веб-сайтов для малого и среднего бизнеса.
            Разработка IT-решений у нас — это выгодная инвестиция в ваш бизнес
          </p>
        </div>
      </div>
      <div className='main-content'>
        <div className="main-content-container">
          <div className='creative'> Creative</div>
          <div className='desc-container'>
            <div>
              <div className='img'></div>
            </div>

            <div className='desc'>
              <h2>AM STUDIO</h2>
              <p>	Наша команда оказывает полный спектр услуг по реализации и сопровождению IT-проектов, полагаясь на ваши интересы и цели в бизнесе.
                Основная специализация студии — разработка лендингов, веб-приложений и сайтов любой сложности.
                Также наши frontend- и backend-разработчики реализуют любую вашу задумку. Просто напишите нам</p>
            </div>
          </div>
        </div>
        <div className="main-content-container left">
          <div className='desc-container desc-container-left'>
            <div className='desc desc-left'>
              <h2>Почему мы?</h2>
              <p>-	Благодаря практическому опыту мы реализуем ваш проект качественно и точно в срок <br/>
                -	Учтем каждое ваше требование и отработаем на все 110% <br/>
                - Обеспечим проект технической поддержкой — обучим ваших сотрудников работе с продуктом <br/>
                - Для реализации проекта мы используем самый популярный стек технологий
              </p>
            </div>
            <div>
              <div className='img img-left'></div>
            </div>
          </div>
          <div className='creative creative-left'> Creative</div>
        </div>
        <NextPage color={'white'} link={'/services'}/>
      </div>

    </div>

  )
}
export default Main