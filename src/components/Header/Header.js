import React from 'react';
import { Outlet } from 'react-router-dom';
import Layout from '../Layout/Layout';

const Header = () => {
  return (
    <React.Fragment>
        <Layout/>
        <Outlet/>
    </React.Fragment>
  )
}

export default Header;