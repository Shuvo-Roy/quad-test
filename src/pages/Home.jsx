import React from 'react'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <React.Fragment>
      <div className='m-auto lg:w-10/12 md:w-11/12 sm:w-11/12'>
        <Navbar/>
      </div>
    </React.Fragment>
  )
}
