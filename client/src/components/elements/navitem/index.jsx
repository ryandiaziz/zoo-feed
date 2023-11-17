import { NavLink } from "react-router-dom"
const NavItem = ({ link, onClick }) => {
    return (
        <li key={link.name} onClick={onClick} className='text-xl md:mr-5 xl:mr-7'>
            <NavLink to={link.link} className={`uppercase font-amatic font-bold text-2xl lg:text-3xl hover:text-gray-400 duration-500 text-z-green`}>{link.name}</NavLink>
        </li>
    )
}

export default NavItem
