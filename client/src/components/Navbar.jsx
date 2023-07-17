import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Profile from './Profile'
import logoOri from '../assets/zoo feed-01.png'
import logoWhite from '../assets/zoo feed-03.png'
import Button from './Button'

const Navbar = (props) => {
    const {
        loginStatus,
        loginCbHandler,
        userData,
        signInHandler,
    } = props
    const [open, setOpen] = useState(false)
    let Links = [
        { name: "things to do", link: "/" },
        { name: "animals", link: "/animals" },
        { name: "foods", link: "/foods" },
        { name: "map", link: "/#" },
    ];
    // change nav color when scrolling
    const [color, setColor] = useState(false)
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 80) {
            setColor(true)
        } else {
            setColor(false)
        }
    })

    return (
        <nav className={`${color || open ? 'shadow-md' : ''} z-20 w-full fixed top-0 left-0`}>
            <div className={`${color || open ? 'bg-white' : 'bg-transparent'} md:flex items-center justify-between py-4 md:px-10 px-7 transition-all duration-500`}>
                <div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
                    <Link to={'/'}>
                        <img src={color || open ? logoOri : logoWhite} alt="Logo" className='w-16' />
                    </Link>
                </div>
                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'} style={color || open ? { color: '#019267' } : { color: 'white' }}></ion-icon>
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open || open ? 'top-20 bg-white' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                                <Link to={link.link} className={`${color || open ? 'text-z-green' : 'text-white'} uppercase font-amatic font-bold text-2xl hover:text-gray-400 duration-500`}>{link.name}</Link>
                            </li>
                        ))
                    }
                    <div className='space-x-2 md:ml-7'>
                        {
                            loginStatus ?
                                <Profile userData={userData} loginCbHandler={loginCbHandler} />
                                :
                                <Button onClick={signInHandler} className={`${color || open ? 'text-z-green border-z-green' : 'text-white hover:border-z-green'} border-[1px] transition-all duration-500`}>
                                    Login
                                </Button>
                        }
                        <Button className={`${color || open ? 'text-z-green border-z-green' : 'text-white hover:border-z-green'} border-[1px] transition-all duration-500`}>
                            Ticket
                        </Button>
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar