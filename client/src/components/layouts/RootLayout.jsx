/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Outlet } from 'react-router-dom';

import Navbar from '../fragments/Navbar';
import LoadingScreen from './LoadingScreen';
import { SignInPage, SignUpPage } from '../../pages';
import { fetchUser } from '../../redux/authSlice';


const RootLayout = () => {
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
                <Outlet />
            </>
    )
}

export default RootLayout