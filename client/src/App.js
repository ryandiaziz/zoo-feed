import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  const [loginStatus, setLoginStatus] = useState(false)

  const loginCbHandler = (result) => {
    setLoginStatus(result)
  }
  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      setLoginStatus(true)
    } else {
      setLoginStatus(false)
    }
  }, [loginStatus])
  return (
    <>
      <Navbar loginStatus={loginStatus} loginCbHandler={loginCbHandler} />
      <div className='pt-24'>
        <MainContent loginStatus={loginStatus} loginCbHandler={loginCbHandler} />
      </div>
    </>
  );
}

export default App;
