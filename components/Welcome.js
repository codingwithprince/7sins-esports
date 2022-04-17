import React from 'react'
import Link from 'next/link'
import { Fade} from 'react-slideshow-image';
import { Slide } from 'react-slideshow-image';


const slideImages = [
  {
    url: 'https://scontent.fzyl2-1.fna.fbcdn.net/v/t39.30808-6/277103183_470066814904388_7841619217095966411_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFO7SYcUCyrgx06PmHEdfdEty3GfUoFRSK3LcZ9SgVFIsbPKlJdFIBd4FvD0_hTsJVn8m9OTcFc9JWLjcfrL9z2&_nc_ohc=w7ZKFcoIZm4AX9hm5fo&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT812G6jwMGd_z3iIz9YthoW4cKEeU4miMJ5PGR1hniqxg&oe=6260A738',
    caption: 'Slide 2'
  },
  {
    url: 'https://scontent.fzyl2-1.fna.fbcdn.net/v/t39.30808-6/278097890_473872354523834_3129887509650538452_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGJ92_JdZLGBCqAfnczQ_lOkNLzz9-UwVyQ0vPP35TBXAA949TQTV3wuu5srIMu9BXe-5RLoZy7ibZzfgwmHVlh&_nc_ohc=862mWzYSTiIAX9CJSXU&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT87Air39pNt-37weuBuBkEv0F0EfVTtfEm_LseXay22zw&oe=6261911F',
    caption: 'Slide 3'
  },
  {
    url: 'https://scontent.fzyl2-1.fna.fbcdn.net/v/t1.6435-9/201795370_283298996914505_1293689081312464031_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeETg2ZioGYBZsrJleS-Dgt5MPyLC0k3xN4w_IsLSTfE3t0AD1T9yEsC5iGJVawvyCOYRD0TK5OZCHQVLoyefcGh&_nc_ohc=yITjOXdSBocAX_HppA8&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT_Ss1gEskJNlLDZlnMqsJcZxGlbPAmb7X4TdK0NuFgvKA&oe=627FC283',
    caption: 'slide 4'
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
                  <button className='hidden md:block bg-transparent border-2 hover:bg-transparent border-cyan-600 font-bold shadow-lg px-2 py-1 rounded-md ease-in-out duration-100 uppercase font-mono bg-sky-600 '>About us</button>
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