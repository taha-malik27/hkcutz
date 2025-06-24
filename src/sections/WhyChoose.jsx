import React, { useEffect } from 'react'
import whyimg from '../assets/whychoose.jpg'
import why1 from '../assets/why.jpg'
import { FaAngleDoubleRight } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'

const WhyChoose = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    })
  }, [])

  return (
    <section
      id="about"

      className="w-full min-h-[95vh]   /* bump to taste */
               md:px-20 px-10 pt-20 pb-10  /* more top padding than bottom */
               flex flex-col md:flex-row
               justify-start md:justify-start   /* push content toward top */
               items-center gap-20
               bg-cover bg-bottom        /* keep the background anchored to bottom */
               relative"
      style={{ backgroundImage: `url(${why1})` }}
    >

      <div

        data-aos="zoom-in"

        className="
            -mt-18 md:-mt-20         /* ‑6 rem on mobile, ‑8 rem on md+ */
            bg-black/90
            border-[8px] border-themegray rounded-xl
            p-10 flex flex-col justify-center items-center gap-10
            md:w-2/5 w-full
          "
      >

        <h2 className="text-4xl font-bold text-white text-center">
          WORKING HOURS
        </h2>
        <div className="flex flex-col items-center gap-4">
          <p className="text-lg text-gray-200">SUNDAY 9 AM – 5 PM</p>
          <p className="text-lg text-gray-200">MONDAY Closed</p>
          <p className="text-lg text-gray-200">TUESDAY Closed</p>
          <p className="text-lg text-gray-200">WEDNESDAY Closed</p>
          <p className="text-lg text-gray-200">THURSDAY 9 AM – 5 PM</p>
          <p className="text-lg text-gray-200">FRIDAY 9 AM – 5 PM</p>
          <p className="text-lg text-gray-200">SATURDAY 9 AM – 5 PM</p>

        </div>
        <a
          href="https://hkcutz.setmore.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-6 w-full px-6 py-3
            bg-themegray
            text-black font-semibold
            rounded-lg
            transition-colors duration-200
            hover:bg-white hover:text-black
            text-center
          "
        >
          BOOK WITH US!
        </a>
      </div>


    </section>
  )
}

export default WhyChoose
