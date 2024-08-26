import React from 'react'
import gsap from 'gsap'

import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const Mapf = () => {
  useGSAP(()=>{
    gsap.from(".mf",{
        y:200,
        opacity:0,
        duration:.8,
        stagger:.4,
        scrollTrigger:{
            trigger:".mf",
            scroll:"body",
            markers:true,
            start:"top 70%"
        }
    })
})
  return (
    <section className='mt-[140px] relative'>
      <div className='mf'>
      <iframe className='mx-auto rounded-lg' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29232.106136516897!2d90.7553527636471!3d23.675483538149155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37544676860da6f5%3A0x1482d6dd47538b9a!2sHomna!5e0!3m2!1sen!2sbd!4v1723174230821!5m2!1sen!2sbd" width="1300" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className='w-full flex gap-6'>
        <div className='pl-[70px] pt-10 w-1/2'>
        <ul className='flex flex-col'>
                    <li className='h-24 bg-slate-100 flex items-center p-8 border-[1px] border-solid border-[rgb(225,225,225)] hover:ml-[10px] transition-all duration-[0.5] group'>
                        <span className='border-[1px] bg-[#4c4e52] p-5 group-hover:bg-red-700'><svg class="fill-white w-10 h-10  group-hover:fill-red" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M144.402 196.3c-5.359-14.43-27.539-14.173-32.564.372L69.982 306.568c-6.901 18.37 20.98 28.974 28.035 10.678l6.745-17.709h46.542l6.667 17.666c7.11 18.389 34.896 7.72 28.068-10.592l-41.475-109.902a10.849 10.849 0 00-.162-.409zm-28.214 73.237l11.952-31.381 11.843 31.381zM428 215.95c8.284 0 15-6.716 15-15s-6.716-15-15-15h-46.539c-8.284 0-15 6.716-15 15v110.449c0 8.284 6.716 15 15 15H428c8.284 0 15-6.716 15-15s-6.716-15-15-15h-31.539v-25.225h28.107c8.284 0 15-6.716 15-15s-6.716-15-15-15h-28.107V215.95zm-153.422-.857c8.164 0 16.036 2.402 22.764 6.948 6.865 4.637 16.189 2.833 20.827-4.032 4.638-6.864 2.832-16.188-4.032-20.826-11.707-7.909-25.386-12.089-39.559-12.089-39.003 0-70.733 31.731-70.733 70.733s31.73 70.733 70.733 70.733c37.159 0 63.111-29.086 63.111-70.733 0-8.284-6.716-15-15-15h-33.345c-8.284 0-15 6.716-15 15s6.716 15 15 15h16.423c-3.72 13.801-13.167 25.733-31.189 25.733-22.461 0-40.733-18.273-40.733-40.733 0-22.461 18.272-40.734 40.733-40.734z"></path><path d="M497 241c-8.284 0-15 6.716-15 15 0 60.367-23.508 117.12-66.194 159.806S316.366 482 256 482s-117.12-23.508-159.806-66.194S30 316.367 30 256 53.508 138.88 96.194 96.194 195.634 30 256 30c30.273 0 59.642 5.879 87.292 17.475a225.166 225.166 0 0144.658 25.039l-19.883 2.505c-19.514 2.557-15.636 32.172 3.75 29.765l53.661-6.76c7.985-.661 14.332-8.288 13.494-16.263l-4.781-53.842c-.733-8.252-8.02-14.351-16.269-13.615-8.251.733-14.347 8.017-13.614 16.268l1.589 17.895a255.155 255.155 0 00-51.007-28.659C323.55 6.664 290.278 0 256 0 187.62 0 123.333 26.629 74.981 74.981S0 187.62 0 256s26.629 132.667 74.981 181.019S187.62 512 256 512s132.667-26.629 181.019-74.981S512 324.38 512 256c0-8.284-6.716-15-15-15z"></path></svg></span>
                        <h2 className='ml-10 font-semibold text-2xl'>Age :</h2>
                        <h3 className='ml-40 font-semibold text-2xl'>60</h3>
                    </li>
                    <li className=' h-24 bg-white flex items-center p-8 border-[1px] border-solid border-[rgb(225,225,225)] hover:ml-[10px] transition-all duration-[0.5] group'>
                        <span className='border-[1px] bg-[#4c4e52] p-5 group-hover:bg-red-700'><svg class="fill-[#fff] w-10 h-10  group-hover:fill-white" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M35 55h2v2h-2zm-8 0h2v2h-2zM17 39H7v8h10zm-8 2h2v4H9zm6 4h-2v-4h2z"></path><path d="M63 25v-2H43v-6h1.734A2.27 2.27 0 0047 14.734a2.27 2.27 0 00-1.142-1.967L26.364 1.628a4.848 4.848 0 00-4.729 0L2.142 12.767A2.27 2.27 0 001 14.734 2.27 2.27 0 003.266 17H5v12H3c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2v14c-1.103 0-2 .897-2 2v12h62V51c0-1.103-.897-2-2-2V35c1.103 0 2-.897 2-2v-2c0-1.103-.897-2-2-2v-4zm-10 4v-4h2v4zm-4 28h-2v-2h2zm0-4h-2v-2h2zm-2 6h2v2h-2zm4-8h2v10h-2zm6 6h-2v-2h2zm-2 2h2v2h-2zm2-6h-2v-2h2zm-2-12h-6v-2h6zm-6 2h6v2h-6zm0 4h6v2h-6zm-8 4V37h2v12c-1.103 0-2 .897-2 2zM31 61h-8v-4c0-4.411 3.589-8 8-8zM7 55h2v2H7zm6 6h-2V51h2zm2-6h2v2h-2zm0 4h2v2h-2zm6-22h2v14c0-1.103-.897-2-2-2zm0 14v10h-2V51zm10-4c-.685 0-1.354.07-2 .202V41h6v6.202A9.983 9.983 0 0033 47zm-4-8v8.841a9.991 9.991 0 00-2 1.178V37h14v12.019a9.944 9.944 0 00-2-1.178V39zm17.66-4H19.34a.34.34 0 01-.207-.61l11.685-8.988c.336-.259.756-.402 1.182-.402s.846.143 1.183.402l11.684 8.987a.34.34 0 01-.207.611zM25 27.354l-2 1.538V21h2zm8-4.193a4.151 4.151 0 00-2 0V21h2zm8 5.731V25h2v4h-1.86zM45 25h2v4h-2zm4 0h2v4h-2zM3 14.734c0-.095.051-.183.134-.23l19.494-11.14a2.774 2.774 0 012.744 0l19.495 11.14a.265.265 0 01-.133.496H3.266A.266.266 0 013 14.734zM7 17h34v6h-2v4.354l-4-3.077V19h-6v5.277l-2 1.538V19h-6v10H7zM3 31h17.26l-2.347 1.806c-.074.057-.133.129-.199.194H3zm2 30H3V51h2zm0-26h12.034A2.333 2.333 0 0019 36.966V49c-1.103 0-2 .897-2 2v2h-2v-2c0-1.103-.897-2-2-2h-2c-1.103 0-2 .897-2 2v2H7v-2c0-1.103-.897-2-2-2zm2 24h2v2H7zm34 2h-8V49c4.411 0 8 3.589 8 8zm2-10h2v10h-2zm18 10h-2V51h2zm-2-12h-2V37H47v12h-2V36.966A2.331 2.331 0 0046.966 35H59zm2-16H46.287c-.066-.065-.125-.138-.2-.195L43.74 31H61zm-2-4h-2v-4h2z"></path><path d="M9 19v8h10v-8zm2 2h2v4h-2zm6 4h-2v-4h2z"></path></svg></span>
                        <h2 className='ml-10 font-semibold text-2xl'>Residence :</h2>
                        <h3 className='ml-24 font-semibold text-2xl'>Bangladesh</h3>
                    </li>
                    <li className='h-24 bg-slate-100 flex items-center p-8 border-[1px] border-solid border-[rgb(225,225,225)] hover:ml-[10px] transition-all duration-[0.5] group'>
                        <span className='border-[1px] bg-[#4c4e52] p-5 group-hover:bg-red-700'><svg class="fill-[#fff] w-10 h-10  group-hover:fill-white" viewBox="0 0 511.999 511.999" xmlns="http://www.w3.org/2000/svg"><path d="M256.98 40.005c-5.53-.04-10.04 4.41-10.08 9.93-.04 5.52 4.4 10.03 9.93 10.07 5.52.04 10.03-4.4 10.07-9.92.04-5.52-4.4-10.03-9.92-10.08zm-.455 59.999c-38.611-.274-70.232 30.875-70.524 69.474-.291 38.597 30.875 70.233 69.474 70.524l.536.002c38.353 0 69.698-31.056 69.988-69.476.291-38.595-30.874-70.233-69.474-70.524zm-.516 120.001l-.384-.002c-27.571-.208-49.833-22.806-49.625-50.375.207-27.445 22.595-49.627 49.991-49.627l.384.002c27.571.208 49.833 22.806 49.625 50.375-.208 27.445-22.595 49.627-49.991 49.627zm43.622-172.416c-5.202-1.846-10.921.879-12.767 6.085-1.845 5.206.88 10.921 6.085 12.767 44.047 15.611 73.402 57.562 73.05 104.389-.041 5.522 4.402 10.033 9.925 10.075h.077c5.486 0 9.956-4.428 9.998-9.925.416-55.347-34.293-104.934-86.368-123.391z"></path><path d="M317.357 376.442c66.513-85.615 108.08-130.26 108.641-205.164C426.702 77.035 350.22 0 255.984 0 162.848 0 86.71 75.428 86.002 168.728c-.572 76.935 41.767 121.519 108.739 207.7C128.116 386.384 86.002 411.401 86.002 442c0 20.497 18.946 38.89 53.349 51.79 31.313 11.742 72.74 18.209 116.649 18.209s85.336-6.467 116.649-18.209c34.403-12.901 53.349-31.294 53.349-51.791 0-30.582-42.075-55.593-108.641-65.557zM106.001 168.879C106.625 86.55 173.8 20 255.986 20c83.159 0 150.633 67.988 150.013 151.129-.532 71.134-44.614 114.971-114.991 206.714-12.553 16.356-24.081 31.82-34.993 46.947-10.88-15.136-22.178-30.323-34.919-46.953-73.286-95.584-115.637-136.108-115.095-208.958zM256 492c-85.851 0-149.999-26.397-149.999-50 0-17.504 38.348-39.616 102.826-47.273 14.253 18.701 26.749 35.691 39.005 53.043a9.998 9.998 0 008.159 4.23H256a10 10 0 008.158-4.217c12.14-17.126 24.978-34.535 39.109-53.045 64.418 7.665 102.732 29.77 102.732 47.263C405.998 465.603 341.851 492 256 492z"></path></svg></span>
                        <h2 className='ml-10 font-semibold text-2xl'>Address :</h2>
                        <h3 className='ml-28 font-semibold text-2xl'>Homna</h3>
                    </li>
                    <li className=' h-24 bg-white flex items-center p-8 border-[1px] border-solid border-[rgb(225,225,225)] hover:ml-[10px] transition-all duration-[0.5] group'>
                        <span className='border-[1px] bg-[#4c4e52] p-5 group-hover:bg-red-700'><svg class="fill-[#fff] w-10 h-10  group-hover:fill-white" viewBox="0 0 125 125" xmlns="http://www.w3.org/2000/svg"><path d="M105.182 97.82H19.818A10.477 10.477 0 019.353 87.354v-52.72a10.477 10.477 0 0110.465-10.466h85.364a10.477 10.477 0 0110.465 10.466v52.72a10.477 10.477 0 01-10.465 10.466zM19.818 28.168a6.472 6.472 0 00-6.465 6.466v52.72a6.472 6.472 0 006.465 6.466h85.364a6.472 6.472 0 006.465-6.466v-52.72a6.472 6.472 0 00-6.465-6.466z"></path><path d="M62.5 72.764a2 2 0 01-1.324-.5l-48.2-42.548 2.647-3L62.5 68.1l46.879-41.379 2.647 3-48.2 42.548a1.994 1.994 0 01-1.326.495z"></path><path d="M11.888 91.54l32.38-36.895 3.009 2.64-32.38 36.894zm65.937-34.293l3.008-2.64L113.214 91.5l-3.008 2.64z"></path></svg></span>
                        <h2 className='ml-10 font-semibold text-2xl'>Email :</h2>
                        <h3 className='ml-36 font-semibold text-2xl'>Jony@outlook.com</h3>
                    </li>
                    </ul>
        </div>

        <div className='absolute right-28 top-[350px] shadow-xl'>
          <form className='bg-[#ecece1] p-10 rounded-lg'>
            <div>
            <input type="text" id='name' placeholder='Name' className='px-10 py-1 border-[1px] border-slate-500 rounded-lg' />
            <input type="text" id='email' placeholder='Email' className='px-10 py-1 border-[1px] border-slate-500 rounded-lg ml-4' />
            </div>
            <div>
            <input type="text" id='sub' placeholder='Subject' className='w-full px-10  py-1 border-[1px] mt-6 border-slate-500 rounded-lg' />
            
            </div>
            <div>
              <textarea name="textarea" id="textarea" placeholder='Enter /message' className='border-[1px] border-slate-500 mt-5 rounded-lg px-10 w-full h-[200px]'></textarea>
            </div>

            <button className='mt-10 px-10 py-5 bg-black text-white rounded-lg text-[20px] hover:bg-red-500'>Submit Now</button>

          </form>
        </div>
      </div>
    </section>
  )
}

export default Mapf