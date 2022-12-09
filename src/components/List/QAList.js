import React from 'react';
import './QAList.css';

// Image Import 
const AvatarImg = require('../../resources/img/profile_pic.png');
const QAImg = require("../../resources/img/Q&A.png");

const QAList = () => {
  return (
    <React.Fragment>
        <div id="section4">
        <div className="row ">
          {/* recent request box  */}
          <div className="col-md-6 col-sm-12 mb-3 request-container">
            <h1>RECENT REQUESTS</h1>
            {/* total container  */}
            <div className="question-box">
              {/* single question  */}
              <div className="question">
                <img src={AvatarImg} alt="avatar" id="avatar" width="50" />
                <div className="text">
                  What is the preferred way to be a frontend developer?
                </div>
              </div>
              {/* single answer  */}
              <div className="answer">
                <img src={AvatarImg} alt="avatar" id="avatar" width="50" />
                <div className="text">
                  You can easily start to learn from HTML & CSS once you get
                  enough knowledge move proceed to Bootstrap,Javascript &
                  ReactJs
                </div>
                <button className="btn d-inline m-auto">Vote | 48</button>
                <button className="btn  d-inline m-auto">Answer</button>
              </div>
              <hr/>
              <div className="question">
                <img src={AvatarImg} alt="avatar" id="avatar" width="50" />
                <div className="text">
                  Where can i download Spiderman into spiderverse movie in Hindi
                </div>
              </div>
              <div className="answer">
                <img src={AvatarImg} alt="avatar" id="avatar" width="50" />
                <div className="text">
                  You can visit to UHD movies by searching in google to get this movie in ultra HD
                </div>
                <button className="btn d-inline m-auto">Vote | 188</button>
                <button className="btn d-inline m-auto">Answer</button>
              </div>
              <hr/>
              <div className="question">
                <img src={AvatarImg} alt="avatar" id="avatar" width="50" />
                <div className="text">
                  What is the preferred way to be a frontend developer?
                </div>
              </div>
              <div className="answer">
                <img src={AvatarImg} alt="avatar" id="avatar" width="50" />
                <div className="text">
                  typing.....
                </div>
                <button className="btn d-inline m-auto">Vote | 8</button>
                <button className="btn d-inline m-auto ">Answer</button>
              </div>
            </div>
              <button className="btn btn-spc shadow">View All Requests</button>
          </div>
          {/* side image */}
          <div className="col-md-6 col-sm-12">
            <img src={QAImg} className="d-block m-auto" width="80%" alt="" />
            
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default QAList;