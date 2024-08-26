import React from 'react'
import logo from '../images/logo.png'
import { FaFacebookF,FaLinkedinIn,FaTwitter } from "react-icons/fa";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {HashLink as Link } from 'react-router-hash-link';





const Navbar = () => {
   useGSAP(()=>{
    gsap.from(".nav1",{
      x:200,
      stagger:.3
    })
   })


  return (
   
    
    <nav className='fixed w-full z-[999]'>
       <div className='flex justify-between px-16 max-h-28 shadow-2xl bg-white'>
        <div className='py-4'>
            <img src={logo} alt="" />
        </div>
        <div className='flex'>
            <ul className='flex items-center text-slate-400 font-bold py-5 h-28'>
                <li className='py-12 px-4 hover:bg-slate-400 hover:text-black'><Link to="#home">Home</Link></li>
                <li className='py-12 px-4 hover:bg-slate-400 hover:text-black'><Link to="#about">About</Link></li>
                <li className='py-12 px-4 hover:bg-slate-400 hover:text-black'><Link to="#service">Services</Link></li>
                <li className='py-12 px-4 hover:bg-slate-400 hover:text-black'><Link to="#portfolio">Portfolio</Link></li>
                <li className='py-12 px-4 hover:bg-slate-400 hover:text-black'><Link to="#photoslider">Team</Link></li>
            </ul>
        </div>
        <div className='flex items-center gap-10 text-slate-400'>
            <div className='nav1 border border-slate-400 w-10 h-10 flex items-center justify-center rounded-[50%] hover:bg-red-600'>
            <FaFacebookF />
            </div>
            <div className='nav1 border border-slate-400 w-10 h-10 flex items-center justify-center rounded-[50%] hover:bg-red-600'>
            <FaLinkedinIn />            </div>
            <div className='nav1 border border-slate-400 w-10 h-10 flex items-center justify-center rounded-[50%] hover:bg-red-600'>
            <FaTwitter />
            </div>
        
        


        </div>
       </div>
    </nav>
  )
}

export default Navbar