import React from 'react'
import {useTypewriter,Cursor} from 'react-simple-typewriter'
import myImg from '../img/image.jpg'

const Index = () => {
    const [text] = useTypewriter({
        words:['i am Shobana V ','i am a Full-Stack Developer'],
        loop:{},
        typeSpeed:120,
        deleteSpeed:80
    })
  return (
    <>
    {/* laptop screen */}
        <div className=' hide1 w-[90%] mx-[auto] my-[50px] flex justify-between gap-5 items-center'>
            
                <div className='font-heading text-6xl font-bold mb-5 w-[70%]'>Hello !!!  <div className='text-slate-400 my-3 font-heading '>{text}<Cursor/></div></div>
           
            <img className='w-96 h-100 border rounded-[10%] object-cover' src={myImg} alt="" />
        </div>

    {/* Mobile Screen */}
        <div className=' hide2 w-[80%] mx-[auto] my-[120px] flex flex-col gap-5 items-center'>
            <img className='w-60 h-60 border rounded-[80%] object-cover' src={myImg} alt="" />

            <div >
                <div className='font-heading text-5xl font-bold mb-5 w-[70%]'>Hello !!! <div className='text-slate-400 font-heading'>{text}<Cursor/></div></div>
            </div>
        </div>
        
    </>
  )
}

export default Index