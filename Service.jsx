import React from 'react'
import ser from '../images/portf.jpg'
import service from '../images/servicebg2.jpg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const Service = () => {
    useGSAP(()=>{
        gsap.from(".ser",{
            y:200,
            opacity:0,
            duration:.8,
            stagger:.4,
            scrollTrigger:{
                trigger:".ser",
                scroll:"body",
                markers:true,
                start:"top 70%"
            }
        })
    })

  return (
    <div className='flex ser mt-[100px]' id='service'>
        <div className='w-[70%]'>
            <img src={ser} alt="" />
        </div>

        <div className='w-[66%] absolute right-0 flex p-8' style={{
        backgroundImage: `url(${service})` }}>
          <div className='flex flex-col p-10 gap-10'>
               <div className='flex items-center gap-4 mb-8'>
                  <div>
                  <h2 className='font-bold text-4xl'>Experiences</h2>
                  </div>
                  <div className='w-20 h-1 bg-red-400 mt-3'>

                  </div>
               </div>
             <div className='w-96 h-32 bg-white shadow-xl flex '>
                <div className='w-8 h-8 rounded-[50%] border-[1px] border-slate-500 flex items-center justify-center text-center ml-4 mt-12' >
                    <p className='text-2xl mb-4 text-slate-500'>.</p>
                    
                </div>
                <div className='ml-4 mt-12'>
                    <p className='text-slate-500 text-[17px]'>2009-2012</p>
                </div>
                <div className='mt-6 ml-8'>
                    <h3 className='font-semibold text-[21px]'>Dataentry Expart</h3>
                    <p className='text-[18px] text-slate-500'>Upwork.com</p>
                </div>
             </div>
             <div className='w-96 h-32 bg-white shadow-xl flex '>
                <div className='w-8 h-8 rounded-[50%] border-[1px] border-slate-500 flex items-center justify-center text-center ml-4 mt-12' >
                    <p className='text-2xl mb-4 text-slate-500'>.</p>
                    
                </div>
                <div className='ml-4 mt-12'>
                    <p className='text-slate-500 text-[17px]'>2009-2012</p>
                </div>
                <div className='mt-6 ml-8'>
                    <h3 className='font-semibold text-[21px]'>Dataentry Expart</h3>
                    <p className='text-[18px] text-slate-500'>Upwork.com</p>
                </div>
             </div>
             <div className='w-96 h-32 bg-white shadow-xl flex '>
                <div className='w-8 h-8 rounded-[50%] border-[1px] border-slate-500 flex items-center justify-center text-center ml-4 mt-12' >
                    <p className='text-2xl mb-4 text-slate-500'>.</p>
                    
                </div>
                <div className='ml-4 mt-12'>
                    <p className='text-slate-500 text-[17px]'>2009-2012</p>
                </div>
                <div className='mt-6 ml-8'>
                    <h3 className='font-semibold text-[21px]'>Dataentry Expart</h3>
                    <p className='text-[18px] text-slate-500'>Upwork.com</p>
                </div>
             </div>
          </div>
          <div className='flex flex-col p-10 gap-10'>
               <div className='flex items-center gap-4 mb-8'>
                  <div>
                  <h2 className='font-bold text-4xl'>Experiences</h2>
                  </div>
                  <div className='w-20 h-1 bg-red-400 mt-3'>

                  </div>
               </div>
             <div className='w-96 h-32 bg-white shadow-xl flex hover:rotate-6 transition-all duration-[0.3] group'>
                <div className='w-8 h-8 rounded-[50%] border-[1px] border-slate-500 flex items-center justify-center text-center ml-4 mt-12' >
                    <p className='text-2xl mb-4 text-slate-500'>.</p>
                    
                </div>
                <div className='ml-4 mt-12'>
                    <p className='text-slate-500 text-[17px]'>2009-2012</p>
                </div>
                <div className='mt-6 ml-8'>
                    <h3 className='font-semibold text-[21px]'>Dataentry Expart</h3>
                    <p className='text-[18px] text-slate-500'>Upwork.com</p>
                </div>
             </div>
             <div className='w-96 h-32 bg-white shadow-xl flex hover:rotate-6 transition-all duration-[0.3] group '>
                <div className='w-8 h-8 rounded-[50%] border-[1px] border-slate-500 flex items-center justify-center text-center ml-4 mt-12' >
                    <p className='text-2xl mb-4 text-slate-500'>.</p>
                    
                </div>
                <div className='ml-4 mt-12'>
                    <p className='text-slate-500 text-[17px]'>2009-2012</p>
                </div>
                <div className='mt-6 ml-8'>
                    <h3 className='font-semibold text-[21px]'>Dataentry Expart</h3>
                    <p className='text-[18px] text-slate-500'>Upwork.com</p>
                </div>
             </div>
             <div className='w-96 h-32 bg-white shadow-xl flex hover:rotate-6 transition-all duration-[0.3] group'>
                <div className='w-8 h-8 rounded-[50%] border-[1px] border-slate-500 flex items-center justify-center text-center ml-4 mt-12 group-hover:border-red-500' >
                    <p className='text-2xl mb-4 text-slate-500 group-hover:text-red-500'>.</p>
                    
                </div>
                <div className='ml-4 mt-12'>
                    <p className='text-slate-500 text-[17px]'>2009-2012</p>
                </div>
                <div className='mt-6 ml-8'>
                    <h3 className='font-semibold text-[21px]'>Dataentry Expart</h3>
                    <p className='text-[18px] text-slate-500'>Upwork.com</p>
                </div>
             </div>
          </div>

        </div>
        

    </div>
  )
}

export default Service