import React from 'react';
import HeroImg from '../../assets/banner-main.png'
import HeroBgimg from '../../assets/bg-shadow.png'

const Hero = () => {
    return (
        <div>
<div className="w-full max-w-7xl mx-auto rounded-2xl overflow-hidden bg-linear-to-r from-blue-400 via-gray-900 to-pink-200 p-10 text-center text-white">
      
      {/* Logo Section */}
      <div className="flex justify-center mb-6">
        <div className="px-4 py-2">
          <img src={HeroImg} alt="" />
        </div>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-semibold mb-4">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>

      {/* Subtitle */}
      <p className="text-gray-300 mb-6">
        Beyond Boundaries Beyond Limits
      </p>

      {/* Button */}
      <button className="bg-lime-400 text-black font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-lime-300 transition">
        Claim Free Credit
      </button>
    </div>
        </div>
    );
};

export default Hero;