import React from 'react';
import Home1 from '../../assets/Home1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Layout() {
  return (
    <div className='flex items-center justify-between px-20 py-24'>
      {/* Left side content */}
      <div className="flex flex-col justify-start w-1/2">
        <div className="leading-tight">
          <h3 className="text-[36px] font-semibold">Welcome to</h3>
          <h1 className="text-[56px] font-bold mb-8">Alpha Safety Glasses</h1>
        </div>
        <p className="text-[20px] mb-8">20 Years of Craftsmanship, Redefining Clarity and Quality.</p>
        <div>
        <button className='bg-[#005B8C] p-3 text-white rounded-md'>
          Explore More <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
        </button>
        </div>
      </div>

      {/* Right side image */}
      <div className="w-1/3 flex justify-center">
        <img src={Home1} alt="HomeImg" className="w-auto max-w-full" />
      </div>
    </div>
  );
}

export default Layout;
