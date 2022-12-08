import React from 'react';
import './Drawer.css';
import {FaHome} from 'react-icons/fa';
import {TiDocumentText} from 'react-icons/ti';
import {BiGitPullRequest} from 'react-icons/bi';
import {MdOutlinePeopleAlt, MdOutlineChat} from 'react-icons/md'; 

const Drawer = (props) => {

    
    

  return (
    <div id="mySidenav" className={props.status?'sidenav':'sidebar drawer-collapse'}>
        {/* <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a> */}
        <a href="#" className='d-flex align-items-center'>
          <FaHome className='icon'/> 
          <div className='link-text'>Home</div>
        </a>
        <a href="#" className='d-flex align-items-center'>
          <TiDocumentText className='icon'/> 
          <div className='link-text'>Post Requests</div>
        </a>
        <a href="#" className='d-flex align-items-center'>
          <BiGitPullRequest className='icon'/> 
          <div className='link-text'>Requests</div>
        </a>
        <a href="#" className='d-flex align-items-center'>
          <MdOutlinePeopleAlt className='icon'/> 
          <div className='link-text'>Our Supporters</div>
        </a>
        <a href="#" className='d-flex align-items-center'>
          <MdOutlineChat className='icon'/> 
          <div className='link-text'>Contact Us</div>
        </a>
    </div>
  )
}

export default Drawer;