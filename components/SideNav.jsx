'use client'
import { useState } from 'react'
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from 'react-icons/ai'
import { GrProjects } from 'react-icons/gr'
import { BsPerson } from 'react-icons/bs'

const SideNav = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
    console.log('state change', nav)
  }
  return (
    <div id='main'>
      <AiOutlineMenu
        onClick={handleNav}
        className='absolute bg-white top-5 p-1 w-8 h-8 rounded-[50%] right-4 z-[99] md:hidden'
      />
      {nav ? (
        <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
          <a
            href='#main'
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-200'
          >
            <AiOutlineHome size={20} />
            <span className='pl-4'>Home</span>
          </a>
          <a
            href='#main'
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-200'
          >
            <GrProjects size={20} />
            <span className='pl-4'>Work</span>
          </a>
          <a
            href='#main'
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-200'
          >
            <AiOutlineProject size={20} />
            <span className='pl-4'>Projects</span>
          </a>
          <a
            href='#main'
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-200'
          >
            <BsPerson size={20} />
            <span className='pl-4'>Resume</span>
          </a>
          <a
            href='#main'
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-200'
          >
            <AiOutlineMail size={20} />
            <span className='pl-4'>Contact</span>
          </a>
        </div>
      ) : (
        ''
      )}
      <div className='md:block hidden fixed top-[25%] z-10'>
        <div className='flex flex-col pl-10'>
          <a
            href='#main'
            className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
          >
            <AiOutlineHome size={20} />
          </a>
        </div>
        <div className='flex flex-col pl-10'>
          <a
            href='#work'
            className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
          >
            <GrProjects size={20} />
          </a>
        </div>
        <div className='flex flex-col pl-10'>
          <a
            href='#projects'
            className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
          >
            <AiOutlineProject size={20} />
          </a>
        </div>
        <div className='flex flex-col pl-10'>
          <a
            href='#profile'
            className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
          >
            <BsPerson size={20} />
          </a>
        </div>
        <div className='flex flex-col pl-10'>
          <a
            href='#contact'
            className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
          >
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
    </div>
  )
}
export default SideNav
