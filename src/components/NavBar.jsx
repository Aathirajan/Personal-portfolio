import React from 'react'
import { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from "react-icons/hi";




const NavBar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home',
            style: 'hover:text-[#C685C4]'
        },
        {
            id: 2,
            link: 'about',
            style: 'hover:text-[#EA5E5E]'
        },
        {
            id: 3,
            link: 'portfolio',
            style: 'hover:text-[#4D77FF]'
        },
        {
            id: 4,
            link: 'stacks',
            style: 'hover:text-[#FBBF47]'
        },
        {
            id: 5,
            link: 'contact',
            style: 'hover:text-[#C9F658]'
        },
        {
            id: 6,
            child: (
                <>
                  <FaLinkedin size={50}/>
                </>
            ),
            href: 'https://www.linkedin.com/in/aathi-rajan-2259441a9/',
            style: 'rounded-tr-md'
        },
        {
            id: 7,
            child: (
                <>
                  <FaGithub size={50}/>
                </>
            ),
            href: 'https://github.com/Aathirajan',
        },
        {
            id: 3,
            child: (
                <>
                <HiOutlineMail size={50}/>
                </>
            ),
            href: 'mailto:careers.aathirajan@gmail.com',
        },
        
    ];


  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white fixed bg-[#00171f]'>
        <p className="text-2xl mr-3">Aathi Rajan</p>
        <div className='text-6xl font-signature ml-2'></div>
        <ul className='hidden md:flex'>
            {links.map(({id, link, style}) => (
                            <li key={id} className= {`font-signature px-4 cursor-pointer capitalize font-medium text-white-500 hover:scale-105 duration-300 ${style}`}>
                                <Link to={link} smooth duration={800}>{link}</Link>
                            </li>
            ))}
        </ul>

        <div className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'
            onClick={() => setNav(!nav)}>
                { nav ? <FaTimes size={30}/> : <FaBars size={30}/> }
        </div>

        {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen  bg-gradient-to-b from-[#00171F] via-[#00171f] to-[#043d50]'>
                {links.map(({id, link, child, href}) => (
                    <li key={id} className='font-signature px-4 cursor-pointer capitalize py-6 text-4xl'>
                        <Link onClick={() => setNav(!nav)} to={link} smooth duration={800}>{link}</Link>
                        <a href={href}> {child}</a>
                    </li>
                ))}
            </ul>
            )}

    </div>
  )
}

export default NavBar