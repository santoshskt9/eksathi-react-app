import React from 'react';
import './JoinUs.css';

const AroundWorldImg = require('../../resources/img/aroundtheworld.png');

const JoinUs = () => {
  return (
    <React.Fragment>
        <div id="section5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-sm-12">
            <h1 className="px-4">Have something to say?</h1>
            <hr width="30%" style={{color:'white', height:'3px'}} />
            <h2 className="px-4">So Join Now ekSaathi</h2>
            <section style={{display:'block'}} className="form-design">
              <div id="container">
                <div className="form-container sign-in-container">
                  <form action="#" className="p-4 rounded-3" style={{position:'static', margin:'auto'}}>
                    <h1>Create Account</h1>
                    <h5></h5>
                    <div className="social-container my-1" align="center">
                      <a href="#" className="fb me-2"><i className='bx bxl-facebook-circle fw-bold'></i></a>
                      <a href="#" className="g"><i className='bx bxl-google-plus-circle  text-danger fw-semibold'></i></a>
                    </div>
                    <span>-----------------------------------------</span>
                    <input className="" type="text" placeholder="Name" />
                    <input className="" type="email" placeholder="Email" />
                    <input className="" type="password" placeholder="Password" />
                    <button className="btn rounded  mt-4">Sign Up</button>
                    <small className="mt-2">Already have an account <a className="text-success">Sign
                        In</a></small>
                  </form>
                </div>
              </div>
            </section>
          </div>
          {/* side image  */}
          <div className="col-md-6 col-sm-12">
            <img src={AroundWorldImg} alt="" width="90%"/>
            <h3>"Become a Part of community of thousands"</h3>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default JoinUs