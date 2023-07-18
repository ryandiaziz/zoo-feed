import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import { readDataUser } from './axios/user';

import './App.css';
import { SignInPage, SignUpPage } from './pages';

function App() {
  const [loginStatus, setLoginStatus] = useState(false)
  const [userData, setUserData] = useState([])
  const [userCheck, setUserCheck] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const loginCbHandler = (result) => {
    setLoginStatus(result)
  }
  const signInHandler = () => {
    setIsSignIn(!isSignIn)
    setIsSignUp(false)
  }
  const signUpHandler = () => {
    setIsSignUp(!isSignUp)
    setIsSignIn(false)
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
        signInHandler={signInHandler}
      />
      <SignInPage
        isSignIn={isSignIn}
        signInHandler={signInHandler}
        signUpHandler={signUpHandler}
      />
      <SignUpPage
        isSignUp={isSignUp}
        signUpHandler={signUpHandler}
        signInHandler={signInHandler}
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
