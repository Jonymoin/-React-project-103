import React from 'react'
import im1 from '../images/01.jpg'
import im2 from '../images/02.jpg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const Photoslider = () => {
  useGSAP(()=>{
    gsap.from(".ps",{
        x:-200,
        opacity:0,
        duration:.8,
        stagger:.4,
        scrollTrigger:{
            trigger:".ps",
            scroll:"body",
            markers:true,
            start:"top 70%"
        }
    })
})
  return (
    <section>
        <div className='w-full flex ps' id='photoslider'>
            <div className='mt-[100px] flex'>
            <div className='w-1/4 relative flex items-center justify-center group'>
               <img src={im1} alt="" className='w-full' />
              <div className='absolute mt-48 opacity-50 group-hover:opacity-100 group-hover:mt-0 transition-all duration-[0.8]'>
              <h4 className='text-white font-semibold text-[26px]'>Shariful Haque</h4>
              <p className='text-center text-white text-[19px]'>UI/UX Designer</p>
              <hr className='mt-10'/>
              </div>
              <div className='absolute top-[350px] flex gap-4 opacity-0 group-hover:opacity-100'>
                <div className='w-10 h-10 rounded-[50%] bg-red-600 flex items-center justify-center font-bold text-white text-[24px] hover:bg-black'>
                    f
                </div>
                <div className='w-10 h-10 rounded-[50%] bg-red-600 flex items-center justify-center font-bold text-white text-[24px] hover:bg-black'>
                    t
                </div>
                <div className='w-10 h-10 rounded-[50%] bg-red-600 flex items-center justify-center font-bold text-white text-[24px] hover:bg-black'>
                    i
                </div>
              </div>
            </div>

            <div className='w-1/4 relative flex items-center justify-center group'>
               <img src={im2} alt="" className='w-full' />
              <div className='absolute mt-48 opacity-50 group-hover:opacity-100 group-hover:mt-0 transition-all duration-[0.8]'>
              <h4 className='text-white font-semibold text-[26px]'>Shariful Haque</h4>
              <p className='text-center text-white text-[19px]'>UI/UX Designer</p>
              <hr className='mt-10'/>
              </div>
              <div className='absolute top-[350px] flex gap-4 opacity-0 group-hover:opacity-100'>
                <div className='w-10 h-10 rounded-[50%] bg-red-600 flex items-center justify-center font-bold text-white text-[24px] hover:bg-black'>
                    f
                </div>
                <div className='w-10 h-10 rounded-[50%] bg-red-600 flex items-center justify-center font-bold text-white text-[24px] hover:bg-black'>
                    t
                </div>
                <div className='w-10 h-10 rounded-[50%] bg-red-600 flex items-center justify-center font-bold text-white text-[24px] hover:bg-black'>
                    i
                </div>
              </div>
            </div>
            <div className='w-1/4 relative flex items-center justify-center group'>
               <img src={im1} alt="" className='w-full' />
              <div className='absolute mt-48 opacity-50 group-hover:opacity-100 group-hover:mt-0 transition-all duration-[0.8]'>
              <h4 className='text-white font-semibold text-[26px]'>Shariful Haque</h4>
              <p className='text-center text-white text-[19px]'>UI/UX Designer</p>
              <hr className='mt-10'/>
              </div>
              <div className='absolute top-[350px] flex gap-4 opacity-0 group-hover:opacity-100'>
                <div className='w-10 h-10 rounded-[50%] bg-red-600 flex items-center justify-center font-bold text-white text-[24px] hover:bg-black'>
                    f
                </div>
                <div className='w-10 h-10 rounded-[50%] bg-red-600 flex items-center justify-center font-bold text-white text-[24px] hover:bg-black'>
                    t
                </div>
                <div className='w-10 h-10 rounded-[50%] bg-red-600 flex items-center justify-center font-bold text-white text-[24px] hover:bg-black'>
                    i
                </div>
              </div>
            </div>
            <div className='w-1/4 relative flex items-center justify-center group'>
               <img src={im2} alt="" className='w-full' />
              <div className='absolute mt-48 opacity-50 group-hover:opacity-100 group-hover:mt-0 transition-all duration-[0.8]'>
              <h4 className='text-white font-semibold text-[26px]'>Shariful Haque</h4>
              <p className='text-center text-white text-[19px]'>UI/UX Designer</p>
              <hr className='mt-10'/>
              </div>
              <div className='absolute top-[350px] flex gap-4 opacity-0 group-hover:opacity-100'>
                <div className='w-10 h-10 rounded-[50%] bg-red-600 flex items-center justify-center font-bold text-white text-[24px] hover:bg-black'>
                    f
                </div>
                <div className='w-10 h-10 rounded-[50%] bg-red-600 flex items-center justify-center font-bold text-white text-[24px] hover:bg-black'>
                    t
                </div>
                <div className='w-10 h-10 rounded-[50%] bg-red-600 flex items-center justify-center font-bold text-white text-[24px] hover:bg-black'>
                    i
                </div>
              </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Photoslider