import React,{ useState } from 'react'
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const navbar = () =>{
    if(navOpen == true){
      setNavOpen(false)
    }else{
      setNavOpen(true)
    }
  }
  return (
    <nav className='sticky top-0 z-50 bg-gray-900 text-white py-2 px-[5%] flex justify-between items-center'>
        {/* === logo === */}
        <div className='flex items-center'>
          <img src='/images/logo.png' height={40} width={40} alt="logo" />
          <span className='pl-2 font-bold'>7Sins Esports</span>
        </div>
        {/* === menu buttons === */}
        <div className='md:hidden'>
          {navOpen ? <CloseIcon onClick={()=> navbar()} /> : <MenuIcon onClick={()=> navbar()} />}
        </div>
        {/* === menu items === */}
        <div className='hidden md:block'>
          <ul className='flex gap-2'>
              <li className='uppercase ease-in duration-200 border-b-2 border-transparent hover:bg-gray-600 py-2 hover:border-indigo-500 px-3'><Link href="/"><a>Home</a></Link></li>
              <li className='uppercase ease-in duration-200 border-b-2 border-transparent hover:bg-gray-600 py-2 hover:border-indigo-500 px-3'><Link href="/lineup"><a>Line up</a></Link></li>
              <li className='uppercase ease-in duration-200 border-b-2 border-transparent hover:bg-gray-600 py-2  hover:border-indigo-500 px-3'><Link href="/achievements"><a>Achievements</a></Link></li>
              <li className='uppercase ease-in duration-200 border-b-2 border-transparent hover:bg-gray-600 py-2 hover:border-indigo-500 px-3'><Link href="https://www.facebook.com/7SinsEsportsBD"><a target='_blank'> Contact</a></Link></li>
              <li className='uppercase ease-in duration-200 border-b-2 border-transparent hover:bg-gray-600 py-2 hover:border-indigo-500 px-3'><Link href="/about"><a>About</a></Link></li>
          </ul>
        </div>
        {/* === responsive menu items ===  */}
        {navOpen && <div onClick={()=> navbar()} className='md:hidden w-full absolute top-10 right-0 bg-gray-900'>
          <ul className='flex-col text-right gap-2 pt-3 pr-3'>
              <li className='uppercase ease-in duration-200 border-b-2 border-transparent hover:bg-gray-600 py-2 hover:border-indigo-500 px-3'><Link href="/"><a>Home</a></Link></li>
              <li className='uppercase ease-in duration-200 border-b-2 border-transparent hover:bg-gray-600 py-2 hover:border-indigo-500 px-3'><Link href="/lineup"><a>Line up</a></Link></li>
              <li className='uppercase ease-in duration-200 border-b-2 border-transparent hover:bg-gray-600 py-2  hover:border-indigo-500 px-3'><Link href="/achievements"><a>Achievements</a></Link></li>
              <li className='uppercase ease-in duration-200 border-b-2 border-transparent hover:bg-gray-600 py-2 hover:border-indigo-500 px-3'><Link href="https://www.facebook.com/7SinsEsportsBD"><a target="_blank">Contact</a></Link></li>
              <li className='uppercase ease-in duration-200 border-b-2 border-transparent hover:bg-gray-600 py-2 hover:border-indigo-500 px-3'><Link href="/about"><a>About</a></Link></li>
          </ul>
        </div> 
        }
    </nav>
  )
}
