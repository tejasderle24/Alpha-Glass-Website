import React from 'react';
import Home1 from '../../assets/Home1.png';
import AboutImg from '../../assets/AboutImg.png';
import A1 from '../../assets/A1.png';
import A2 from '../../assets/A2.png';
import A3 from '../../assets/A3.png';
import B1 from '../../assets/B1.png';
import B2 from '../../assets/B2.png';
import B3 from '../../assets/B3.png';
import B4 from '../../assets/B4.png';
import C1 from '../../assets/C1.png';
import C2 from '../../assets/C2.png';
import C3 from '../../assets/C3.png';
import C4 from '../../assets/C4.png';

import AppImg from '../../assets/ApplicationImg.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import LayoutCard from './LayoutCard';
import WorkProcess from './WorkProcess';
import ProductCard from './ProductCard';
import Application from './Application';
import Achievments from '../Achievments/Achievments';


function Layout() {
  return (
    <div className="">
      <div className='flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 md:py-24'>
        {/* Left side content */}
        <div className="flex flex-col justify-start w-full md:w-1/2 text-center md:text-left">
          <div className="leading-tight">
            <h3 className="text-2xl md:text-[36px] font-semibold">Welcome to</h3>
            <h1 className="text-3xl md:text-[56px] font-bold mb-4 md:mb-8">Alpha Safety Glasses</h1>
          </div>
          <p className="text-lg md:text-[20px] mb-6 md:mb-8">20 Years of Craftsmanship, Redefining Clarity and Quality.</p>
          <div>
            <button className='bg-[#005B8C] px-4 py-2 md:p-3 text-white rounded-md'>
              Explore More <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
            </button>
          </div>
        </div>

        {/* Right side image */}
        <div className="w-full md:w-1/3 flex justify-center mt-6 md:mt-0">
          <img src={Home1} alt="HomeImg" className="w-full max-w-xs md:max-w-full" />
        </div>
      </div>


      {/* Selection 2 */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-[#F9F9F9] px-6 md:px-20 py-12 md:py-24">

        {/* Left side image */}
        <div className="w-full md:w-1/3 flex justify-center items-center md:ml-24 mb-6 md:mb-0">
          <img src={AboutImg} alt="HomeImg" className="w-full max-w-xs md:max-w-full" />
        </div>

        {/* Right side content */}
        <div className="flex flex-col justify-start w-full md:w-1/2 gap-4 text-center md:text-left">
          <h3 className='text-lg md:text-xl text-[#005B8C] font-semibold'>About Us</h3>
          <h1 className="text-[#3D3737] font-bold text-2xl md:text-4xl">Your Premier Destination for Quality Glass Solutions</h1>
          <p className="text-[#757575] text-sm md:text-base">
            Alpha Safety Glass Pvt. Ltd. is a Nashik-based Glass Processing unit. We are engaged in the manufacturing of 
            Toughened or Tempered Glass, Double Glazed Unit or Insulated Glass, Laminated Safety Glass, Security Glass, etc.
          </p>

          {/* Features Section */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {[{ img: A1, title: "Best Service" }, { img: A2, title: "Latest Machinery" }, { img: A3, title: "Fast Shipping" }].map((item, index) => (
              <div key={index} className="bg-white p-4 text-center w-28 md:w-36">
                <img src={item.img} alt={item.title} className='mx-auto mb-2' />
                <p className="font-semibold text-[#3D3737] text-sm md:text-lg">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* SELECTION 3 */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#F9F9F9] px-6 md:px-20 py-12 md:py-24 gap-12 md:gap-48">
        
        {/* Left Content */}
        <div className="flex flex-col justify-start w-full md:w-1/2 gap-4 md:gap-6 text-center md:text-left">
          <h3 className="text-[#005B8C] font-semibold text-base md:text-lg">Share your project about Alpha Safety Glass</h3>
          <h1 className="text-[#3D3737] font-bold text-2xl md:text-5xl">Dedicated To Doing Our Best</h1>
          <p className="text-[#757575] font-normal text-sm md:text-[16px]">
            Alpha Safety Glass is a premier manufacturer and supplier of top-tier safety glass products. Our mission is to deliver unmatched 
            safety and durability, ensuring every product adheres to the highest standards of protection and performance. This project highlights 
            our unwavering commitment to excellence, innovation, and customer satisfaction.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className='bg-[#005B8C] px-6 md:px-8 py-3 md:py-4 text-white rounded-md'>
              Get a Free Quote
            </button>
          </div>
        </div>

        {/* Right Cards Section */}
        <div className="w-full md:w-auto flex flex-col items-center md:items-start gap-4 md:pr-4">
          <LayoutCard
            Img={B1}
            title="Superior Quality"
            desc="We specialize in crafting high-quality glass products with precision and attention to detail"
          />
          <LayoutCard
            Img={B2}
            title="Highly Qualified Workforce"
            desc="Qualified professionals who bring expertise, innovation, and dedication to every project."
          />
          <LayoutCard
            Img={B3}
            title="Timely Delivery"
            desc="We pride ourselves on delivering exceptional service and handling with care and precision"
          />
          <LayoutCard
            Img={B4}
            title="Machinery & Infrastructure"
            desc="We stay ahead through cutting-edge machinery and infrastructure investments."
          />
        </div>

      </div>


      {/* Selection 4 */}
      <div className="text-center py-16 leading-tight">
        <h2 className="text-base font-semibold text-[#005B8C]">Our Work Process</h2>
        <h3 className="text-4xl font-bold text-[#3D3737] mb-12">Way To Reach Success</h3>

        <div className="flex flex-wrap justify-center md:justify-between px-6 md:px-72 pb-16 gap-5">
          <WorkProcess
            img={C1}
            title="Enter your & product details"
          />
          <WorkProcess
            img={C4}
            title="Pay your service charges"
          />
          <WorkProcess
            img={C3}
            title="Ready to send your goods"
          />
          <WorkProcess
            img={C2}
            title="Online Booking"
          />
        </div>
      </div>

      {/* Selection 5 */}
      <div className="px-36 py-8 leading-tight">
        <h2 className="text-base font-semibold text-[#005B8C]">Check Our Products</h2>
        <h3 className="text-4xl font-bold text-[#3D3737] mb-12">We Provide Quality Products</h3>
        <div className='bg-gray-100'>
          <ProductCard/>
        </div>
      </div>

      {/* Selection 6 */}
      <div className="">
        <div className="bg-gray-200">
          {/* Main Container */}
          <div className="container mx-auto px-6 py-12 grid md:grid-cols-2 w-2/3">
            {/* Left Image */}
            <div className="relative rounded-lg overflow-hidden justify-end items-end">
              <img
                src={AppImg} // Placeholder image
                alt="Glass Building"
                className="w-84  object-cover"
              />

            </div>

            {/* Right Content */}
            <div className="space-y-6">
              {/* <div className="absolute top-0 left-0 bg-white bg-opacity-50 p-4">
            
          </div> */}
              <h2 className="text-lg font-semibold text-[#005B8C]">Application</h2>
              <h2 className="text-3xl font-bold text[#3D3737]">
                Check Our Applications
              </h2>
              <p className="text-lg text-gray-600">
                Check out our application for a seamless glass purchasing experience!
                Easily browse our collection, track orders, and get instant updates all in one place.
              </p>

              <Application />

            </div>
          </div>
        </div>
      </div>

      {/* SElection 7 */}
      <div>
        <Achievments />
      </div>
    </div>

  );
}

export default Layout;
