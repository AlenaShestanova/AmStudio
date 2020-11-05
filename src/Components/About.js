import React from 'react'
import about1 from '../assets/img/about1.png'
import about2 from '../assets/img/about2.svg'
import about3 from '../assets/img/about3.svg'
import about4 from '../assets/img/about4.svg'
import BackNext from "./BackNext";
import {bindReporter} from "web-vitals/dist/lib/bindReporter";

const About = () => {
  return (
    <div className='about-wrapper'>
      <div className="about-wrapper-title">
        AM Studio - амбициозная команда разработчиков и дизайнеров, нацеленная на реализацию лучших проектов на рынке
      </div>
      <div className="about-wrapper-icons">
        <Person
          img={about1}
          title={'Back-end Developer'}
        />
        <Person
          img={about2}
          title={'Front-end Developer'}
        />
        <Person
          img={about3}
          title={'Designer / UI Designer'}
        />
        <Person
          img={about4}
          title={'Targeted advertising specialis'}
        />
      </div>
      <div className="about-wrapper-work">
        <div className="title">
          Процесс работы
        </div>
        <div className="work-items">
          <WorkProc
            title={`Оставьте заявку на сайте`}
            count={'01'}/>
          <WorkProc
            count={'02'}
            title={'Затем мы обработаем ее и свяжемся с Вами через 15 минут'}
          />
          <WorkProc
            count={'03'}
            title={'Далее обсудим условия работы \n' +
            'и составим техническое задание'}
          />
        </div>
        <div className="work-items">
          <WorkProc
            title={'Представим Вам \n' +
            'готовый проект \n' +
            'с учетом ТЗ'}
            count={'04'}/>
          <WorkProc
            count={'05'}
            title={'Внесем правки, скорректируем \n' +
            'и согласуем \n' +
            'с Вами готовый вариант'}
          />
          <WorkProc
            count={'06'}
            title={'Протестируем \n' +
            'и устраним все \n' +
            'возможные баги'}
          />
        </div>
        <div className="work-items">
          <WorkProc
            title={'Отправим все необходимые данные.'}
            count={'07'}/>
        </div>
      </div>
      <BackNext color={'white'} next={'/contacts'} back={'/projects'}/>
    </div>
  )
}
export default About
const Person = ({img, title}) => {
  return (
    <div className='person'>
      <img src={img} alt=""/>
      <div>{title}</div>
    </div>
  )
}
const WorkProc = ({title, count}) => {
  return (
    <div className='work-item'>
        <span>{count}</span>
        {title}
    </div>
  )
}