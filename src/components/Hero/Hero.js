import React, {useState} from 'react';
import RequestDialog from '../Dialog/RequestDialog';
import './Hero.css'

const heroImg = require('../../resources/img/hero.jpg');





const Hero = () => {

  const [showDialog, setShowDialog] = useState(false);

  const handleClickOpen = () => {
    setShowDialog(true);
  };

  const handleClose = (status) => {
    setShowDialog(status);
  };

  
    
  return ( 
    <div id="hero" className='section section-hero'>
        <div className="container">
          <div className="row">
            <div className=" col-md-6 hero-info">
                <div className="hero-title">
                    <p>Build better <span>Connection</span> with eksathi</p>
                </div>
                <div className="hero-description">
                    <h4>Have a concern or want to hire, share with us. Our AI system will connect you to your eksathi !!. Use your knowledge and time to help others,get connected and deliver your services</h4>
                </div>
                <div className="hero-actions d-flex">
                    <button className='btn btn-primary btn-lg mx-1' 
                      onClick={()=> handleClickOpen()}
                    >Post Requests</button>
                    <button className='btn btn-primary btn-lg mx-1'>Connect to eksathi</button>
                    
                    <RequestDialog showDialog={showDialog} status={handleClose} />

                  {/* Model */}

                  <div class="modal" tabindex="-1" role="dialog">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title">Modal title</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <p>Modal body text goes here.</p>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-primary">Save changes</button>
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Model */}

                </div>

            </div>
           
           {/* Hero Image */}
            <div className="col-md-6 hero-image">
              <img src={heroImg} alt="heor" className="rounded-4 shadow-lg" width="100%"/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero;