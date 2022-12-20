import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <React.Fragment>
      <div className="pages">
      <section id="footer" className='section'>
        <h1>Join our supportive community</h1>
        <div className="row p-2">
          <div className="col-md-5 col-sm-12">
            <h2>ekSaathi</h2>
            <small>“Learn from other's experience. Because you don't have the long life to learn everything by making all
              mistakes. You really don't have to touch the fire to see how hot it is ”
              <br/>-Aacharya Chanakya
            </small>
          </div>
          <div className=" col-md-7 col-sm-12 row" style={{marginLeft:'-48px'}}>
            <div className="col-5">
              <ul>
                <li>
                  <h3>Company</h3>
                </li>
                <li><a href="#">About</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
              </ul>
            </div>
            <div className="col-7">
              <ul>
                <li>
                  <h3>Contact Us</h3>
                </li>
                <li><a href="#">support@ekSaathi.com</a></li>
                <li>
                  <i className='bx bxl-facebook-square'></i>
                  <i className='bx bxl-instagram' ></i>
                  <i className='bx bxl-whatsapp'></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      </div>
    </React.Fragment>
  )
}

export default Footer;