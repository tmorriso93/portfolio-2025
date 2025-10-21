import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

// Header section with Portait and Job Title
const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 pt-4'>
        <div>
            <Image 
                src={assets.portrait_toon} 
                alt='portrait' 
                className='rounded-b-full w-32 pt-20' 
            />
        </div>
         <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'
            >
                Hi, I'm Tevin Morrison 
                <Image src={assets.programming_logo} alt='' className='w-6'/>
            </h3>
            <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
                Front End Developer
            </h1>
            <h3 className='font-Ovo text-2xl'> based in Toronto.</h3>
            <p className='max-w-2xl mx-auto font-Ovo'>
              I build web apps that put user experience first, without overcomplicating the tech. I enjoy shaping early ideas into usable, 
              intuitive interfaces that feel natural to interact with. Watching a concept grow into a polished, working product never gets old.
            </p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <a href='#contact'
                    className='px-10 py-3 border border-white rounded-full bg-black
                             text-white flex items-center gap-2'
                    >
                    contact me 
                    <Image 
                        src={assets.right_arrow_white} 
                        alt='right arrow' 
                        className='rounded-full w-4' 
                        />
                </a>
                <a href='/Tevin-Morrison-Resume.pdf' 
                    download 
                    className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'
                    >
                    my resume 
                    <Image 
                        src={assets.download_icon} 
                        alt='download icon' 
                        className='rounded-full w-4' 
                        />
                </a>
            </div>
    </div>
  )
}

export default Header