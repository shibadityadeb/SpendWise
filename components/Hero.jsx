
import React from 'react'
import Link from 'next/link';
import { Button } from './ui/button';
import Image from 'next/image';


const HeroSection = () => {
    

    


  return (
    <div className='pb-20 px-4'>
      <div className='container mx-auto text-center'>
<h1 className="text-5xl md:text-8xl lg:text-[100px] pb-4 bg-gradient-to-br from-blue-600  to-purple-600 font-extrabold tracking-tight leading-tight text-transparent bg-clip-text drop-shadow-md md:drop-shadow-xl transition-all duration-300 ease-in-out">
  Manage Your Finances <br /> with Intelligence
</h1>
        </div>
       <p className="text-center text-base md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mt-4 mb-8">
  Harness the power of AI to take control of your finances — track expenses, analyze trends, and optimize spending effortlessly with real-time, intelligent insights.
</p>


        <div className="flex justify-center mt-6 mb-8">
  <Link href="/dashboard">
    <Button size="lg" className="px-8">
      Get Started
    </Button>
  </Link>
</div>
<div
      className="hero-image-wrapper"
      
    >
      <div
        
        className="hero-image"
        
      >
        <Image
          src="/Banner.png"
          width={1280}
          height={720}
          alt="Dashboard preview"
          className="rounded-lg shadow-2xl border mx-auto"
        />
      </div>
    </div>
    </div>
  )
}

export default HeroSection
