import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';

const Profile = (props) => {
    const { loginCbHandler, userData } = props
    const Menus = [
        {
            name: "Profile",
            link: ''
        },
        {
            name: "Logout",
            link: ''
        }
    ];

    const logoutHandler = () => {
        localStorage.clear()
        loginCbHandler(false)
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
                        className='h-16 w-16 object-cover rounded-full cursor-pointer'
                    />
                    {
                        open && (
                            <div
                                ref={menuRef}
                                className='bg-white p-4 w-52 shadow-lg absolute -left-14 top-24'>
                                <ul>
                                    <Link>
                                        <li
                                            onClick={() => {
                                                setOpen(false);
                                            }}
                                            className='p-2 text-lg cursor-pointer rounded hover:bg-blue-100'>
                                            Profile
                                        </li>
                                    </Link>
                                    <Link>
                                        <li
                                            onClick={() => {
                                                setOpen(false);
                                                logoutHandler();
                                            }}
                                            className='p-2 text-lg cursor-pointer rounded hover:bg-blue-100'>
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