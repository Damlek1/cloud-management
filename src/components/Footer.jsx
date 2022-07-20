import React from 'react'
import {FaFacebook, FaGithub,FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-y px-2'>
      <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
        <div>
          <h6 className='font-bold uppercase pt-2'>Solutions</h6>
          <ul>
            <li className='py-1 cursor-pointer hover:underline'>Marketing</li>
            <li className='py-1 cursor-pointer hover:underline'>Analytics</li>
            <li className='py-1 cursor-pointer hover:underline'>Commerce</li>
            <li className='py-1 cursor-pointer hover:underline'>Data</li>
            <li className='py-1 cursor-pointer hover:underline'>Cloud</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercase pt-2'>Supports</h6>
          <ul>
            <li className='py-1 cursor-pointer hover:underline'>Pricing</li>
            <li className='py-1 cursor-pointer hover:underline'>Documentation</li>
            <li className='py-1 cursor-pointer hover:underline'>Guides</li>
            <li className='py-1 cursor-pointer hover:underline'>API Status</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercase pt-2'>Company</h6>
          <ul>
            <li className='py-1 cursor-pointer hover:underline'>About</li>
            <li className='py-1 cursor-pointer hover:underline'>Blog</li>
            <li className='py-1 cursor-pointer hover:underline'>Jobs</li>
            <li className='py-1 cursor-pointer hover:underline'>Press</li>
            <li className='py-1 cursor-pointer hover:underline'>Partners</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercase pt-2'>legal</h6>
          <ul>
            <li className='py-1 cursor-pointer hover:underline'>Claims</li>
            <li className='py-1 cursor-pointer hover:underline'>Privacy</li>
            <li className='py-1 cursor-pointer hover:underline'>Terms</li>
            <li className='py-1 cursor-pointer hover:underline'>Policies</li>
            <li className='py-1 cursor-pointer hover:underline'>Conditions</li>
          </ul>
        </div>
          <div className='col-span-2 pt-8 md:pt-2'>
            <p className='font-bold uppercase'>Subscribe to our newsletter</p>
            <p className='py-4'>The latest news,articles, and resources, sent to your inbox weekly.</p>
            <form className='flex flex-col sm:flex-row'>
              <input className='w-full p-2 mr-4 rounded-md mb-4' type='email' placeholder='Enter your email' />
              <button className='p-2 mb-4'>Subscribe</button>
            </form>

          </div>
      </div>
      <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>Damlek &copy; 2022  All rights reserved</p>
        <div className='flex justify-between  sm:w-[300px] pt-4 text-2xl'>
          <FaFacebook  className='cursor-pointer'/>
          <FaInstagram className='cursor-pointer' />
          <FaTwitter className='cursor-pointer' />
          <a className='cursor-pointer' href='https://www.linkedin.com/in/damlek1' target='_blank' rel="noopener noreferrer"><FaLinkedin /></a>

          <a className='cursor-pointer' href='https://github.com/Damlek1'><FaGithub /></a>

        </div>
      </div>
    </div>
  )
}

export default Footer