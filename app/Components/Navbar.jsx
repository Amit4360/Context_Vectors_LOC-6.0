import React from 'react'
import Link from 'next/link'
import './components.css'

const Navbar = () => {
  return (
    <>
      <div id='sidebar' className='flex flex-col bg-[#cbcbcb3a] w-[240px]' style={{
        boxShadow: '4px 4px 2px rgba(0, 0, 0, 0.25)',
      }}>
        <div className='flex flex-row'>
          <img src='/logo.png' style={{width:'50px'}}/>
          <p className='text-white'>Dragonite</p>
        </div>
        <Link href='/myprofile' className='text-white'>Profile</Link>
        <Link href='/' className='text-white flex flex-row'><img src='/icons/home.png' className='w-5 h-5 mx-2'/>Home</Link>
        <Link href='/trending' className='text-white'>Trending</Link> 
        <Link href='/all' className='text-white'>All</Link>
        <Link href='/aboutus' className='text-white'>About Us</Link>

        <p className='text-white'>Your groups</p>
        <Link href='/group1' className='text-white'>Group 1</Link>
        <Link href='/group2' className='text-white'>Group 2</Link>
        <Link href='/group3' className='text-white'>Group 3</Link>
        <p className='text-white'>Create a group</p>

        <p className='text-white'>Your groups</p>
        <Link href='/group1' className='text-white'>Group 1</Link>
        <Link href='/group2' className='text-white'>Group 2</Link>
        <Link href='/group3' className='text-white'>Group 3</Link>
        <p className='text-white'>Create a group</p>
      </div>
    </>
  )
}

export default Navbar