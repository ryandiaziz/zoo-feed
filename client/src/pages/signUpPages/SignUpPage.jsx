import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams, useNavigate } from 'react-router'
import { createUser } from '../../axios/user'
import Input from '../../components/Input'
import Logo from '../../assets/zoo feed-01.png'

const SignUpPage = (props) => {
    const params = useParams();
    const navigate = useNavigate();
    const { loginCbHandler } = props
    const { roleId } = params;
    const [form, setForm] = useState({
        name: "",
        age: 0,
        email: "",
        password: "",
        roleId: roleId,
    });

    const submitHandler = () => {
        createUser(form, loginCbHandler);
        navigate('/')
    };
    return (
        <div>
            {
                props.isSignUp &&
                <>
                    <div className='border-2 border-red-400 fixed z-30 font-noto w-full h-full flex justify-center items-center'>
                        <div className="border-2 border-red-400 h-min w-1/3 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 relative">
                            <img src={Logo} alt="" className='w-28 m-auto pt-10' />
                            <div onClick={props.signUpHandler} className='absolute top-1 right-1 cursor-pointer'>❌</div>
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                    Sign up for an account
                                </h1>
                                <form className="space-y-4 md:space-y-6" >
                                    <Input type='email' label='Email' />
                                    <Input type='password' label='Password' />
                                    <button onClick={() => submitHandler()} className="w-full text-white bg-z-green hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                                    <p className="text-sm font-light text-gray-500">
                                        Already have an account?
                                        <span onClick={props.signInHandler} className="cursor-pointer font-medium text-primary-600 hover:underline dark:text-primary-500">Sign In</span>
                                    </p>
                                </form>
                                <p className='text-center'>or</p>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-30 fixed inset-0 z-20 bg-black" />
                </>
            }
        </div>
    )
}

export default SignUpPage