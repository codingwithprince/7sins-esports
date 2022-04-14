import Head from 'next/head'
import Link from "next/link";
import Achievements from '../components/Achievements'
import Hero from '../components/Hero'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Welcome from '../components/Welcome';

export default function Home() {
  return (
    <div>
      <Head>
        <title>7Sins eSports</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-gray-800 pb-5'>
        <Welcome />
        <Achievements />
        {/* === lineup === */}
        <div>
          <Hero />
          <Link href='/lineup'>
            <button className="block text-white m-auto text-xs my-3 bg-transparent border-2 border-cyan-500 shadow-lg shadow-cyan-400/50 px-2 py-2 rounded-md ease-in-out duration-100 uppercase font-mono hover:bg-sky-500">More Details</button>
          </Link>
        </div>
      
      </main>
    </div>
  )
}
