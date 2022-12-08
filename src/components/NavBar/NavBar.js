import React, {useState} from 'react';
import {FaBars} from 'react-icons/fa';
import './NavBar.css';
const logo =  require('../../resources/eksathiLogo.png');

const NavBar = (props) => {
    const [toggleMenu, setToggleMenu] = useState(false);
    function toggleHandler() {
        if (toggleMenu) {
            props.toggle(true);
            setToggleMenu(false);
        } else {
            props.toggle(false);
            setToggleMenu(true);
        }
    }
  return (
    <React.Fragment>
        <nav className="navbar bg-light">
            <div className="container-fluid">
                <div className="drawer-ico d-flex align-items-center">
                    <FaBars onClick={toggleHandler} className='drawer-ico'/>
                    <a className="navbar-brand" href='/'>
                        <img src={logo} alt="EkSathi" height="55px"/>
                    </a>
                </div>
                <div className="d-flex">
                    <button className="btn btn-primary me-2">Sign Up</button>
                    <button className="btn btn-outline-primary" type="submit">Login</button>
                </div>
            </div>
        </nav>
    </React.Fragment>
  )
}

export default NavBar;