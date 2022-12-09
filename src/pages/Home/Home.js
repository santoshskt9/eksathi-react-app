import React from 'react'
import Footer from '../../components/Footer/Footer';
import Layout from '../../components/Layout/Layout';
import Hero from '../../components/Hero/Hero';
import './Home.css'
import Card from '../../components/Card/Card';
import Process from '../../components/Process/Process';
import QAList from '../../components/List/QAList';
import Records from '../../components/Records/Records';
import JoinUs from '../../components/JoinUs/JoinUs';
import { Outlet } from 'react-router-dom';

const cardData = [
{
  id: 1,
  title: "Check open request",
  description: "Get Connected with people whom you can support with your expertise. Check open request posted byusers of your domain. Even you can directly discuss your consultancy fees, what else, earn points and get rewarded.",
},
{
  id: 2,
  title: "Connect to ekSathi",
  description: "Get connected with people of your domain and build a team for your project, Get references, discuss your issue. Learn new skills, boost up your startup's, find freelancers.",
},
{
  id: 3,
  title: "Connect via categories",
  description: "Get Connected by exploring the people in different virtues. Need reference for admission, searching for lawyer, need astrologer, wanna discuss for foreign trip, we have an eksathi for you to help you move forward...",
},
{
  id: 4,
  title: "Stories from ekSathi",
  description: "Get connected by reading interesting stories from ekSathi on our platform. People on eksathi have fostered community, learned new skills, started businesses, and made life-long friends. Learn how.",
}];

const Home = () => {
  return (
    <React.Fragment>
        <div className="home pages">
          <Hero/>
          <section className='card-section'>
            <div className="row justify-content-evenly py-5 align-items-center wrap">
              {/* {cardData.map((card,key)=> {
                <Card  
                  title={card.title}
                  description={card.description}  
                />
              })} */}
              <Card/>
            </div>
          </section>
          <section className="section process-section">
            <Process/>
          </section>
          <section className='section QA-section'>
            <QAList/>
          </section>
          <section className="records-section">
            <Records/>
          </section>
          <section className="joinus-section">
            <JoinUs/>
          </section>
        </div>
        <Footer/>
    </React.Fragment>
  )
}

export default Home;