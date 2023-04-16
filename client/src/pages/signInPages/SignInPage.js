import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../../components/Modal';
import { login } from '../../axios/user';

const SignInPage = (props) => {
    const navigate = useNavigate();
    const { loginCbHandler } = props;
    const [form, setForm] = useState({
        email: '',
        password: '',
    })
    const [modalOpen, setModalOpen] = useState(false);

    const modalHandler = (data) => {
        setModalOpen(data);
    }

    // const loginUser = async () => {
    //     try {
    //         let result = await axios({
    //             method: 'POST',
    //             url: 'http://localhost:3000/api/users/login',
    //             data: form
    //         })
    //         const access_token = result.data.access_token
    //         localStorage.setItem('access_token', access_token)

    //         loginCbHandler(true)
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    const submitHandler = () => {
        // console.log(form)
        // loginUser()
        login(form, loginCbHandler);
        navigate('/')
    }
    return (
        <>
            {
                modalOpen && <Modal modalHandler={modalHandler} />
            }
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto">
                <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                    {/* <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" /> */}
                    Zoo Feed
                </a>
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Sign in to your account
                        </h1>
                        <form class="space-y-4 md:space-y-6" >
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                <input onChange={(e) => setForm({ ...form, email: e.target.value })} type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                <input onChange={(e) => setForm({ ...form, password: e.target.value })} type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                            </div>
                            <button onClick={() => submitHandler()} class="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                            <p class="text-sm font-light text-gray-500">
                                Don’t have an account yet? <Link onClick={() => {
                                    setModalOpen(true);
                                }} class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignInPage