import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const items = [
  { name: 'Skin Fade',         price: '$30' },
  { name: 'Skin Fade + Trim',  price: '$35' },
  { name: 'Skin Fade + Beard', price: '$40' },
  { name: 'Skin Fade + Trim + Beard', price: '$45' },
  { name: 'Beard',             price: '$15' },
  { name: 'Face Mask',         price: '$15' },
]

const Pricing = () => {
  useEffect(() => {
    AOS.init({ offset:200, duration:800, easing:'ease-in-sine', delay:100 })
  }, [])

  return (
    <section id="pricing" className="w-full px-10 md:px-20 py-10 md:py-20">
      <h1
        data-aos="zoom-in"
        className="text-6xl font-bold text-center mb-12"
      >
        Pricing
      </h1>

      <div
        data-aos="slide-up"
        className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-16 w-[85%] mx-auto"
      >
        {items.map(({ name, price }) => (
          <div
            key={name}
            className="flex justify-between items-center w-full border-b border-gray-300 pb-4"
          >
            <span className="text-2xl font-bold">{name}</span>
            <span className="text-2xl font-bold text-gray-500">{price}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Pricing
