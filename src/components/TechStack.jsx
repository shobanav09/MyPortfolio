import React, { useEffect } from 'react'
import HTML from '../img/techStack/html.svg'
import css from '../img/techStack/css.svg'
import javascript from '../img/techStack/javascript.svg'
import bootstrap from '../img/techStack/bootstrap.svg'
import tailwind from '../img/techStack/tailwind.svg'
import react from '../img/techStack/react.svg'
import node from '../img/techStack/node.svg'
import express from '../img/techStack/express.svg'
import mongo from '../img/techStack/mongo.svg'
import mysql from '../img/techStack/mysql.svg'
import python from '../img/techStack/java.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'
const techstack =[
    {
        "img":HTML,
        "name":"HTML"
    },
    {
        "img":css,
        "name":"CSS"
    },
    {
        "img":tailwind,
        "name":"Tailwind CSS"
    },
    {
        "img":bootstrap,
        "name":"Bootstrap"
    },
    {
        "img":javascript,
        "name":"JavaScript"
    },
    {
        "img":react,
        "name":"React JS"
    },
    {
        "img":node ,
        "name":"Node JS"
    },
    {
        "img":express,
        "name":"Express JS"
    },
    {
        "img":mongo,
        "name":"Mongo DB"
    },
    {
        "img":mysql,
        "name":"MySQL"
    },
    {
        "img":python,
        "name":"Python"
    },
]
const TechStack = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    },[])
  return (
    <>
        <div className='w-[80%]  mx-auto font-heading text-3xl font-medium mb-11 text-center'>Tech Stack</div>
        <div className='mb-[120px]'>
            <div className='w-[80%]  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  rounded-[12px]'>
                {techstack.map((data, index) => (
                    <div key={index} className='flex items-center gap-3 py-1 px-2'data-aos='fade-up'>
                        <img className='w-6' src={data.img} alt={data.name} />
                        <div className='font-medium text-lg'>{data.name}</div>
                    </div>
                ))}
            </div>
        </div>
        
    </>


  )
}

export default TechStack