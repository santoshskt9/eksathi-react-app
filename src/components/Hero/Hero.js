import React from 'react';
import './Hero.css'
const heroImg = require('../../resources/img/hero.jpg');


const Hero = () => {
    
  return ( 
    <div id="hero" className='section section-hero'>
        <div className="container">
          <div className="row">
            <div className=" col-md-6 hero-info">
                <div className="hero-title">
                    <p>Build better <span>Connection</span> with eksathi</p>
                </div>
                <div className="hero-description">
                    <h4>Have a concern or want to hire, share with us. Our AI system will connect you to your eksathi !!. Use your knowledge and time to help others,get connected and deliver your services</h4>
                </div>
                <div className="hero-actions d-flex">
                    <button className='btn btn-primary btn-lg mx-1'>Post Requests</button>
                    <button className='btn btn-primary btn-lg mx-1'>Connect to eksathi</button>
                </div>

            </div>
           
           {/* Hero Image */}
            <div className="col-md-6 hero-image">
              <img src={heroImg} alt="heor" className="rounded-4 shadow-lg" width="100%"/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero;