import React from 'react'
import "./Home.css"
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
  return (
    <div>
      <section className='hero' id ='home'>
        <div className="container f_flex top">
          <div className='left-top'>
            <h3> WELCOME TO MY WORLD</h3>
            <h1> Hii ,I'am <span> MILAN VERMA</span> </h1>
            <h2>a <span> 
            <Typewriter words={[" Coder.", " Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
            </span>
            </h2>
            <p> I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that. </p>
            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>BUILD WITH ME</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                    <i class='fab fa-facebook-f' ></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-instagram'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-linkedin-in'></i>
                  </button>
                </div>
              </div>
            
              <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                <i class="fa-brands fa-react"></i>
                </button>
                <button className='btn_shadow'>
                <i class="fa-brands fa-java"></i>
                </button>
                <button className='btn_shadow'>
                <i class="fa-brands fa-js"></i>
                </button>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src='' alt='' />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
