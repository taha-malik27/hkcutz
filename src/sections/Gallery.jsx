import React, { useEffect } from 'react'
import gal1 from '../assets/IMG_5582.jpg'
import gal2 from '../assets/IMG_5583.jpg'
import gal3 from '../assets/IMG_5585.jpg'
import gal4 from '../assets/IMG_5586.jpg'
import gal5 from '../assets/IMG_5587.jpg'
import gal6 from '../assets/IMG_5588.jpg'
import gal7 from '../assets/IMG_5589.jpg'
import gal8 from '../assets/IMG_5590.jpg'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    })
  }, [])

  return (
    <section id='gallery' className="w-full bg-black flex flex-col md:px-20 px-10 py-12 justify-center items-center gap-8">
      <h1 className="text-6xl text-white font-bold text-center">Gallery</h1>
      <h1 className="text-2xl text-white font-bold text-center">Feel the experience, feel the energy! </h1>

      <div className="lg:w-[80%] w-full grid md:grid-cols-3 grid-cols-1 gap-4">
        <img
          data-aos="zoom-out"
          data-aos-delay="200"
          src={gal6}
          alt=""
          className="rounded-xl w-full h-auto object-cover"
        />
        <img
          data-aos="zoom-out"
          data-aos-delay="300"
          src={gal8}
          alt=""
          className="rounded-xl w-full h-auto object-cover"
        />
        <img
          data-aos="zoom-out"
          data-aos-delay="400"
          src={gal4}
          alt=""
          className="rounded-xl w-full h-auto object-cover"
        />
        <img
          data-aos="zoom-out"
          data-aos-delay="500"
          src={gal3}
          alt=""
          className="rounded-xl w-full h-auto object-cover"
        />
        <img
          data-aos="zoom-out"
          data-aos-delay="600"
          src={gal7}
          alt=""
          className="rounded-xl w-full h-auto object-cover"
        />
        <img
          data-aos="zoom-out"
          data-aos-delay="700"
          src={gal1}
          alt=""
          className="rounded-xl w-full h-auto object-cover"
        />
      </div>
    </section>
  )
}

export default Gallery
