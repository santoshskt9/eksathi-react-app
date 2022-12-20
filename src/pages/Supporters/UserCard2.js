import { Paper } from '@mui/material';
import React from 'react';
import './UserCard.css';
const avtarImg = require('../../resources/img/photo.jpg');

const UserCard2 = () => {
  return (
    <>
      <div id="trends" class="text-light">
          <Paper elevation={3}>
          <div class="p-1 py-2 rounded mb-3 trending-card" >
              <div class="row g-0 justify-content-center">
                  <div class="col-3 p-2">
                      <img src={avtarImg} class="img-fluid rounded-circle" alt="..." />
                  </div>
                  <div class="col-9">
                      <p class="fw-semibold">Saurabh sharma </p>
                      <small class="fw-semibold">PHP FULL STACK DEVELOPER</small>
                      <p><small class="text-muted fw-semibold">Badarpur, New Delhi</small></p>
                      <div class="ratings d-flex justify-content-evenly align-items-center">
                          <p class="pt-2"><i class='bx bxs-star-half text-warning'></i><span>5/5 (200)</span>
                          </p>
                          <button class="btn btn-sm btn-primary rounded-pill">connect</button>
                      </div>
                  </div>
              </div>
          </div>
          </Paper>
          <Paper elevation={3}>
          <div class="trending-card p-1 py-2 rounded mb-3 ">
              <div class="row g-0 justify-content-evenly">
                  <div class="col-3 p-2">
                      <img src={avtarImg} class="img-fluid rounded-circle" alt="..." />
                  </div>
                  <div class="col-9">
                      <p class="fw-semibold">Saurabh sharma </p>
                      <small class="fw-semibold">PHP FULL STACK DEVELOPER</small>
                      <p><small class="text-muted fw-semibold">Badarpur, New Delhi</small></p>
                      <div class="ratings d-flex justify-content-evenly align-items-center">
                          <p class="pt-2"><i class='bx bxs-star-half text-warning'></i><span>5/5 (200)</span>
                          </p>
                          <button class="btn btn-sm btn-primary rounded-pill">connect</button>
                      </div>
                  </div>
              </div>
          </div>
          </Paper>
          <Paper elevation={3}>
          <div class="trending-card p-1 py-2 rounded mb-3 ">
              <div class="row g-0 justify-content-evenly">
                  <div class="col-3 p-2">
                      <img src={avtarImg} class="img-fluid rounded-circle" alt="..." />
                  </div>
                  <div class="col-9">
                      <p class="fw-semibold">Saurabh sharma </p>
                      <small class="fw-semibold">PHP FULL STACK DEVELOPER</small>
                      <p><small class="text-muted fw-semibold">Badarpur, New Delhi</small></p>
                      <div class="ratings d-flex justify-content-evenly align-items-center">
                          <p class="pt-2"><i class='bx bxs-star-half text-warning'></i><span>5/5 (200)</span>
                          </p>
                          <button class="btn btn-sm btn-primary rounded-pill">connect</button>
                      </div>
                  </div>
              </div>
          </div>
          </Paper>
          <Paper elevation={3}>
          <div class="trending-card p-1 py-2 rounded mb-3 ">
              <div class="row g-0 justify-content-evenly">
                  <div class="col-3 p-2">
                      <img src={avtarImg} class="img-fluid rounded-circle" alt="..." />
                  </div>
                  <div class="col-9">
                      <p class="fw-semibold">Saurabh sharma </p>
                      <small class="fw-semibold">PHP FULL STACK DEVELOPER</small>
                      <p><small class="text-muted fw-semibold">Badarpur, New Delhi</small></p>
                      <div class="ratings d-flex justify-content-evenly align-items-center">
                          <p class="pt-2"><i class='bx bxs-star-half text-warning'></i><span>5/5 (200)</span>
                          </p>
                          <button class="btn btn-sm btn-primary rounded-pill">connect</button>
                      </div>
                  </div>
              </div>
          </div>
          </Paper>
          <Paper elevation={3}>
          <div class="trending-card p-1 py-2 rounded mb-3 ">
              <div class="row g-0 justify-content-evenly">
                  <div class="col-3 p-2">
                      <img src={avtarImg} class="img-fluid rounded-circle" alt="..." />
                  </div>
                  <div class="col-9">
                      <p class="fw-semibold">Saurabh sharma </p>
                      <small class="fw-semibold">PHP FULL STACK DEVELOPER</small>
                      <p><small class="text-muted fw-semibold">Badarpur, New Delhi</small></p>
                      <div class="ratings d-flex justify-content-evenly align-items-center">
                          <p class="pt-2"><i class='bx bxs-star-half text-warning'></i><span>5/5 (200)</span>
                          </p>
                          <button class="btn btn-sm btn-primary rounded-pill">connect</button>
                      </div>
                  </div>
              </div>
          </div>
          </Paper>
          <Paper elevation={3}>
          <div class="trending-card p-1 py-2 rounded mb-3 ">
              <div class="row g-0 justify-content-evenly">
                  <div class="col-3 p-2">
                      <img src={avtarImg} class="img-fluid rounded-circle" alt="..." />
                  </div>
                  <div class="col-9">
                      <p class="fw-semibold">Saurabh sharma </p>
                      <small class="fw-semibold">PHP FULL STACK DEVELOPER</small>
                      <p><small class="text-muted fw-semibold">Badarpur, New Delhi</small></p>
                      <div class="ratings d-flex justify-content-evenly align-items-center">
                          <p class="pt-2"><i class='bx bxs-star-half text-warning'></i><span>5/5 (200)</span>
                          </p>
                          <button class="btn btn-sm btn-primary rounded-pill">connect</button>
                      </div>
                  </div>
              </div>
          </div>
          </Paper>
      </div>
      <button id="showMore" class="btn btn-primary">show more</button>
    </>
  )
}

export default UserCard2;