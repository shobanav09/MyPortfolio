import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import resume from '../documents/resume.pdf'
const About = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    },[])

  return (
    <div className='w-[80%]  mx-auto my-[80px]' >
        <div className='w-[100%] flex justify-center items-center gap-6 text-xl'>
            {/* <h2 className='font-heading font-bold'>Resume:</h2>
            <div className='flex gap-4 items-center border border-solid border-black rounded-[12px] py-1 px-2 hover:text-[blue] hover:font-bold'>
                <a className='' href={resume} download>Download</a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
            </div> */}

        </div>
        
        <div data-aos='fade-right' className='mt-11' >
            <div className=' font-heading text-3xl font-medium  mb-11 '>💼 Experience</div>
            <div className='flex gap-2 items-center mb-3'>
                <div className=' text-2xl font-heading '>iamNeo</div>
                <div className='text-[gray]'>JAN-2024 to MAY-2024</div>
            </div>
            <div className=' font-para text-xl font-medium text-justify max-[600px]:text-[19px]'>I completed my internship at a startup called iamneo, an EdTech company, where I worked as a SDE intern. During my time at iamneo, I utilized a technology stack that included React, REST APIs, and Tailwind CSS to enhance the platform's functionality and user experience.</div>
            
        </div>
        
        <div data-aos='fade-left' className='mt-11' >
            <div className=' font-heading text-3xl font-medium  mb-11 '>🎓 Education</div>
            <div className='flex gap-2 items-center mb-3'>
                <div className=' text-2xl font-heading '>Vellore Institute of Technology</div>
                <div className='text-[gray]'>2019 - 2024</div>
            </div>
            <div className=' font-para text-xl font-medium text-justify max-[600px]:text-[19px]'>I hold an <span className='font-bold'>Integrated M.Tech in Software Engineering</span> from Vellore Institute of Technology (VIT). My education provided a solid foundation in software development, advanced engineering principles, and cutting-edge technologies, equipping me with the skills needed to excel in the tech industry.</div>

        </div>
    </div>
  )
}

export default About