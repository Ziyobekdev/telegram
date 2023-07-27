import React from 'react'
import Tels from './Tels'
import Navbar from './Navbar'
import Chat from './Chat'

function jamlovchi() {
  return (
    <div className='d-flex'>
        <Navbar/>
        <Tels/>
        <Chat/>
    </div>
  )
}

export default jamlovchi