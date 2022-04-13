import React from 'react'

const Welcome = () => {
  return (
    <div className='grid sm:grid-cols-2 py-3 sm:py-10'>
        <div className='w-full p-5 justify-center items-center flex'>
            <div className='text-white font-thin'>
                <h3 className='text-normal md:text-2xl uppercase tracking-widest font-mono'>Welcome to</h3>
                <h1 className='text-4xl md:text-6xl lg:text-8xl my-2 md:my-10 text-gray-500 font-mono'> <span className='font-thin pr-2 text-white'>7Sins</span>Esports</h1>
                <button className='hidden md:block bg-blue-600 py-2 px-3 rounded-md ease-in-out duration-100 uppercase font-mono hover:bg-blue-800'>About us</button>
            </div>
        </div>
        <div className='justify-center items-center flex'>
            <img className='w-[220px] animate-bounce md:w-[350px]' src="/images/logo.png" alt="" />
        </div>
    </div>
  )
}

export default Welcome