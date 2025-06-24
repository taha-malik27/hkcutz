import React from 'react'
import { FaTiktok, FaInstagram, FaArrowUp } from 'react-icons/fa6'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <>
      <section
        id='footer'
        className="bg-black w-full md:px-10 md:py-20 py-10 flex flex-col justify-center items-center gap-6 border-[20px]"
      >
        <h1 className="text-white font-bold text-5xl text-center">
          Elevate <span className="italic text-themegray">Your</span> Confidence{' '}
          <span className="italic text-themegray">Today</span> 
          <span className="italic text-themegray">!</span>
        </h1>
        <div className="flex justify-center items-center gap-4">
          <a
            href="https://www.instagram.com/hkcutz_/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-400 p-4 rounded-full cursor-pointer hover:bg-black hover:text-white transition-transform duration-300"
          >
            <FaInstagram className="text-2xl text-white" />
          </a>
          <a
            href="https://www.tiktok.com/@hkcutz_"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-400 p-4 rounded-full cursor-pointer hover:bg-black hover:text-white transition-transform duration-300"
          >
            <FaTiktok className="text-2xl text-white" />
          </a>
        </div>
        <h1 className='text-white'>© 2025 HKCUTZ | All rights reserved.</h1>
      </section>

      <Link
        to="hero"
        spy={true}
        offset={-100}
        smooth={true}
        className="fixed bottom-6 right-6 bg-themegray p-4 rounded-full hover:bg-black hover:text-white cursor-pointer transition-transform duration-300"
        data-aos="slide-right"
        data-aos-delay="200"
      >
        <FaArrowUp className="text-2xl" />
      </Link>
    </>
  )
}

export default Footer
