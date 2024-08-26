import React from 'react'
import {gsap} from 'gsap'
import { useGSAP } from '@gsap/react';

import heroleft from '../images/heroleft.png'
import herored from '../images/herored.png'

const Hero = () => {
   useGSAP(()=>{
    gsap.from(".heroone",{
        y: 200,
        duration:.7,
        opacity:0,
        stagger:0.4
    })
   })

  return (
    <section>
        <div className='flex bg-no-repeat w-full h-screen px-32' id='home'>
            <div className='flex mt-[100px]'>
            <div className='bg-no-repeat w-1/2'  style={{
            backgroundImage: `url(${heroleft})`
        }}>
               <div className='flex items-center gap-4 px-16 pt-16'>
                <h6 className='heroone font-bold text-[28px]'>Hi I'm</h6>
                <div className='heroone w-10 h-1 bg-black'></div>
               </div>
               <h1 className='heroone px-16 pt-10 font-bold text-[52px]'>Shariful Haque</h1>
               <p className='heroone px-16 pt-4 font-sans font-semibold'>I am a Web Developer</p>
               <p className='heroone px-16 pt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, molestiae ipsum? Vero, debitis quis nostrum nulla reprehenderit dignissimos consequatur unde obcaecati voluptates consequuntur?</p>
               <div className='px-16 py-10 flex items-center gap-4'>
                <button className='heroone  px-8 py-4 bg-red-600 text-white rounded-md hover:bg-blue-950'>About Me</button>
                <p className='heroone font-semibold'>Available for free</p>
               </div>
            </div >
            <div className='w-2/3 bg-no-repeat relative pr-24'  style={{
            backgroundImage: `url(${herored})`
        }}>
               <div className='flex absolute bottom-1 pl-0 gap-10 items-center py-6'>
                <div className='bg-white px-8 py-4 border-l-[4px] border-l-red-500 hover:rotate-3'>
                    <p className='text-slate-400 text-xl text-center'>Born in</p>
                    <h2 className='text-[20px]'>Bangladeh</h2>
                </div>
                <div className='bg-white px-8 py-4 border-l-[4px] border-l-red-500 hover:rotate-3'>
                    <p className='text-slate-400 text-xl text-center'>Experience</p>
                    <h2 className='text-[20px]'>10+ Years</h2>
                </div>
                <div className='bg-white px-8 py-4 border-l-[4px] border-l-red-500 hover:rotate-3'>
                    <p className='text-slate-400 text-xl text-center'>Date of Birth</p>
                    <h2 className='text-[20px]'>12 Dec 1990</h2>
                </div>
               </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Hero