import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams, useNavigate } from 'react-router'
import { createUser } from '../../axios/user'

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
        <div className="flex flex-col items-center justify-center px-6 py-8 my-10 mx-auto md:h-screen lg:py-0">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                {/* <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" /> */}
                Zoo Feed
            </a>
            <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Sign Up
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                            <input type="text" onChange={(e) => setForm({ ...form, name: e.target.value })} id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="your name" required="" />
                        </div>
                        <div>
                            <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900">Age</label>
                            <input type="text" onChange={(e) => setForm({ ...form, age: e.target.value })} id="age" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="your age" required="" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                            <input type="email" onChange={(e) => setForm({ ...form, email: e.target.value })} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required="" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                            <input type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                        </div>
                        <button
                            onClick={() => submitHandler()}
                            type="submit" className="w-full text-white bg-primary-600 bg-blue-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
                        <p className="text-sm font-light text-gray-500">
                            Already have an account? <Link to="/signin" className="font-medium text-primary-600 hover:underline">Sign In</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage