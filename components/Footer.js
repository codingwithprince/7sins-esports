import React from 'react'
import Link from 'next/link'

export const Footer = () => {
  return (
  <div className="p-4 bg-gray-900 sm:p-6">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0 flex items-center justify-center">
          <Link href="/" className="flex items-center">
            <img src="/images/logo.png" className="mr-3 w-10 h-10" alt="FlowBite Logo" />
          </Link>
          <h3 className='text-white font-bold font-mono'>7Sins Esports</h3>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Developer</h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <Link href="https://www.facebook.com/profile.php?id=100008591616145" className="hover:underline">Prince Ahmed</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <Link href="https://www.facebook.com/7SinsEsportsBD" className="hover:underline ">Facebook</Link>
              </li>
              <li>
                <Link href="https://discord.gg/EtV49yw" className="hover:underline">Discord</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <Link href="#" className="hover:underline">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">Terms &amp; Conditions</Link>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="flex flex-col items-center justify-between">
          <span className="text-sm text-gray-500 sm:text-center ">?? 2022 <Link href="https://flowbite.com" className="hover:underline">7Sins Esports</Link>. All Rights Reserved.
          </span>
          <div className="text-gray-300 hover:text-blue-600 font-mono font-bold mt-3">
           <Link className='text-white' href="https://www.facebook.com/profile.php?id=100008591616145" className="hover:underline">Made By Prince??????</Link>
          </div>
        </div>
    </div>
  )
}
