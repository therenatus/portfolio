import React, { useState} from 'react';
import Logo from '../assets/logo.png';
import { FaBars, FaTimes, FaLinkedin, FaTelegram, FaGithub, FaPhone} from 'react-icons/fa';
import { HiOutlineMail} from 'react-icons/hi';
import { BsFillPersonFill} from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [burger, setBurger] = useState(false);
    const handleClickBurger = () => setBurger(!burger)
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 pt-4 bg-[#0a192f] text-gray-300'>
            {/* LOGO */}
            <div className='w-[100px] cursor-pointer' >
                <Link to='home' duration={300} smooth={true}>
                    <img src={Logo} alt="Logo"/>
                </Link>
            </div>

            {/* Menu */}
            <ul className='hidden md:flex'>
                <li className='hover:text-white'>
                    <Link to='home' duration={300} smooth={true}>
                        Home
                    </Link>
                </li>
                <li className='hover:text-white'>
                    <Link to='about' duration={300} smooth={true}>
                        About
                    </Link>
                </li>
                <li className='hover:text-white'>
                    <Link to='skills' duration={300} smooth={true}>
                        Skills
                    </Link>
                </li>
                <li className='hover:text-white'>
                    <Link to='projects' duration={300} smooth={true}>
                        Projects
                    </Link>
                </li>
                <li className='hover:text-white'>
                    <Link to='contact' duration={300} smooth={true}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClickBurger} className='block md:hidden z-10'>
                { !burger ? <FaBars size={30} /> : <FaTimes size={30}/>}
            </div>

            {/* Mobile Menu */}
            <ul className={!burger ? 'hidden' : 'absolute left-0 top-0 flex justify-center items-center flex-col h-screen bg-[#0a192f] w-full'}>
            <li className='py-4 text-4xl'>
                    <Link onClick={handleClickBurger} to='home' duration={300} smooth={true}>
                        Home
                    </Link>
                </li>
                <li className='py-4 text-4xl'>
                    <Link onClick={handleClickBurger} to='about' duration={300} smooth={true}>
                        About
                    </Link>
                </li>
                <li className='py-4 text-4xl'>
                    <Link onClick={handleClickBurger} to='skills' duration={300} smooth={true}>
                        Skills
                    </Link>
                </li>
                <li className='py-4 text-4xl'>
                    <Link onClick={handleClickBurger} to='projects' duration={300} smooth={true}>
                        Projects
                    </Link>
                </li>
                <li className='py-4 text-4xl'>
                    <Link onClick={handleClickBurger} to='contact' duration={300} smooth={true}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Social  */}
            <ul className='sm:flex flex-col hidden fixed left-0 top-[35%]'>
                <li className='flex justify-between w-[150px] h-[60px] ml-[-93px] hover:ml-[0px] duration-300 bg-blue-600'><a href="" className='flex items-center justify-between w-full text-white'>Linkedin  <FaLinkedin size={30}/></a></li>
                <li className='flex justify-between w-[150px] h-[60px] ml-[-93px] hover:ml-[0px] duration-300 bg-blue-500'><a href="" className='flex items-center justify-between w-full text-white'>Telegram  <FaTelegram size={30}/></a></li>
                <li className='flex justify-between w-[150px] h-[60px] ml-[-93px] hover:ml-[0px] duration-300 bg-[#333] items-center'><a href="" className='flex items-center justify-between w-full text-white'>GitHub  <FaGithub size={30}/></a></li>
                <li className='flex justify-between w-[150px] h-[60px] ml-[-93px] hover:ml-[0px] duration-300 bg-[#6fc2b0]'><a href="" className='flex items-center justify-between w-full text-white'>Email  <HiOutlineMail size={30}/></a></li>
                <li className='flex justify-between w-[150px] h-[60px] ml-[-93px] hover:ml-[0px] duration-300 bg-[#565f69]'><a href="" className='flex items-center justify-between w-full text-white'>Resume  <BsFillPersonFill size={30}/></a></li>
            </ul>
        </div>
    )
}

export default Navbar