import React from 'react';
import './Drawer.css';
import {FaHome} from 'react-icons/fa';
import {TiDocumentText} from 'react-icons/ti';
import {BiGitPullRequest} from 'react-icons/bi';
import {MdOutlinePeopleAlt, MdOutlineChat} from 'react-icons/md'; 
import { NavLink } from 'react-router-dom';

const Drawer = (props) => {

    
    

  return (
    <div id="mySidenav" className={props.status?'sidenav':'sidebar drawer-collapse'}>
        {/* <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a> */}
        <NavLink to='/' className={props.status?'nav-link':'nav-link nav-link-collapse'}>
          <FaHome className={props.status?'icon':'icon-collapse'}/> 
          <div className={props.status?'':'link-text'}>Home</div>
        </NavLink>
        {/* <NavLink  to="/model" className='d-flex align-items-center nav-link justify-content-center'> */}
        <NavLink  to="/model" className={props.status?'nav-link':'nav-link nav-link-collapse'}>
          <TiDocumentText className={props.status?'icon':'icon-collapse'}/> 
          <div className={props.status?'':'link-text'}>Post Requests</div>
        </NavLink>
        <NavLink to='/requests' className={props.status?'nav-link':'nav-link nav-link-collapse'}>
          <BiGitPullRequest className={props.status?'icon':'icon-collapse'}/> 
          <div className={props.status?'':'link-text'}>Requests</div>
        </NavLink>
        <NavLink to='/our-supporters' className={props.status?'nav-link':'nav-link nav-link-collapse'}>
          <MdOutlinePeopleAlt className={props.status?'icon':'icon-collapse'}/> 
          <div className={props.status?'':'link-text'}>Our Supporters</div>
        </NavLink>
        <NavLink to='/contactus' className={props.status?'nav-link':'nav-link nav-link-collapse'}>
          <MdOutlineChat className={props.status?'icon':'icon-collapse'}/> 
          <div className={props.status?'':'link-text'}>Contact Us</div>
        </NavLink>


        {/* <NavLink to='/posts' className='d-flex align-items-center nav-link'>
          <FaHome className={props.status?'icon':'icon-collapse'}/> 
          <div className='link-text'>Posts</div>
        </NavLink>
        <NavLink  to="/quiz" className='d-flex align-items-center nav-link'>
          <TiDocumentText className={props.status?'icon':'icon-collapse'}/> 
          <div className='link-text'>Quiz</div>
        </NavLink>
        <NavLink to='/material' className='d-flex align-items-center nav-link'>
          <BiGitPullRequest className={props.status?'icon':'icon-collapse'}/> 
          <div className='link-text'>Material</div>
        </NavLink>
        <NavLink to='/jobs' className='d-flex align-items-center nav-link'>
          <MdOutlinePeopleAlt className={props.status?'icon':'icon-collapse'}/> 
          <div className='link-text'>Jobs</div>
        </NavLink>
        <NavLink to='/about' className='d-flex align-items-center nav-link'>
          <MdOutlineChat className={props.status?'icon':'icon-collapse'}/> 
          <div className='link-text'>About Us</div>
        </NavLink> */}

        
        
    </div>
  )
}

export default Drawer;