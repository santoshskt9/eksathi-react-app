import React from 'react';
import './Process.css';

// Image Imports
const ProfessionImg = require("../../resources/img/profession.png");
const StartImg = require("../../resources/img/start.png");
const ShareImg = require("../../resources/img/share.png");
const HeadHuntingImg = require("../../resources/img/headhunting.png");


const Process = () => {
  return (
    <React.Fragment>
        <div id="section3">
        <div class="row flex-direction-row justify-content-center px-4 py-5 ">
          {/* Side Image */}
          <div class="col-md-6 col-sm-12 ">
            <img src={ProfessionImg} class="moving-img d-block m-auto" width="90%" alt="" />
          </div>
          {/* Information Column */}
          <div
            class="col-md-6 col-sm-12 px-3 py-4 d-flex flex-column align-items-start justify-content-evenly shadow bg-light rounded info">
            <div class="row ">
              <div class="col-1 me-3">
                <img src={StartImg} class="img-spc align-center mt-2" width="37px" alt=""/>
                <div class="vl"></div>
              </div>
              <div class="col ps-4">
                <h2 class="fs-4 text-secondary">Start your ekSathi Connection</h2>
                <p class="fs-6">It will take less than 40sec. Just tell us a few details about you</p>
              </div>
            </div>
            <div class="row">
              <div class="col-1 me-3">
                <img src={ShareImg} class="img-spc rounded mt-3" width="34px" alt=""/>
                <div class="vl"></div>
              </div>
              <div class="col ps-4">
                <h2 class="fs-4 text-secondary">Post your request</h2>
                <p class="fs-6">All you need to do is just Post your request, in no time recommendations of user would
                  be shown and
                  you
                  can connect to your eksathi through chat or directly. Yes its open so you can contact directly</p>
              </div>
            </div>
            <div class="row">
              <div class="col-1 me-3">
                <img src={HeadHuntingImg} class="img-spc mt-3" width="34px" alt=""/>
              </div>
              <div class="col  ps-4">
                <h2 class="fs-4 text-secondary">Get connected to expert in their Fields</h2>
                <p class="fs-6">Experts from our platform will approach you, get connected and share your success story
                </p>
              </div>
            </div>
            <p class="fw-semibold text-center"> Note :You can share your request link on social media for quicker
              response</p>

          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Process;