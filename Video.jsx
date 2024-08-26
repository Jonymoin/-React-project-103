import React,{useState} from 'react'
import video from '../images/video.jpg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Video = () => {
    useGSAP(()=>{
        gsap.from(".vd",{
            y:-200,
            opacity:0,
            duration:.8,
            stagger:.4,
            scrollTrigger:{
                trigger:".vd",
                scroll:"body",
                markers:true,
                start:"top 70%"
            }
        })
    })


    const [show, setShow] = useState(false)
  return (
    <section>
        <div className='video mt-32 relative vd'> 
            <img src={video} alt=""  className='mx-auto  grayscale-[70%] rounded-2xl'/>
            <div className='absolute top-10 left-[30%]'>
                <h2 className='text-white font-semibold text-6xl'>Let's Create Something</h2>
                <h2 className='text-white font-semibold text-6xl text-center mt-5'>Creative Together</h2>
                <p className='mt-5 text-white text-[18px] text-center'>We can’t wait to hear from making something beautiful and new!</p>

                {
                    show && <div className='absolute top-5 flex'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/uXk62ZgPH-4?si=JlOo-pxwJygZr-Ua" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <button className='mb-[270px] px-10 bg-red-600 rounded' onClick={() => setShow(false)}> close</button>
                    </div>
                }


                <button className='bg-white ml-[40%] mt-[30%] p-14 rounded-[50%] text-2xl font-bold' onClick={() => setShow(!show)}>Play</button>
                


            </div>
        </div>
    </section>
  )
}

export default Video