import React, { useState } from 'react'
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

    const submitHandler = () => {
        login(form, loginCbHandler, false);
        navigate('/')
    }
    return (
        <>
            {
                modalOpen
                    ? (
                        <Modal
                            modalOpen={modalOpen}
                            setModalOpen={setModalOpen}
                        />
                    )
                    : <div></div>
            }
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                    Zoo Feed
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" >
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                <input onChange={(e) => setForm({ ...form, email: e.target.value })} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                <input onChange={(e) => setForm({ ...form, password: e.target.value })} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                            </div>
                            <button onClick={() => submitHandler()} className="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                            <p className="text-sm font-light text-gray-500">
                                Don’t have an account yet? <Link onClick={() => {
                                    setModalOpen(true);
                                }} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignInPage