import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi'
import fivestar from '../assets/fivestar.png'

const clients = [
  {
    title: "Haider",
    para: "Best barber out there, been going to him for over 3 years and have never gotten anything less than perfect!"
  },
  {
    title: "Sajad",
    para: "Loved the amazing service that hkcutz gives and always comes in clutch for every haircut detail needed."
  },
  {
    title: "Harris",
    para: "Haris has consistently been my first choice for haircuts. He provides excellent guidance and makes sure my haircut turns out just the way I want it. 100% recommend."
  },
  {
    title: "Ilyas",
    para: "Really great at trimming the top to the perfect length I need and the fade is what I needed, it matches my face structure perfectly. Would go again!"
  },
  {
    title: "Daniel",
    para: "Even better cut than the first! HK gets me looking fresh af every single time! Even reads review comments and takes everything into consideration! Guy’s a baller and this looks INSANE! Pull up! And thanks man!"
  },
  {
    title: "Ahmad",
    para: "Haris takes the time to understand exactly what you’re looking for, delivers flawless fades with precision, and creates an atmosphere that feels both relaxed and professional. Highly recommend!"
  }
]

const Testimonial = () => {
  useEffect(() => {
    AOS.init({ offset: 100, duration: 1000, easing: 'ease-in-sine', delay: 100, once:false })
    AOS.refresh()
  }, [])

  return (
    <section
      id="testimonial"
      className="w-full md:px-20 px-10 py-20 bg-white flex flex-col items-center gap-8"
    >
      <h1
        data-aos="zoom-in"
        className="text-6xl font-bold text-black text-center"
      >
        Testimonials
      </h1>
      <p
        data-aos="zoom-in"
        className="text-xl text-black font-semibold text-center"
      >
        What Our Customers Say!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl justify-items-center">
        {clients.map((c, i) => (
          <div
            key={i}
            data-aos="slide-up"
            data-aos-delay={200 + i * 100}
            className="bg-gray-100 rounded-3xl p-8 flex flex-col items-start gap-4 w-full max-w-md"
          >
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold text-black">{c.title}</h2>
              <img src={fivestar}
                alt="5 stars"
                className="w-20 h-auto bg-gray-100 rounded-md" />
            </div>
            <div className="relative w-full pt-2">
              <BiSolidQuoteAltLeft className="absolute top-0 left-0 text-4xl text-gray-300" />
              <p className="text-gray-800 text-base leading-relaxed pl-8 pr-4">
                {c.para}
              </p>
              <BiSolidQuoteAltRight className="absolute bottom-0 right-4 text-4xl text-gray-300" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonial
