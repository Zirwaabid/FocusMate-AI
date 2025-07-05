import React from 'react'

function HeroSec() {
  return (
    <div>
   <section className="min-h-screen flex items-center justify-center bg-white px-4 py-12 relative overflow-hidden">
  
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full z-0 opacity-50 blur-3xl bg-[radial-gradient(circle_at_center,_#fcddec,_#d8b4fe,_#99f6e4)]"></div>

  <div className="relative z-10 flex flex-col items-center text-center space-y-3 max-w-4xl">

    <img
      src="/Programming-amico.svg"
      alt="FocusMate AI Illustration"
      className="w-[250px] md:w-[350px] drop-shadow-2xl"
    />

    <h1 className="text-lg md:text-6xl font-bold text-gray-900">
      FocusMate <span className="text-purple-600">AI</span>
    </h1>
    <p className="text-lg text-gray-700 max-w-2xl">
      Boost your productivity with smart focus — AI-powered task scheduling and distraction blocking.
    </p>
    <button className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-xl hover:scale-105 transition-all">
      Get Started
    </button>
  </div>
</section>
    </div>
  )
}

export default HeroSec