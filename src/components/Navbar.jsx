import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

const Navbar = () => {

  const [onMobileScreen,setMobileScreen] = useState(false)
  const location = useLocation()

  function handleMenu(){
    setMobileScreen(!onMobileScreen)
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const homeloc = location.pathname === '/'? 'font-bold border-b-[3px] border-[black]':'text-[black]'

  const aboutloc = location.pathname === '/about'? 'font-bold border-b-[3px] border-[black]':'text-[black]'

  const projectloc = location.pathname === '/project'? 'font-bold border-b-[3px] border-[black]':'text-[black]'

  const contactloc = location.pathname === '/contact'? 'font-bold border-b-[3px] border-[black]':'text-[black]'
  

  return (
   <div className='sticky top-0 z-50 border-b-[2px]'>
   {/* for laptop screens */}
     <div className='flex items-center w-[100%] mx-[auto] justify-between px-[82px] py-[10px] relative '>
        <div className="font-heading font-bold text-2xl">Shobana V</div>

        <div className='flex gap-6 font-heading font-medium text-xl max-[690px]:hidden'>
            <Link to='/' className={`hover:font-bold ${homeloc}`}>HOME</Link>
            <Link to='/about'  className={`hover:font-bold ${aboutloc}`}>ABOUT</Link>
            <Link to='/project'  className={`hover:font-bold ${projectloc}`}>PROJECTS</Link>
            <Link to='/contact' className={`hover:font-bold ${contactloc}`}>CONTACT</Link>
        </div>

        <svg onClick={handleMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 min-[691px]:hidden cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        
      </div>
{/* ON MOBILE SCREENS */}
      {
          onMobileScreen&&(
            <div className='absolute top-0 right-0 w-[auto]'>
              <div className='   flex flex-col justify-center items-center font-medium px-20'>
                <svg onClick={handleMenu}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 cursor-pointer">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

                <Link onClick={handleMenu} to='/' className='p-3 hover:font-bold'>HOME</Link>
                <Link onClick={handleMenu} to='/about' className='p-3 hover:font-bold'>ABOUT</Link>
                <Link onClick={handleMenu} to='/project' className='p-3 hover:font-bold'>PROJECTS</Link>
                <Link onClick={handleMenu} to='/contact' className='p-3 hover:font-bold'>CONTACT</Link>
              </div>
            </div>
          )
        }
      
   </div>
  )
}

export default Navbar