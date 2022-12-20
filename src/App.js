import { SnackbarProvider } from 'notistack';
import React from 'react';
import './App.css';
import Routes from './mainRoutes';


import SignUp from './pages/Auth/SignUp';

function App() {
  return (
    <React.Fragment>
      <SnackbarProvider maxSnack={3} autoHideDuration={1500}>
        <Routes/>
      </SnackbarProvider>
    </React.Fragment>
  );
}

export default App;
