import React from 'react'
import Link from 'next/link'
import { Fade} from 'react-slideshow-image';
import { Slide } from 'react-slideshow-image';


const slideImages = [
  {
    url: '/images/lineup/hopeless.jpg',
    caption: 'Slide 2'
  },
  {
    url: '/images/lineup/guildofsevensins.jpg',
    caption: 'Slide 3'
  },
];


const Welcome = () => {
  return (
    <div className="slide-container">
    <Slide>
     {slideImages.map((slideImage, index)=> (
        <div className="each-slide" key={index}>
          <div style={{'backgroundImage': `url(${slideImage.url})`}} className='h-[65vh] blur-sm bg-no-repeat bg-cover bg-center'>
              <div className='bg-black opacity-70 w-full h-full'>
              </div>
          </div>
        </div>
      ))} 
    </Slide>
    <div className='grid md:grid-cols-2 py-3 sm:py-10 absolute left-0 right-0 top-20 z-1'>
        <div className='w-full p-5 justify-center items-center flex'>
            <div className='text-white font-thin lg:ml-10'>
                <h3 className='text-lg  text-gray-300  md:text-2xl uppercase tracking-widest font-mono'>Welcome to</h3>
                <h1 className='text-[50px] font-bold md:text-6xl lg:text-8xl  my-2 md:my-10 text-sky-500 font-mono'> <span className='font-thin pr-2 text-white'>7Sins</span>Esports</h1>
                <h3 className='text-[12px] text-gray-300  md:text-2xl mb-10 uppercase tracking-widest font-mono'>An E-sports organization from BANGLADESH.</h3>
                <Link href='/about'>
                  <button className='hidden md:block bg-transparent border-2 hover:bg-transparent border-cyan-500 font-bold font-mono shadow-lg shadow-cyan-400/50 px-2 py-2 rounded-md ease-in-out duration-100 uppercase font-mono bg-sky-500 '>About us</button>
                </Link>
            </div>
        </div>
        <div className='justify-center items-center flex'>
            <img className='w-[220px] animate-bounce md:w-[350px]' src="/images/logo.png" alt="" />
        </div>
    </div>
  </div>

  
    
  )
}

export default Welcome