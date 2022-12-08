import React from 'react';
import './QAList.css';

// Image Import 
const AvatarImg = require('../../resources/img/profile_pic.png');
const QAImg = require("../../resources/img/Q&A.png");

const QAList = () => {
  return (
    <React.Fragment>
        <div id="section4">
        <div class="row ">
          {/* recent request box  */}
          <div class="col-md-6 col-sm-12 mb-3 request-container">
            <h1>RECENT REQUESTS</h1>
            {/* total container  */}
            <div class="question-box">
              {/* single question  */}
              <div class="question">
                <img src={AvatarImg} alt="avatar" id="avatar" width="50" />
                <div class="text">
                  What is the preferred way to be a frontend developer?
                </div>
              </div>
              {/* single answer  */}
              <div class="answer">
                <img src={AvatarImg} alt="avatar" id="avatar" width="50" />
                <div class="text">
                  You can easily start to learn from HTML & CSS once you get
                  enough knowledge move proceed to Bootstrap,Javascript &
                  ReactJs
                </div>
                <button class="btn d-inline m-auto">Vote | 48</button>
                <button class="btn  d-inline m-auto">Answer</button>
              </div>
              <hr/>
              <div class="question">
                <img src={AvatarImg} alt="avatar" id="avatar" width="50" />
                <div class="text">
                  Where can i download Spiderman into spiderverse movie in Hindi
                </div>
              </div>
              <div class="answer">
                <img src={AvatarImg} alt="avatar" id="avatar" width="50" />
                <div class="text">
                  You can visit to UHD movies by searching in google to get this movie in ultra HD
                </div>
                <button class="btn d-inline m-auto">Vote | 188</button>
                <button class="btn d-inline m-auto">Answer</button>
              </div>
              <hr/>
              <div class="question">
                <img src={AvatarImg} alt="avatar" id="avatar" width="50" />
                <div class="text">
                  What is the preferred way to be a frontend developer?
                </div>
              </div>
              <div class="answer">
                <img src={AvatarImg} alt="avatar" id="avatar" width="50" />
                <div class="text">
                  typing.....
                </div>
                <button class="btn d-inline m-auto">Vote | 8</button>
                <button class="btn d-inline m-auto ">Answer</button>
              </div>
            </div>
              <button class="btn btn-spc shadow">View All Requests</button>
          </div>
          {/* side image */}
          <div class="col-md-6 col-sm-12">
            <img src={QAImg} class="d-block m-auto" width="80%" alt="" />
            
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default QAList;