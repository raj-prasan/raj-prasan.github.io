import { ArrowDown } from 'lucide-react'
import React from 'react'

function Hero() {
  return (
    <>
    <section id="hero" className='relative min-h-screen flex flex-col items-center justify-center px-4'>
    <div className='container max-w-4xl mx-auto text-center z-qo'>
      <div className='space-y-6'>
        <h1 className='text-4xl md:text-6xl font-bold'>
          <span className='opacity-0 animate-fade-in'>Hi, I'm</span>
          <span className='text-primary opacity-0 animate-fade-in-delay-1'>{" "}Prasan</span>
          <span className='text-gradient ml-2 opacity-0 animate-fade-in-delay-2'>{" "}Raj</span>
        </h1>
        <p className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3'>I create responsive and user-friendly websites with a focus on efficient functionality. Skilled in problem-solving and detail-oriented development, I strive to deliver reliable and impactful web solutions.</p>

        <div className=' opacity-0 animate-fade-in-delay-3'>
          <a href='#projects' className='cosmic-button'>
            View My Work
          </a>
        </div>
      </div>
    </div>

    <div className='absolute bottom-8 left-1/2 transform-translate-x-1/2 flex flex-col items-center animate-bounce'>
      <span className='text-sm text-muted-foreground mb-2'>Scroll</span>
      <ArrowDown className='h-5 w-5 text-primary'/>
    </div>
    </section>
    </>
  )
}

export default Hero