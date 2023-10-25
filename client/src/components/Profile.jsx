import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/authSlice';

const Profile = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)

    const logoutHandler = () => {
        dispatch(logout())
        navigate("/")
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
        <div className='w-10 md:w-12 flex justify-center'>
            <div className='relative z-10'>
                <img
                    ref={imgRef}
                    onClick={() => setOpen(!open)}
                    src={`https://zoofeed-api-gamma.vercel.app/${user.imageUrl}`}
                    alt="user profile"
                    className='h-full object-cover rounded-full cursor-pointer'
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
                                <li
                                    onClick={() => {
                                        setOpen(false);
                                        logoutHandler();
                                    }}
                                    className='p-2 font-noto text-md cursor-pointer rounded hover:bg-blue-100'>
                                    Logout
                                </li>
                            </ul>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Profile