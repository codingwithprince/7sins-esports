import React from 'react'
import Link from 'next/link'
const Welcome = () => {
  return (
    <div className='grid sm:grid-cols-2 py-3 sm:py-10'>
        <div className='w-full p-5 justify-center items-center flex'>
            <div className='text-white font-thin'>
                <h3 className='text-sm text-gray-500  md:text-2xl uppercase tracking-widest font-mono'>Welcome to</h3>
                <h1 className='text-4xl md:text-6xl lg:text-8xl my-2 md:my-10 text-sky-500 font-mono'> <span className='font-thin pr-2 text-white'>7Sins</span>Esports</h1>
                <h3 className=' text-sm text-gray-500  md:text-2xl mb-10 uppercase tracking-widest font-mono'>An E-sports organization from BANGLADESH.</h3>
                <Link href='/about'>
                  <button className='hidden md:block bg-transparent border-2 border-sky-500 py-2 px-3 rounded-md ease-in-out duration-100 uppercase font-mono hover:text-gray-800 hover:bg-sky-500'>About us</button>
                </Link>
            </div>
        </div>
        <div className='justify-center items-center flex'>
            <img className='w-[220px] animate-bounce md:w-[350px]' src="/images/logo.png" alt="" />
        </div>
    </div>
  )
}

export default Welcome