import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import { readDataUser } from './axios/user';

import './App.css';

function App() {
  const [loginStatus, setLoginStatus] = useState(false)
  const [userData, setUserData] = useState([])
  const loginCbHandler = (result) => {
    setLoginStatus(result)
  }
  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      setLoginStatus(true)
      readDataUser(result => setUserData(result))
    } else {
      setLoginStatus(false)
    }
  }, [loginStatus])
  return (
    <>
      <Navbar loginStatus={loginStatus} loginCbHandler={loginCbHandler} userData={userData} />
      <div className='pt-24'>
        <MainContent loginStatus={loginStatus} loginCbHandler={loginCbHandler} />
      </div>
    </>
  );
}

export default App;
