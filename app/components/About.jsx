import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
        <h2 className='text-center text-5xl font-Ovo'>About me</h2>

        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-10'>
            <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image 
                    src={assets.portrait2} 
                    alt='portrait' 
                    className='w-full rounded-3xl '
                />
            </div>
            <div className='flex-1'>
                <p className='mb-10 max-w-2xl font-Ovo'>
                   I&apos;m a Front End Engineer with a background in React and Next.js, experienced in building full-stack applications and polished,
                   user-friendly interfaces. In previous roles, I managed and maintained production websites for luxury automotive brands including Porsche,
                   BMW, Land Rover, Jaguar, and Lexus, working closely with marketing and product teams to improve performance and user experience. I care about
                   clean architecture, maintainable code, and designing interfaces that feel intuitive and modern. Whether collaborating with a team or building 
                   independently, I&apos;m focused on creating solutions that are reliable, scalable, and enjoyable to use.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About