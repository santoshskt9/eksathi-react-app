import React from 'react'

const AvatarImg = require('../../resources/img/profile_pic.png');

const Requests = () => {
  return (
    <React.Fragment>
      <div className="pages">
        <section className=" section request-section">
         <form action="" className='form-inline d-flex'>
            <input className="form-control mr-sm-2 h-50" type="search" placeholder="Search" aria-label="Search" />
            <button className='btn btn-outline-success my-2 my-sm-0 h-50' style={{marginLeft: '10px'}}>Search</button>
         </form>
        </section>
        <main className='container-fluid'>
          <div className="row">
          <section className='section result-section col col-8' style={{marginRight: '20px'}}>
            <div className="row d-flex justify-content-between">
              <div className="col col-6">
                <h4>Search results: <span>1145</span> Found</h4>
              </div>
              <div className="col col-6 d-flex justify-content-end">
                <button className='btn ' type='submit'>Newest</button>
                <button className='btn ' type='submit'>Active</button>
                <button className='btn ' type='submit'>Unanswered</button>
                <button className='btn btn-warning' type='submit'>Filter</button>
              </div>
            </div>
            <div className="row">
              <div className="col">
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
              </div>
            </div>
          </section>
          <section className='section result-section col cal-4'>
            <h4>Trending requests</h4>
          </section>
          </div>
        </main>
      </div>
    </React.Fragment>
  )
}

export default Requests;