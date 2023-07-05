import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import { readDataUser } from './axios/user';

import './App.css';

function App() {
  const [loginStatus, setLoginStatus] = useState(false)
  const [userData, setUserData] = useState([])
  const [userCheck, setUserCheck] = useState(false);
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

  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      readDataUser(result => setUserData(result))
    }
  }, [userCheck])

  return (
    <>
      <Navbar
        loginStatus={loginStatus}
        loginCbHandler={loginCbHandler}
        userData={userData}
      />
      <MainContent
        loginStatus={loginStatus}
        loginCbHandler={loginCbHandler}
        userData={userData}
        setUserCheck={setUserCheck}
        userCheck={userCheck}
      />
    </>
  );
}

export default App;
