import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import ContactUs from './pages/ContactUs/ContactUs';
import Requests from './pages/Requests/Requests';
import Supporters from './pages/Supporters/Supporters';
import Error404 from './pages/Error/Error404';
import Header from './components/Header/Header';
import RequestModel from './components/Model/RequestModel/RequestModel';

const mainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Header /> }>
            <Route index element={<Home/>} />
            <Route path='/requests' element={<Requests/>} />
            <Route path='/our-supporters' element={<Supporters/>} />
            <Route path='/contactus' element={<ContactUs/>} />
            <Route path='/model' element={<RequestModel/>} />
        </Route>
        <Route path='/auth'>
            <Route path='login' element={<Login/>}/>
            <Route path='signup' element={<SignUp/>}/>
        </Route>
        <Route path='*' element={<Error404/>}/>
    </Routes>
  )
}

export default mainRoutes;

