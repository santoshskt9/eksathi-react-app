import React, {useState} from 'react';
import {FaBars} from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';
import { useNavigate } from 'react-router-dom';
import LoginModel from '../Model/Login/LoginModel';
const logo =  require('../../resources/eksathiLogo.png');

const NavBar = (props) => {

    const navigate = useNavigate();

    const [toggleMenu, setToggleMenu] = useState(false);
    const [showModel, setShowModel] = useState(false);

    function toggleHandler() {
        if (toggleMenu) {
            props.toggle(true);
            setToggleMenu(false);
        } else {
            props.toggle(false);
            setToggleMenu(true);
        }
    }

    const gotoLogin = () => {
        // navigate('/auth/login');
       if (showModel) {
        setShowModel(false);
       } else {
        setShowModel(true);
       }
    }

    const gotoSignUp = () => {
        navigate('/auth/signup');
    }

  return (
    <React.Fragment>
        <nav className="navbar bg-light">
            <div className="container-fluid">
                <div className="drawer-ico d-flex align-items-center">
                    <FaBars onClick={toggleHandler} className='drawer-ico'/>
                    <Link className="navbar-brand" to='/'>
                        <img src={logo} alt="EkSathi" height="55px"/>
                    </Link>
                </div>
                <div className="d-flex">
                    {/* <button className='btn btn-primary'>Show</button> */}
                    <div className={showModel?"signin-model":"signin-model hide"}>
                        <LoginModel/>

                    </div>
                    
                    <button className="btn btn-primary me-2" onClick={() => gotoSignUp()}>Sign Up</button>
                    <button className="btn btn-outline-primary" onClick={() => gotoLogin()}>Login</button>
                </div>
            </div>
        </nav>
    </React.Fragment>
  )
}

export default NavBar;