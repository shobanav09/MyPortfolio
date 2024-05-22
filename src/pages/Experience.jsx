import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Experience = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    },[])

  return (
    <div className='w-[80%]  mx-auto my-[80px]' >
        <div data-aos='fade-right' className='mt-11' >
            <div className=' font-heading text-3xl font-medium  mb-11 text-center '>💼 Experience</div>
            <div className='flex gap-2 items-center mb-3'>
                <div className=' text-2xl font-heading '>IamNeo</div>
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

export default Experience