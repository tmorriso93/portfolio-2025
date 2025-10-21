import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useRef } from 'react'

// Navbar
export const NavBar = () => {
    // logic to open and close mobile menu
    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

  return (
    <>

    {/* logo */}
    <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-2 flex
                    items-center justify-between z-50 bg-gradient-to-r from-gray-100 via-gray-50 to-white border border-white/40 shadow-lg/40 backdrop-blur-xl rounded-2xl'>
        <a href="/#top">
           <Image src={assets.tlogo1} alt='logo'
                  className='w-18 cursor-pointer mr-14'/>
        </a>

        {/* menu on larger screens */}
        <ul className='hidden md:flex items-center gap-6 lh:gap-8 rounded-full px-12 py-3
                       bg-white shadow-sm bg-opacity-50'>
            <li><a className='font-Ovo ' href='#top'>Home</a></li>
            <li><a className='font-Ovo ' href='#about'>About Me</a></li>
            <li><a className='font-Ovo ' href='#skills'>Skills</a></li>
            <li><a className='font-Ovo ' href='#projects'>My Projects</a></li>
            <li><a className='font-Ovo ' href='#contact'>Contact Me</a></li>
        </ul>

        <div className='flex gap-4 '>

            <button>
                <Image src={assets.moon_icon} alt='moon icon' className='w-6 cursor-pointer' />
            </button>

            <a href='#contact'
               className='hidden lg:flex items-center gap-3 px-10 py-2.5 border
                        border-gray-500 rounded-md ml-4 font-Ovo'>
                Contact 
                <Image src={assets.arrow} alt="arrow" className='w-4'/>
            </a>

            <button className='block md:hidden ml-3'
                    onClick={openMenu}>
                <Image src={assets.menu_icon} alt='menu icon' className='w-6 cursor-pointer' />
            </button>
        </div>

        {/* mobile menu */}
        {/* menu is inside a menu icon, when clicked it reveals a slide out menu from the right side */}
         <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0
                        bottom-0 w-64 z-50 h-screen bg-gradient-to-b from-gray-100 via-gray-50 to-white border-l border-white/60 shadow-lg/30 transition duration-500'>

            <div className='absolute right-6 top-10'
                 onClick={closeMenu}>
                <Image src={assets.close_icon} alt='close menu icon' className='w-6' />
            </div>

            <li><a className='font-Ovo cursor-pointer' onClick={closeMenu} href='#top'>Home</a></li>
            <li><a className='font-Ovo cursor-pointer' onClick={closeMenu} href='#about'>About Me</a></li>
            <li><a className='font-Ovo cursor-pointer' onClick={closeMenu} href='#skills'>Skills</a></li>
            <li><a className='font-Ovo cursor-pointer' onClick={closeMenu} href='#projects'>My Projects</a></li>
            <li><a className='font-Ovo cursor-pointer' onClick={closeMenu} href='#content'>Contact Me</a></li>
        </ul>

    </nav>
    </>
  )
}
