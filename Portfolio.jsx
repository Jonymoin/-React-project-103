import React from 'react'
import pic1 from '../images/laptop.jpg'
import pic2 from '../images/watch.jpg'
import pic3 from '../images/walk.jpg'
import pic4 from '../images/whitecar.jpg'
import pic5 from '../images/chipslove.jpg'
import pic6 from '../images/webdevelopment.jpg'
import pic7 from '../images/watch2.jpg'
import pic8 from '../images/watch3.jpg'
import pic9 from '../images/np.jpg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
    useGSAP(()=>{
        gsap.from(".port",{
            x:-200,
            opacity:0,
            duration:.8,
            stagger:.4,
            scrollTrigger:{
                trigger:".port",
                scroll:"body",
                markers:true,
                start:"top 60%"
            }
        })
    })

    useGSAP(()=>{
        gsap.from(".port2",{
            x:-200,
            opacity:0,
            duration:.8,
            stagger:.4,
            scrollTrigger:{
                trigger:".port2",
                scroll:"body",
                markers:true,
                start:"top 70%"
            }
        })
    })
    useGSAP(()=>{
        gsap.from(".port3",{
            x:-200,
            opacity:0,
            duration:.8,
            stagger:.4,
            scrollTrigger:{
                trigger:".port3",
                scroll:"body",
                markers:true,
                start:"top 70%"
            }
        })
    })
  return (
    <section>
        <div className=' mx-14' id='portfolio'>
            <div id='heading' className='flex flex-col items-center'>
                <h1 className='font-bold text-[65px] mt-[100px]'>Work Showcase</h1>
                <h4 className='text-slate-500 text-[22px] font-semibold'>Portfolio Work</h4>
                <div className='flex gap-6 font-semibold mt-6 text-[22px]'>
                    <h4 className='hover:text-[#ff4a54]'>All</h4>
                    <h4 className='hover:text-[#ff4a54]'>Development</h4>
                    <h4 className='hover:text-[#ff4a54]'>Web Design</h4>
                    <h4 className='hover:text-[#ff4a54]'>photography</h4>
                </div>

            </div>

            <div className='mt-10'>
                <div className='flex port'>
                    <div className='w-[515px] h-[503px] flex items-center justify-center relative group'>
                    <img src={pic1} alt="" className='rounded-2xl'/>
                    <div className='absolute top-[150px] left-[160px]'>
                        <button className='px-6 py-3 bg-[#ff4a54] rounded-md text-white opacity-0 group-hover:opacity-100 transition-all duration-[0.5] ease-linear'>Fresh Laptop</button>
                       

                    </div>
                    <button className='px-4 py-2 text-2xl bg-[#000] rounded-md text-white opacity-0 group-hover:opacity-100 absolute transition-all duration-[.5] ease-linear'>+</button>
                    </div>
                    <div className='w-[515px] h-[503px] flex items-center justify-center relative group'>
                    <img src={pic2} alt="" className='rounded-2xl'/>
                    <div className='absolute top-[150px] left-[160px]'>
                        <button className='px-6 py-3 bg-[#ff4a54] rounded-md text-white opacity-0 group-hover:opacity-100 transition-all duration-[0.5] ease-linear'>Fresh Laptop</button>
                       

                    </div>
                    <button className='px-4 py-2 text-2xl bg-[#000] rounded-md text-white opacity-0 group-hover:opacity-100 absolute transition-all duration-[.5] ease-linear'>+</button>
                    </div>
                    <div className='w-[515px] h-[503px] flex items-center justify-center relative group'>
                    <img src={pic3} alt="" className='rounded-2xl'/>
                    <div className='absolute top-[150px] left-[160px]'>
                        <button className='px-6 py-3 bg-[#ff4a54] rounded-md text-white opacity-0 group-hover:opacity-100 transition-all duration-[0.5] ease-linear'>Fresh Laptop</button>
                       

                    </div>
                    <button className='px-4 py-2 text-2xl bg-[#000] rounded-md text-white opacity-0 group-hover:opacity-100 absolute transition-all duration-[.5] ease-linear'>+</button>
                    </div>
                </div>

                 <div className='flex port2'>
                    <div className='w-[515px] h-[503px] flex items-center justify-center relative group'>
                    <img src={pic4} alt="" className='rounded-2xl'/>
                    <div className='absolute top-[150px] left-[160px]'>
                        <button className='px-6 py-3 bg-[#ff4a54] rounded-md text-white opacity-0 group-hover:opacity-100 transition-all duration-[0.5] ease-linear'>Fresh Laptop</button>
                       

                    </div>
                    <button className='px-4 py-2 text-2xl bg-[#000] rounded-md text-white opacity-0 group-hover:opacity-100 absolute transition-all duration-[.5] ease-linear'>+</button>
                    </div>
                    <div className='w-[515px] h-[503px] flex items-center justify-center relative group'>
                    <img src={pic5} alt="" className='rounded-2xl'/>
                    <div className='absolute top-[150px] left-[160px]'>
                        <button className='px-6 py-3 bg-[#ff4a54] rounded-md text-white opacity-0 group-hover:opacity-100 transition-all duration-[0.5] ease-linear'>Fresh Laptop</button>
                       

                    </div>
                    <button className='px-4 py-2 text-2xl bg-[#000] rounded-md text-white opacity-0 group-hover:opacity-100 absolute transition-all duration-[.5] ease-linear'>+</button>
                    </div>
                    <div className='w-[515px] h-[503px] flex items-center justify-center relative group'>
                    <img src={pic6} alt="" className='rounded-2xl'/>
                    <div className='absolute top-[150px] left-[160px]'>
                        <button className='px-6 py-3 bg-[#ff4a54] rounded-md text-white opacity-0 group-hover:opacity-100 transition-all duration-[0.5] ease-linear'>Fresh Laptop</button>
                       

                    </div>
                    <button className='px-4 py-2 text-2xl bg-[#000] rounded-md text-white opacity-0 group-hover:opacity-100 absolute transition-all duration-[.5] ease-linear'>+</button>
                    </div>
                </div> 

                <div className='flex port3'>
                    <div className='w-[515px] h-[503px] flex items-center justify-center relative group'>
                    <img src={pic7} alt="" className='rounded-2xl'/>
                    <div className='absolute top-[150px] left-[160px]'>
                        <button className='px-6 py-3 bg-[#ff4a54] rounded-md text-white opacity-0 group-hover:opacity-100 transition-all duration-[0.5] ease-linear'>Fresh Laptop</button>
                       

                    </div>
                    <button className='px-4 py-2 text-2xl bg-[#000] rounded-md text-white opacity-0 group-hover:opacity-100 absolute transition-all duration-[.5] ease-linear'>+</button>
                    </div>
                    <div className='w-[515px] h-[503px] flex items-center justify-center relative group'>
                    <img src={pic8} alt="" className='rounded-2xl'/>
                    <div className='absolute top-[150px] left-[160px]'>
                        <button className='px-6 py-3 bg-[#ff4a54] rounded-md text-white opacity-0 group-hover:opacity-100 transition-all duration-[0.5] ease-linear'>Fresh Laptop</button>
                       

                    </div>
                    <button className='px-4 py-2 text-2xl bg-[#000] rounded-md text-white opacity-0 group-hover:opacity-100 absolute transition-all duration-[.5] ease-linear'>+</button>
                    </div>
                    <div className='w-[515px] h-[503px] flex items-center justify-center relative group'>
                    <img src={pic9} alt="" className='rounded-2xl'/>
                    <div className='absolute top-[150px] left-[160px]'>
                        <button className='px-6 py-3 bg-[#ff4a54] rounded-md text-white opacity-0 group-hover:opacity-100 transition-all duration-[0.5] ease-linear'>Fresh Laptop</button>
                       

                    </div>
                    <button className='px-4 py-2 text-2xl bg-[#000] rounded-md text-white opacity-0 group-hover:opacity-100 absolute transition-all duration-[.5] ease-linear'>+</button>
                    </div>
                </div>

                <div className='ml-[50%]'>
                <button className='px-10 py-4 bg-[#ff4a54] text-white font-semibold rounded-md hover:bg-blue-950 transition-all duratio-[.3]'>All Projects</button>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Portfolio