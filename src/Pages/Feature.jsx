import React from 'react'
import { features } from '../feature';

function Feature() {
  return (
    <div>
      <section className="min-h-screen bg-fuchsia-200 md-py-20 text-center py-10">
        <h2 className="md:text-5xl sm:text-4xl text-3xl font-bold text-gray-800 mb-16 ">Features</h2>

        <div className="cards grid grid-cols-1 gap-10 place-items-center">

          {features.map((f, p) => (
            <div
              key={p}
              className={`relative overflow-hidden rounded-3xl shadow-lg card1 md:min-h-[270px] m-5 py-10 px-6 md:w-3xl md:py-14 md:px-10 ring-2 ring-blue-400 hover:scale-105 transition-transform duration-300 cursor-pointer w-1xl h-100px ${f.style}`}
            >
              <img
                src="/Circles-bro.svg"
                alt="Background illustration"
                className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
              />
              <div className="relative z-10 text-gray-800 md:space-y-4 space-y-2">
                <h3 className="text-2xl md:text-3xl font-bold">{f.title}</h3>
                <p className="text-sm leading-relaxed">{f.para}</p>
              </div>
            </div>
          ))}
        </div>

      </section>
    </div>
  )
}

export default Feature