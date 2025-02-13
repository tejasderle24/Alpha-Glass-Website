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
import G1 from '../../assets/G1.png';
import G2 from '../../assets/G2.png';
import G3 from '../../assets/G3.png';
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

      {/* Seletion 2 */}
      <div className="flex items-center justify-between bg-[#F9F9F9] px-20 py-24">

        <div className="w-1/3 flex justify-center items-center ml-24">
          <img src={AboutImg} alt="HomeImg" className="w-auto max-w-full" />
        </div>

        <div className="flex flex-col justify-start w-1/2 gap-2">
          <h3 className='text-xl text-[#005B8C] font-semibold '>About Us</h3>
          <h1 className="text-[#3D3737] font-bold text-4xl">Your Premier Destination for Quality Glass Solutions</h1>
          <p className="text-[#757575] text-sm ">Alpha Safety Glass Pvt. Ltd. is a Nashik based Glass Processing unit.   We are engaged in the manufacturing of Toughened or Tempered   Glass, Double Glazed Unit or Insulated Glass, Laminated Safety Glass,   Security Glass etc.</p>
          <div className="flex gap-3">
            <div className="bg-white p-5">
              <img src={A1} alt="A1" className='mx-auto' />
              <p className="font-semibold text-[#3D3737] text-lg ">Best Service</p>
            </div>
            <div className="bg-white p-5 ">
              <img src={A2} alt="A2" className='mx-auto' />
              <p className="font-semibold text-[#3D3737] text-lg ">Latest Machinery</p>
            </div>
            <div className="bg-white p-5 gap-4">
              <img src={A3} alt="A3" className='mx-auto mt-5' />
              <p className="font-semibold text-[#3D3737] text-lg ">Fast Shipping</p>
            </div>
          </div>
        </div>
      </div>

      {/* SELETION 3 */}
      <div className="flex items-center justify-between bg-[#F9F9F9] px-20 py-24 gap-48">
        <div className="flex flex-col justify-start w-1/2 gap-6">
          <h3 className="text-[#005B8C] font-semibold text-lg">Share your project about Alpha Safety Glass</h3>
          <h1 className="text-[#3D3737] font-bold text-5xl">Dedicated To Doing Our Best</h1>
          <p className="text-[#757575] font-normal text-[16px]">Alpha Safety Glass is a premier manufacturer and supplier of top-tier safety glass products. Our mission is to deliver unmatched safety and durability, ensuring every product adheres to the highest standards of protection and performance. This project highlights our unwavering commitment to excellence, innovation, and customer satisfaction.</p>
          <div className="">
            <button className='bg-[#005B8C] px-8 py-4 text-white'>
              Get a Free Quoite
            </button>
          </div>
        </div>

        <div className="pr-4">
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
            desc="We pride ourselves on delivering exceptional service and  handled with care and precision"
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

        <div className="flex text-center justify-between px-72 pb-16 gap-5">
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
            title="Ready to sendyour goods"
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
        <div className="flex gap-4 items-center justify-center">
          <div className='p-3 m-5 text-white bg-[#005B8C]'>
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <ProductCard
            img={G1}
            title="Laminated Glass"
            desc="Laminated glass is a safety glass made by bonding layers of glass with a plastic interlayer, offering durability and shatter resistance."
          />
          <ProductCard
            img={G2}
            title="Tempered Glass"
            desc="Tempered glass is a type of safety glass that's heat-treated to be stronger and shatter into small, less harmful pieces when broken."
          />
          <ProductCard
            img={G3}
            title="Bend Glass"
            desc="Bend glass is a curved or shaped glass formed by heating it until pliable and molding in architecture and design."
          />
          <div className='p-3 m-5 text-white bg-[#005B8C]'>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
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
