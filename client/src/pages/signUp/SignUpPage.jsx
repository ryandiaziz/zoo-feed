/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import Input from '../../components/elements/Input'
import { setmodalsignup, setmodalsignin } from '../../redux/menuSlice'
import { createUser } from '../../redux/authSlice'

const SignUpPage = () => {
    const params = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isModalSignUpOpen } = useSelector((state) => state.menu)
    const { isLogin } = useSelector((state) => state.auth)

    const { roleId } = params;
    const [form, setForm] = useState({
        name: "",
        age: 0,
        email: "",
        password: "",
        roleId: roleId,
    });

    const submitHandler = () => {
        dispatch(createUser(form))
    };

    const signinHandler = () => {
        dispatch(setmodalsignup(false))
        dispatch(setmodalsignin(true))
    }

    useEffect(() => {
        if (isModalSignUpOpen) document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [isModalSignUpOpen])

    useEffect(() => {
        if (isLogin) {
            navigate("/")
            dispatch(setmodalsignup(false))
        }
    }, [isLogin])
    return (
        <>
            {
                isModalSignUpOpen &&
                <>
                    <div className='fixed top-0 z-50 font-noto w-full h-screen overflow-y-scroll flex items-center justify-center'>
                        <div className="z-50 h-min w-[30rem] m-auto bg-white rounded-lg relative">
                            <div onClick={() => dispatch(setmodalsignup(false))} className='absolute top-2 right-2 cursor-pointer'>❌</div>
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                    Sign up for an account
                                </h1>
                                <form className="space-y-4 md:space-y-6" >
                                    <Input type='text' label='Name' />
                                    <Input type='email' label='Email' />
                                    <Input type='password' label='Password' />
                                    <button onClick={() => submitHandler()} className="w-full text-white bg-z-green hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign Up</button>
                                    <p className='text-[12px] text-slate-500 text-center font-light'>By creating an account you agree with our Terms of Service, Privacy Policy, and our default Notification Settings</p>
                                    <p className="text-center text-sm font-light text-gray-500">
                                        Already have an account?
                                        <span onClick={signinHandler} className="cursor-pointer font-medium text-primary-600 hover:underline dark:text-primary-500"> Sign In</span>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-30 fixed inset-0 z-20 bg-black" />
                </>
            }
        </>
    )
}

export default SignUpPage