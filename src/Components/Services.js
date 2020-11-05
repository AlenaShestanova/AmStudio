import React, {useEffect} from 'react'
import BackNext from "./BackNext";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div className='services'>
        <div className='services-title'>
          <h1>Как мы продвигаем <br/><span>наших клиентов?</span></h1>
        </div>
        <div className="services-item">
          <ServicesItem
            count={'01'}
            title={'Разработка лендинга / сайта-визитки:'}
            desc={'Pазработка фирменного стиля, создание макета, реализация со стороны frontend, деплой лендинга'}
            price={'Цена: от 20 000 рублей'}
          />
          <ServicesItem
            count={'02'}
            title={'Разработка веб-приложений / веб-сайта'}
            desc={' разработка фирменного стиля, создание макета, реализация со стороны frontend и backend, деплой проекта'}
            price={ 'Цена: от 40 000 рублей'}
          />
          <ServicesItem
            count={'03'}
            title={'Разработка Telegram/VK/whatsapp - bot:'}
            desc={' Pазработка алгоритмов работы бота, подключение базы данных, внедрение новых решений в работу бота'}
            price={ 'Цена: от 10 000 рублей'}
          />
          <ServicesItem
            count={'04'}
            title={'Интеграция новых it-решений в ваш готовый проект:'}
            desc={'От добавления дизайн-решений до доработки алгоритмов работы'}
            price={ 'Цена: договорная (от 10 000 рублей)'}
          />
          <ServicesItem
            count={'05'}
            title={'Администрирование проекта:'}
            desc={'Выбор подходящего сервера, выгрузка проекта на хостинг, настройка сервера, поддержка работоспособности вашего проекта на сервере'}
            price={ 'Цена: от 10 000 рублей'}
          />
          <ServicesItem
            count={'06'}
            title={'Разработка дизайна для вашего продукта:'}
            desc={'Логотип, визитки, макет-сайта, рекламные креативы'}
            price={ 'Цена: от 10 000 рублей'}
          />
        </div>
      </div>
      <BackNext color={'black'} next={'/projects'} back={'/'}/>
    </>
  )
}
export default Services
const ServicesItem = ({title, desc,count,price}) => {
  return (
    <>
      <div className="items-title">
        <span>{count}</span> {title}
      </div>
      <div className="items-desc">
        {desc}
       <span className='items-price'> {price}</span>
      </div>

    </>
  )
}