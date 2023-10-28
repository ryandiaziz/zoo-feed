/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import './App.css';
// import Loading from './components/Loading';
import LoadingScreen from './components/LoadingScreen';
import { SignInPage, SignUpPage } from './pages';
import { fetchUser } from './redux/authSlice';

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading } = useSelector((state) => state.auth)
  const [isSignIn, setIsSignIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const signInHandler = () => {
    setIsSignIn(!isSignIn)
    setIsSignUp(false)
  }
  const signUpHandler = () => {
    setIsSignUp(!isSignUp)
    setIsSignIn(false)
  }


  useEffect(() => {
    const token = localStorage.getItem('access_token')
    if (token) {
      dispatch(fetchUser(token))
      navigate('/')
    }

  }, [])

  return (
    loading.fetch
      ? <LoadingScreen />
      : <>
        <Navbar signInHandler={signInHandler} />
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
        <MainContent />
      </>
  );
}

export default App;
