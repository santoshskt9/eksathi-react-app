import React from 'react';
import './Records.css';

const Records = () => {
  return (
    <React.Fragment>
        <div id="section6"
        class="row text-center justify-content-evenly row-cols-1 row-cols-md-2 g-4 p-5 mx-md-5 align-items-center">
        <h1 class="col-md-12 my-5" align="center">Our records</h1>
        <div class="col col-md-2 px-2 py-4 rounded">
            <p className='number'>4100</p>
          <h6 class="card-title">Happy Users</h6>
          <h2><span id="obj1"></span>+</h2>
        </div>
        <div class="col col-md-2 px-2 py-4 rounded">
        <p className='number'>280</p>
          <h6 class="card-title">Categories Covered</h6>
          <h2><span id="obj2"></span>+</h2>
        </div>
        <div class="col col-md-2 px-2 py-4 rounded">
        <p className='number'>390</p>
          <h6 class="card-title">Requests Raised</h6>
          <h2><span id="obj3"></span>+</h2>
        </div>
        <div class="col col-md-2 px-2 py-4 rounded">
            <p className='number'>1000</p>
          <h6 class="card-title"> Connected ekSathi </h6>
          <h2><span id="obj4"></span>+</h2>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Records;