import React from 'react';
import { hero } from '../../images/Images';

const Hero = () => {
 
  return (
    <section className="w-full max-w-[1100px] mx-auto p-3">
      <div className="relative">
        <div className="absolute flex flex-col justify-center bg-black/30 h-full w-full text-white text-4xl md:text-6xl 
        lg:text-7xl font-bold px-6">
            <h1 className="">The <span className="text-orange-600">Best</span></h1>
            <h1>Food <span className="text-orange-600">Delivered</span></h1>
        </div>
        <div>
            <img 
            className="w-full max-h-[500px] object-cover"
            src={hero} 
            alt={"Logo my app"} 
            title={"Logo my app"}/>
        </div>
      </div>
    </section>
  )
}

export default Hero;