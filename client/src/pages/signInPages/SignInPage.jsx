/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

import Input from '../../components/Input';
import { login } from '../../redux/authSlice';
import Loading from '../../components/Loading'


const SignInPage = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isLogin, loading } = useSelector((state) => state.auth)
    const [form, setForm] = useState({
        email: 'ryan@gmail.com',
        password: '@Zoofeed123',
    })

    const submitHandler = () => {
        dispatch(login(form))
        // console.log(form)
    }

    useEffect(() => {
        if (props.isSignIn) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [props.isSignIn])

    useEffect(() => {
        if (isLogin) {
            props.signInHandler()
        }
    }, [isLogin])

    return (
        <>
            {
                props.isSignIn &&
                <>
                    <div className='fixed top-0 z-50 font-noto w-full h-screen overflow-y-scroll flex justify-center items-center'>
                        <div className="w-[30rem] h-min bg-white rounded-lg relative">
                            <div onClick={props.signInHandler} className='absolute top-2 right-2 cursor-pointer'>❌</div>
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                    Welcome
                                </h1>
                                <section className="space-y-4 md:space-y-6" >
                                    <Input type='email' label='Email' />
                                    <Input type='password' label='Password' />
                                    <button disabled={loading.login ? true : false} onClick={submitHandler} className="w-full text-white bg-z-green hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">{loading.login ? <Loading /> : "Sign in"}</button>
                                    <p className="text-sm font-light text-gray-500">
                                        Don’t have an account yet?
                                        <span onClick={props.signUpHandler} className="cursor-pointer font-medium text-primary-600 hover:underline dark:text-primary-500"> Sign up</span>
                                    </p>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-30 fixed inset-0 z-20 bg-black" />
                </>
            }
        </>
    )
}

export default SignInPage