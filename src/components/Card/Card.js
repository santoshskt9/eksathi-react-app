import React from 'react'
import './Card.css';

const Card = () => {
  return (
    <React.Fragment>
        <div class="infocard">
            <div class="card-side front card1F shadow">
              <h5>Check open request</h5>
            </div>
            <div class="card-side back card1B shadow">
              <div>Get Connected with people whom you can support with your expertise. Check open request posted by
                users of your domain. Even you can directly discuss your consultancy fees, what else, earn points and
                get rewarded.
              </div>
              <button class="mt-3 btn fw-bold btn-outline-warning rounded">Check Open Request</button>
            </div>
        </div>
        
          <div class="infocard">
            <div class="card-side front card2F shadow">
              <h5>Connect to ekSathi</h5>
            </div>
            <div class="card-side back card2B shadow">
              <div>Get connected with people of your domain and build a team for your project, Get references, discuss
                your issue. Learn new skills, boost up your startup's, find freelancers.
              </div>
              <button class="mt-3 btn fw-bold btn-outline-primary rounded"> Connect ekSathi</button>
            </div>
          </div>
          
          <div class="infocard">
            <div class="card-side front card3F shadow">
              <h5>Connect via categories</h5>
            </div>
            <div class="card-side back card3B shadow">
              <div>Get Connected by exploring the people in different virtues. Need reference for admission, searching
                for lawyer, need astrologer, wanna discuss for foreign trip, we have an eksathi for you to help you move
                forward...
              </div>
              <button class="mt-3 btn fw-bold btn-outline-primary rounded"> Connect Via Categories</button>
            </div>
          </div>
          
          <div class="infocard">
            <div class="card-side front card4F shadow">
              <h5>Stories from ekSathi</h5>
            </div>
            <div class="card-side back card4B shadow">
              <div>Get connected by reading interesting stories from ekSathi on our platform. People on eksathi have
                fostered community, learned new skills, started businesses, and made life-long friends. Learn how.</div>
              <button class="mt-3 btn fw-bold btn-outline-warning rounded"> Stories</button>
            </div>
          </div>
    </React.Fragment>
  )
}

export default Card;