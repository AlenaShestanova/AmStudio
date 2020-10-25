import React from 'react'
import img from '../assets/img/img1.svg'
import NextPage from "./NextPage";

const Main = () => {
  return (
    <div className='main'>
      <div className='main-desc'>
        <div className='item'><img src={img} alt=""/></div>
        <div className='right item'>
          <h1> am <br/>studio </h1>
          <p>Задача организации, в особенности же рамки и место обучения кадров представляет собой интересный
            эксперимент проверки новых предложений, занимаемых участниками в отношении поставленных
            задач.</p>
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
              <h2>Lorem ipsum dolor sit amet, consectetur .</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra malesuada tincidunt
                urna ac tincidunt sit ornare nec tristique. Purus et quis adipiscing mattis imperdiet
                elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra malesuada
                tincidunt urna ac tincidunt sit ornare nec tristique. Purus et quis adipiscing
                mattis</p>
            </div>
          </div>
        </div>
        <div className="main-content-container left">
          <div className='desc-container desc-container-left'>


            <div className='desc desc-left'>
              <h2>Lorem ipsum dolor sit amet, consectetur .</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra malesuada tincidunt
                urna ac tincidunt sit ornare nec tristique. Purus et quis adipiscing mattis imperdiet
                elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra malesuada
                tincidunt urna ac tincidunt sit ornare nec tristique. Purus et quis adipiscing
                mattis</p>
            </div>
            <div>
              <div className='img img-left'></div>
            </div>

            {/*<div>*/}
            {/*  <div className='img img-left'></div>*/}
            {/*  <div className="main-next-page">*/}
            {/*    next page <br/>*/}
            {/*    <span>*/}
            {/*       <img src={next} alt=""/></span>*/}
            {/*  </div>*/}
            {/*</div>*/}

          </div>
          <div className='creative creative-left'> Creative</div>
        </div>
        <NextPage color={'white'} link={'/services'}/>
      </div>

    </div>

  )
}
export default Main