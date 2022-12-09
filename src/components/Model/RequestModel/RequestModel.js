import React from 'react';

const RequestModel = (props) => {
  return (
    <React.Fragment>
       {/* Model */}
        
       <section className="modal fade shadow" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false"
        tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form action="">
                <div className="mb-4">
                  <h5>Post Request</h5>
                  <input type="text" className="form-control my-3" placeholder="Title..."/>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"
                    placeholder="Description..."></textarea>
                </div>
                <hr/>
                <h5>Requirement type</h5>
                <input className="form-check-input p-0" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label className="form-check-label pe-4 me-2" for="flexRadioDefault1">
                  Immediate
                </label>
                <label className="form-check-label" for="flexRadioDefault1">
                  <input className="form-check-input p-0" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                  <input className="datepicker p-2 rounded" type="date"/>

                  Till date
                </label>
                <h6 className="mt-4">Add Categories</h6>
                <div className="row g-3 p-2" style={{gap: '2%'}}>
                  <select className="col form-select" aria-label="Default select example">
                    <option selected>Open to select categories</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Others</option>
                  </select>
                  <input type="text" className="col form-control" name="ifotherCate" placeholder="if others specify"/>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
       
    </React.Fragment>
  )
}

export default RequestModel;