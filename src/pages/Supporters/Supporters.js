import React from 'react';
import './Supporters.css';
import UserCard1 from './UserCard1';
import UserCard2 from './UserCard2';

const Supporters = () => {
  return (
    <React.Fragment>
      <div className="pages">
        <div className="container-fluid">
          <div className="row">
            <div className="col col-2.5 " >
              <section className="">
                <div className="sorts">
                  <h5>Sort By:</h5>
                  <form action="" className='d-grid gap-2'>
                    <select name="sort" id="sort" class="form-select">
                      <option value="Recommended" selected>Recommended</option>
                      <option value="Recent">Recent</option>
                    </select>
                    <button className='btn btn-warning my-3'>Sort</button>
                  </form>
                </div>
                <hr/>
                <div className="filters">
                  <h5>Filter By:</h5>
                  <form action="" className='d-grid gap-2'>
                  <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Category
                        </button>
                      </h2>
                      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          <input type="text" className='form-control' />
                          <div className="form-check">
                            <input className='' type='checkbox' name='full-stack'/>
                            <label for='full-stack'>Full Stack</label>
                          </div>
                          <div className="form-check">
                            <input className='' type='checkbox' name='frontend-developer'/>
                            <label for='frontend-developer'>Frontend Developer</label>
                          </div>
                          <div className="form-check">
                            <input className='' type='checkbox' name='backend-developer'/>
                            <label for='backend-developer'>Backend Developer</label>
                          </div>
                          <div className="form-check">
                            <input className='' type='checkbox' name='nodejs-developer'/>
                            <label for='nodejs-developer'>NodeJs Developer</label>
                          </div>
                          <div className="form-check">
                            <input className='' type='checkbox' name='react-developer'/>
                            <label for='react-developer'>React Developer</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Location
                        </button>
                      </h2>
                      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          <input class="form-control shadow-sm rounded mb /-3" type="search" placeholder="Search.."/>
                          <p><input type="checkbox" value="" class="me-1" /><label>Andhra Pradesh</label></p>
                          <p><input type="checkbox" value="" class="me-1" /><label>Arunachal Pradesh</label></p>
                          <p><input type="checkbox" value="" class="me-1" /><label>Assam</label></p>
                          <p><input type="checkbox" value="" class="me-1" /><label>Bihar</label></p>
                          <p><input type="checkbox" value="" class="me-1" /><label>Chhattisgarh</label></p>
                          <p><input type="checkbox" value="" class="me-1" /><label>Goa</label></p>
                          <p><input type="checkbox" value="" class="me-1" /><label>Gujarat</label></p>
                          <p><input type="checkbox" value="" class="me-1" /><label>Haryana</label></p>
                          <p><input type="checkbox" value="" class="me-1" /><label>Himachal Pradesh</label></p>
                          <p><input type="checkbox" value="" class="me-1" /><label>Jammu and Kashmir</label></p>
                          <p><input type="checkbox" value="" class="me-1" /><label>Jharkhand</label></p>
                          <p><input type="checkbox" value="" class="me-1" /><label>Karnataka</label></p>
                          <p><input type="checkbox" value="" class="me-1" /><label>Kerala</label></p>
                          <p><input type="checkbox" value="" class="me-1" /><label>Madhya Pradesh</label></p>
                          <p><input type="checkbox" value="" class="me-1" /><label>Maharashtra</label></p>
                          <p><input type="checkbox" value="" class="me-1" /><label>Manipur</label></p>
                          <p><input type="checkbox" value="" class="me-1" /><label>Meghalaya</label></p>
                          <p><input type="checkbox" value="" class="me-1" /><label>Mizoram</label></p>
                          <p><input type="checkbox" value="" class="me-1" /><label>Nagaland</label></p>
                        </div> 
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          Rating
                        </button>
                      </h2>
                      <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        <input class="form-control shadow-sm rounded mb-3" type="search"
                              placeholder="Search.." />
                          <p><input type="checkbox" value="" class="me-1" /><label>4* &amp; above</label>
                          </p>
                          <p><input type="checkbox" value="" class="me-1" /><label>3* &amp; above</label>
                          </p>
                          <p><input type="checkbox" value="" class="me-1" /><label>2* &amp; above</label>
                          </p>
                          <p><input type="checkbox" value="" class="me-1" /><label>1* &amp; above</label>
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* <!-- submit button  --> */}
                      <button type="button" class="btn btn-outline-success my-3">Apply</button>
                      <button class="btn btn-outline-danger my-3 mx-3"
                          type="reset">Reset</button>
                  </div>
                  </form>
                </div>
              </section>
            </div>
            <div className="col col-7">
              <section className="section">
              <div className="row">
                <div className="col">
                <h4>Our Supporters</h4>
                </div>
                <div className="col d-flex justify-content-end">
                  <button className='btn btn-warning mx-2'>View all</button>
                  <button className='btn btn-success'>My Connections</button>
                </div>
              </div>
              <hr />
              <div className="users">
                
                  <UserCard1 />
              </div>
              </section>
            </div>
            <div className="col col-3">
              <section className="section">
              <h4>Trending users in Area</h4>
              <hr />
                  <UserCard2 />
              </section>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Supporters;