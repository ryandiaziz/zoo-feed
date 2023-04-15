import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';

const Profile = (props) => {
    const { loginCbHandler } = props
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
                <div className='relative'>
                    <img
                        ref={imgRef}
                        onClick={() => setOpen(!open)}
                        src="https://fakeimg.pl/350x200/"
                        alt="user profile"
                        className='h-20 w-20 object-cover rounded-full cursor-pointer'
                    />
                    {
                        open && (
                            <div
                                ref={menuRef}
                                className='bg-white p-4 w-52 shadow-lg absolute -left-14 top-24'>
                                <ul>
                                    {
                                        Menus.map(menu => (
                                            <Link>
                                                <li
                                                    onClick={() => {
                                                        setOpen(false);
                                                        logoutHandler()
                                                    }}
                                                    className='p-2 text-lg cursor-pointer rounded hover:bg-blue-100' key={menu}>
                                                    {menu.name}
                                                </li>
                                            </Link>
                                        ))
                                    }
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