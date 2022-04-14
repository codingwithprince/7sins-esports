import React from 'react'
import Link from 'next/link'
import { Fade} from 'react-slideshow-image';
import { Slide } from 'react-slideshow-image';


const slideImages = [
  {
    url: 'https://scontent.fzyl2-1.fna.fbcdn.net/v/t39.30808-6/278097890_473872354523834_3129887509650538452_n.jpg?stp=dst-jpg_p180x540&_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGJ92_JdZLGBCqAfnczQ_lOkNLzz9-UwVyQ0vPP35TBXAA949TQTV3wuu5srIMu9BXe-5RLoZy7ibZzfgwmHVlh&_nc_ohc=wVKBtJa-hQAAX_wikb_&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT8XukMJbtnRJZ6ZtfRWqI8sZCl90lXmFqo-Jd5VBwEw7Q&oe=6259A81F',
    caption: 'Slide 1'
  },
  {
    url: 'https://scontent.fzyl2-1.fna.fbcdn.net/v/t1.6435-9/200029010_3846857465436700_7435806526592218735_n.jpg?stp=dst-jpg_p180x540&_nc_cat=104&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeFfoDLSGTtEwC8CEoYM3N9QGq5PFGP-iNUark8UY_6I1cyPy6lITXPLNXQ2YGdW2pyq6UyD3cMdMAjqd89veI5o&_nc_ohc=w5AOtmHqDe0AX9_PVbR&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT9eTXhzXhw4jx4ZJUu1EwJPZ5pz85hJdIeP7byI5cDVGg&oe=627996F6',
    caption: 'Slide 2'
  },
  {
    url: 'https://scontent.fzyl2-1.fna.fbcdn.net/v/t39.30808-6/278097890_473872354523834_3129887509650538452_n.jpg?stp=dst-jpg_p180x540&_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGJ92_JdZLGBCqAfnczQ_lOkNLzz9-UwVyQ0vPP35TBXAA949TQTV3wuu5srIMu9BXe-5RLoZy7ibZzfgwmHVlh&_nc_ohc=wVKBtJa-hQAAX_wikb_&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT8XukMJbtnRJZ6ZtfRWqI8sZCl90lXmFqo-Jd5VBwEw7Q&oe=6259A81F',
    caption: 'Slide 3'
  },
];


const Welcome = () => {
  return (
    <div className="slide-container">
    <Slide>
     {slideImages.map((slideImage, index)=> (
        <div className="each-slide" key={index}>
          <div style={{'backgroundImage': `url(${slideImage.url})`}} className='h-[60vh] blur-sm bg-no-repeat bg-cover bg-center'>
              <div className='bg-black opacity-70 w-full h-full'>
              </div>
          </div>
        </div>
      ))} 
    </Slide>
    <div className='grid md:grid-cols-2 py-3 sm:py-10 absolute left-0 right-0 top-20 z-1'>
        <div className='w-full p-5 justify-center items-center flex'>
            <div className='text-white font-thin lg:ml-10'>
                <h3 className='text-sm  text-gray-300  md:text-2xl uppercase tracking-widest font-mono'>Welcome to</h3>
                <h1 className='text-4xl md:text-6xl lg:text-8xl  my-2 md:my-10 text-sky-500 font-mono'> <span className='font-thin pr-2 text-white'>7Sins</span>Esports</h1>
                <h3 className=' text-sm text-gray-300  md:text-2xl mb-10 uppercase tracking-widest font-mono'>An E-sports organization from BANGLADESH.</h3>
                <Link href='/about'>
                  <button className='hidden md:block bg-transparent border-2 border-cyan-500 shadow-lg shadow-cyan-400/50 px-2 py-2 rounded-md ease-in-out duration-100 uppercase font-mono hover:bg-sky-500 '>About us</button>
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