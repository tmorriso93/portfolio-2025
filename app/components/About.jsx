import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='page-section w-full px-[12%] py-10 scroll-mt-20'>
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
                  I’m a Front-End / Full-Stack Developer who loves turning ideas into fast, intuitive web applications.
                  I work mainly with React, Next.js, and modern JavaScript, building clean, maintainable code that focuses on user experience and performance.
                </p>

                <p className='mb-10 max-w-2xl font-Ovo'>
                  In my last role, I managed and improved production websites for luxury automotive brands like Porsche, BMW, Land Rover, Jaguar, and Lexus, working
                  closely with marketing and product teams to launch new features, boost site speed, and ensure consistent design across multiple brands. That experience
                  taught me how to balance creativity with reliability — building things that look great and actually work under pressure.
                </p>

                <p className='mb-10 max-w-2xl font-Ovo'>
                  I’m passionate about writing clean architecture, optimizing for scalability, and creating products that feel effortless to use. Outside of work, I’ve become
                  fluent in Spanish, and boxing keeps me grounded and focused — both inside and outside of code.
                </p>

                <p className='mb-10 max-w-2xl font-Ovo'>
                  I’m now looking for an opportunity to join a collaborative team where I can build, learn, and contribute to products that make a real impact.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About
