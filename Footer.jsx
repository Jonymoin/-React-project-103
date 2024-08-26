import React from 'react'
import footer from '../images/footer.jpg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useGSAP(()=>{
    gsap.from(".ft",{
        y:-200,
        opacity:0,
        duration:.8,
        stagger:.4,
        scrollTrigger:{
            trigger:".ft",
            scroll:"body",
            markers:true,
            start:"top 80%"
        }
    })
})
  return (
   <section>
       <div className='mt-14 relative w-full h-[400px]' >
       <div className='w-[100%] h-[100%] absolute bg-[#040010] top-0 right-0 opacity-[.85]'>

       </div>
          <img src={footer} alt="" className='w-[100%] h-[100%]'/>

          <div className='absolute top-0 left-4 text-white w-[100%] h-[100%]'>
            <div className='flex w-[100%] h-[100%]'>
            <div className='ml-10 mt-[200px] w-1/6 ft'>
                <h1 className='font-bold text-6xl'><span className='text-red-500'>S</span>harif</h1>
            </div>

            <div className='space-y-8 mt-16 px-10 w-1/4 ft'>
                <h2 className='font-bold text-3xl'><span className='text-red-500'>Latest</span> News</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, non!</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, non!</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, non!</p>
            </div>
            <div className='w-1/5 mt-16 space-y-5 ft'>
            <h2 className='font-bold text-3xl'><span className='text-red-500'>Quick</span> Links</h2>
                 <p>Hello world</p>
                 <p>Hello world</p>
                 <p>Hello world</p>
                 <p>Hello world</p>
                 <p>Hello world</p>
                 <p>Hello world</p>
            </div>
            <div className='w-1/4 mt-16 space-y-5 ft'>
            <h2 className='font-bold text-3xl'><span className='text-red-500'>About</span> Me</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cumque unde alias iure inventore itaque eius beatae sunt? Fugit, vero!</p>
            <hr />
            </div>
            </div>
            
          </div>
          
       </div>
   </section>
)
}

export default Footer