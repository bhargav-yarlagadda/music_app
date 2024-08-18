import React from 'react';

const Hero = () => {
  return (
    
    <section className="relative bg-gray-900 flex items-center text-white bg-hero bg-opacity-30 bg-cover h-[100vh]">

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      <div className="relative container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-8xl font-bold leading-tight mb-4">
          Discover Your <p> </p>  
          <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
          Favorite Music
          </span>
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Explore a vast library of tracks and albums. Enjoy music like never before.
        </p>

      </div>
    </section>
  );
}

export default Hero;
