import React, { useState } from 'react';
import Drawer from '../Drawer/Drawer';
import NavBar from '../NavBar/NavBar';
import Page from '../Page/Page';

const Layout = (props) => {
  const [stat, setStat] = useState(true);

  const toggleStatus = (status) => {
    console.log(status);
    setStat(status);
  } 

  return (
    <React.Fragment>
        <NavBar toggle={toggleStatus}/>
          <Drawer status={stat}/>
        {/* <Page/> */}
    </React.Fragment>
  )
}

export default Layout;