import React, { useEffect } from 'react'
import heroimg from '../assets/hero.jpg'
import { FaLocationDot } from 'react-icons/fa6'
import { MdOutlinePhoneAndroid } from 'react-icons/md'
import { MdEmail } from 'react-icons/md'
import barberpole from '../assets/barberpole.png'
import schedule from '../assets/schedule.png'
import scissors from '../assets/scissors.png'
import givemoney from '../assets/givemoney.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: 'ease-in-sine',
      delay: 50,
    })
  }, [])

  return (
    <>
      <section
        id="hero"
        className="mt-4 container mx-auto w-full px-10 md:px-[120px] flex flex-col md:flex-row justify-center items-center gap-20"
      >
        <div
          id="content-box"
          className="flex flex-col justify-center items-start gap-10"
        >
          <h1
            data-aos="zoom-in"
            className="text-6xl text-black font-bold"
          >
            BARBER BASED IN CALGARY
          </h1>
          <div
            data-aos="slide-up"
            className="flex flex-col justify-center items-start gap-6"
          >
            <div className="flex items-center gap-3">
              <FaLocationDot className="text-black text-2xl" />
              <span className="text-xl text-gray-800">
                Kincora, Hanson Ranch, Calgary, AB T3R 1M2
              </span>
            </div>
            <div className="flex items-center gap-3">
              <MdOutlinePhoneAndroid className="text-black text-2xl" />
              <span className="text-xl text-gray-800">
                +1 825‑945‑1665
              </span>
            </div>
            <div className="flex items-center gap-3">
              <MdEmail className="text-black text-2xl" />
              <span className="text-xl text-gray-800">
                harisrizwanawan661@gmail.com
              </span>
            </div>
          </div>

          <a
            href="https://hkcutz.setmore.com/"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="zoom-in"
            className="
              inline-block px-10 py-4
              rounded-xl border-2 border-black
              bg-black text-white
              font-semibold text-lg
              hover:bg-white hover:text-black
              transition-colors duration-200
            "
          >
            BOOK WITH US!
          </a>
        </div>

        <div
          data-aos="zoom-in"
          id="image-box"
          className="w-full md:ml-16"
        >
          <img
            src={heroimg}
            alt="Barber at work"
            className="rounded-xl w-full object-cover md:h-[80vh]"
          />
        </div>
      </section>

      <section
        className="mt-16 grid grid-cols-1 md:grid-cols-4 justify-items-center items-center w-full md:px-[120px] px-10 py-10 gap-10"
      >
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex flex-col justify-center items-center gap-4 text-center"
        >
          <img
            src={barberpole}
            alt="Barber pole icon"
            className="w-16 h-16 transform hover:scale-110 transition duration-300"
          />
          <h3 className="text-xl text-gray-600">
            Timeless atmosphere delivering the latest trends
          </h3>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="flex flex-col justify-center items-center gap-4 text-center"
        >
          <img
            src={scissors}
            alt="Scissors icon"
            className="w-16 h-16 transform hover:scale-110 transition duration-300"
          />
          <h3 className="text-xl text-gray-600">
            Executed with millimetre‑level accuracy
          </h3>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="400"
          className="flex flex-col justify-center items-center gap-4 text-center"
        >
          <img
            src={givemoney}
            alt="Money exchange icon"
            className="w-16 h-16 transform hover:scale-110 transition duration-300"
          />
          <h3 className="text-xl text-gray-600">
            Transparent and competitive rates
          </h3>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="500"
          className="flex flex-col justify-center items-center gap-4 text-center"
        >
          <img
            src={schedule}
            alt="Schedule icon"
            className="w-16 h-16 transform hover:scale-110 transition duration-300"
          />
          <h3 className="text-xl text-gray-600">
            Automated booking system working around your schedule
          </h3>
        </div>
      </section>
    </>
  )
}

export default Hero
