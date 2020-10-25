import React from 'react'
import GoBack from "./GoBack";
import NextPage from "./NextPage";

const Services = () => {
  return (
    <>
      <div className='services'>
        <div className='services-title'>
          <h1>Как мы продвигаем <span>наших клиентов?</span></h1>
        </div>
        <div className="services-item">
          <div className="items-title">
            <span>01</span> Aliquam scelerisque scelerisque
          </div>
          <div className="items-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices feugiat enim duis a.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Ultrices feugiat enim duis a.
          </div>
          <div className="items-title">
            <span>02</span> Aliquam scelerisque scelerisque
          </div>
          <div className="items-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices feugiat enim duis a.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Ultrices feugiat enim duis a.
          </div>
          <div className="items-title">
            <span>03</span> Aliquam scelerisque scelerisque
          </div>
          <div className="items-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices feugiat enim duis a.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Ultrices feugiat enim duis a.
          </div>
          <div className="items-title">
            <span>04</span> Aliquam scelerisque scelerisque
          </div>
          <div className="items-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices feugiat enim duis a.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Ultrices feugiat enim duis a.
          </div>

        </div>

      </div>
      <div className="navigation-pages">
        <GoBack color={'black'} link={'/'}/>
        <NextPage color={'black'} link={'/projects'}/>
      </div>
    </>
  )
}
export default Services