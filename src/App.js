import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Route from './route';
import Home from './pages/Home/Home';

import SignUp from './pages/Auth/SignUp';

function App() {
  return (
    <React.Fragment>
      <SignUp/>
    </React.Fragment>
  );
}

export default App;
