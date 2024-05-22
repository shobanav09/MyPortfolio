import React from 'react'
import caraImg from '../img/projects/caraSS.png'
import googleImg from '../img/projects/googleSS.png'

const projects = [
    {
        "title":"Cara - E-commerce Website for Clothes",
        "desc":"Cara is a modern and responsive e-commerce platform designed for the fashion industry, offering a seamless shopping experience for clothing enthusiasts. Built with React, this project showcases my proficiency in front-end development and user interface design.",
        "img":caraImg,
        "github":"https://github.com/shobanav09/Cara_Website",
        "demo":"https://cara-shopping-six.vercel.app/"

    },

    {
        "title":"Google Search Engine Clone",
        "desc":"This project is a functional clone of the Google Search Engine, demonstrating my skills in front-end development and API integration using React and Google APIs.",
        "img":googleImg,
        "github":"https://github.com/shobanav09/Google_search_Clone",
        "demo":"https://deploy-google-search-clone.vercel.app/"

    }
]
const Project = () => {
  return (
    <>
        <div className='w-[80%] my-5 mx-auto my-[120px]'>
        <div className=' font-heading text-3xl font-medium  mb-11 text-center'>Projects</div>

            {projects.map((data,index)=>(
                <div data-aos='fade-right' >
                    <div className=' mb-3'>
                        <div className=' text-2xl font-heading '>{data.title}</div>
                        <div className='flex gap-6 items-center justify-evenly project'>
                            <div className=' font-para text-xl font-medium text-justify w-[40%] project-desc max-[600px]:text-[19px]'>{data.desc}</div>
                            <img className='w-100 h-60 project-img object-cover' src={data.img} alt="" />
                        </div>
                        <div className='flex justify-evenly m-6'>
                            <div className='flex gap-2 items-center font-para text-xl text-[#1a1a4a]'>
                                <span class="[&>svg]:h-5 [&>svg]:w-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 496 512">
                                        <path
                                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                                    </svg>
                                </span>
                                <a href={data.github} target='_blank' className='text-white'>GitHub Link</a>
                            </div>
                            
                            <div className='flex gap-2 items-center font-para text-xl text-[#1a1a4a]'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>

                                <a href={data.demo}  target='_blank' className='text-white'>Live demo</a>
                            </div>
                        </div>
                    </div>
                

                </div>
            ))}
        </div>
    </>
  )
}

export default Project