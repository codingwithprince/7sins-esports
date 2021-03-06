import React from 'react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export const Layout = ({children}) => {
  return (
    <div className='bg-gray-800'>
        <Navbar />
        <main>{children}</main>
        <Footer />
    </div>
  )
}
