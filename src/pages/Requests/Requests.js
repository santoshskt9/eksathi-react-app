import React from 'react'
import ListItems from '../../components/List/ListItem';
import DataTable from '../../components/Table/DataTable';
import {  useSnackbar } from 'notistack';
const AvatarImg = require('../../resources/img/profile_pic.png');

const Requests = () => {
  const { enqueueSnackbar } = useSnackbar();
  const handleSnack = (variant) => {
    // var varient = 'error';
    enqueueSnackbar('1200 results found!', { variant });
  }

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
                <button className='btn ' type='submit' onClick={() => handleSnack('success')}>Newest</button>
                <button className='btn ' type='submit'>Active</button>
                <button className='btn ' type='submit'>Unanswered</button>
                <button className='btn btn-warning' type='submit'>Filter</button>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <DataTable/>
              </div>
            </div>
          </section>
          <section className='section result-section col cal-4'>
            <h4>Trending requests</h4>
            <ListItems/>
          </section>
          </div>
        </main>
      </div>
    </React.Fragment>
  )
}

export default Requests;