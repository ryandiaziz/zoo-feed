import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../axios/user';
import Input from '../../components/Input';

const SignInPage = (props) => {
    const navigate = useNavigate();
    const { loginCbHandler } = props;
    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const submitHandler = () => {
        login(form, loginCbHandler, false);
        navigate('/')
    }
    return (
        <div>
            {
                props.isSignIn &&
                <>
                    <div className='fixed z-30 w-full h-full flex justify-center items-center'>
                        <div className="h-min w-1/3 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                    Sign in to your account
                                </h1>
                                <form className="space-y-4 md:space-y-6" >
                                    <Input type='email' label='Email' />
                                    <Input type='password' label='Password' />
                                    <button onClick={() => submitHandler()} className="w-full text-white bg-z-green hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                                    <p className="text-sm font-light text-gray-500">
                                        Don’t have an account yet? <Link className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-30 fixed inset-0 z-20 bg-black" />
                </>
            }
        </div>
    )
}

export default SignInPage