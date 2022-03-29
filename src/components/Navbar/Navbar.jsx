import React, { useState} from 'react';
import Logo from '../../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const [burger, setBurger] = useState(false);
    const handleClickBurger = () => setBurger(!burger)
    return (
        <div className='fixed w-full h-[100px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            {/* LOGO */}
            <div className='w-[100px] mt-3 z-10' >
                <img src={Logo} alt="Logo"/>
            </div>

            {/* Menu */}
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Works</li>
                <li>Contact</li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClickBurger} className='block md:hidden z-10'>
                { !burger ? <FaBars size={30} /> : <FaTimes size={30}/>}
            </div>

            {/* Mobile Menu */}
            <ul className={!burger ? 'hidden' : 'absolute left-0 top-0 flex justify-center items-center flex-col h-screen bg-[#0a192f] w-full'}>
                <li className='py-4 text-4xl'>Home</li>
                <li className='py-4 text-4xl'>About</li>
                <li className='py-4 text-4xl'>Skills</li>
                <li className='py-4 text-4xl'>Works</li>
                <li className='py-4 text-4xl'>Contact</li>
            </ul>

            {/* Social  */}
            <li><a href="">Linkedin</a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
        </div>
    )
}

export default Navbar