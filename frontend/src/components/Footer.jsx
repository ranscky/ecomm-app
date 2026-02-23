import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className=''>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} alt="" className='mb-5 w-32'/>
                <p className='w-full md:w-2/3 text-gray-600'></p>
            </div>
        
            <div>
                <p className='text-xl font-medium mb-5'>Company</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <NavLink to='/'>
                        <li>Home</li>
                    </NavLink>
                    <NavLink to='/about'>
                        <li>About Us</li>
                    </NavLink>
                    <NavLink>
                        <li>Delivery</li>
                    </NavLink>
                    <NavLink>
                        <li>Privacy Policy</li>
                    </NavLink>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>Get in touch</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+233-244-123-456</li>
                    <li>contact@foreveryou.co.gh</li>
                </ul>
            </div>
        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>
                Copyright 2026 @ forever.com - All RIghts Reserved
            </p>
        </div>
    </div>
  )
}

export default Footer