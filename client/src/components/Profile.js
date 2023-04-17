import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Profile = (props) => {
    const navigate = useNavigate()
    const { loginCbHandler, userData } = props

    const logoutHandler = () => {
        localStorage.clear()
        loginCbHandler(false)
        navigate('/login')
    }
    const [open, setOpen] = useState(false);

    const menuRef = useRef();
    const imgRef = useRef();

    window.addEventListener('click', (e) => {
        if (e.target !== menuRef.current && e.target !== imgRef.current) {
            setOpen(false);
        }
    })
    return (
        <>
            <div className='flex justify-center'>
                <div className='relative z-10'>
                    <img
                        ref={imgRef}
                        onClick={() => setOpen(!open)}
                        src={userData.imageUrl}
                        alt="user profile"
                        className='h-12 w-12 object-cover rounded-full cursor-pointer'
                    />
                    {
                        open && (
                            <div
                                ref={menuRef}
                                className='rounded-md bg-white p-4 w-52 shadow-lg absolute right-[2px] top-16'>
                                <ul>
                                    <Link to={'/profile'}>
                                        <li
                                            onClick={() => {
                                                setOpen(false);
                                            }}
                                            className='font-noto p-2 text-md cursor-pointer rounded hover:bg-blue-100'>
                                            Profile
                                        </li>
                                    </Link>
                                    <hr />
                                    <Link to={'/signin'}>
                                        <li
                                            onClick={() => {
                                                setOpen(false);
                                                logoutHandler();
                                            }}
                                            className='p-2 font-noto text-md cursor-pointer rounded hover:bg-blue-100'>
                                            Logout
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Profile