import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Infra1 from '../../assets/infra1.png';
import Infra2 from '../../assets/infra3.png';
import Infra3 from '../../assets/infra4.png';

function Infrastructure() {
  return (
    <div>
      <Header />
      <div className="items-center justify-center flex flex-col mt-8">
        <h1 className="text-4xl font-bold text-[#005B8C]">Infrastructure </h1>
        <p className="text-sm font-semibold text-[#1C2752]">Home | Infrastructure</p>
      </div>

      {/* section 1 */}
      <div className="flex flex-col sm:flex-row items-start justify-between bg-[#F9F9F9] px-6 sm:px-20 py-12 sm:py-24 gap-6 sm:gap-3">
        <div className="flex flex-col w-full sm:w-2/3 justify-start items-start gap-5 sm:ml-24">
          <h3 className="text-xl text-[#005B8C] font-semibold">Our Infrastructure</h3>
          <h1 className="text-[#3D3737] font-bold text-3xl sm:text-4xl">Transforming Ambitions with Cutting Edge Infrastructure.</h1>
          <p className="text-[#757575] text-sm sm:text-base">We are supported by a well-equipped infrastructure base spread over 40,000 sq. ft constructed area. It compromises all necessary tools and testing equipment along with advanced machinery resulting in flawless products.</p>
        </div>
        <div className="w-full sm:w-2/3 flex justify-center items-center">
          <img src={Infra1} alt="Infra1" className="w-full max-w-full" />
        </div>
      </div>

      {/* section 2 */}
      <div className="flex flex-col sm:flex-row items-center justify-between bg-[#F9F9F9] px-6 sm:px-20 py-12 sm:py-24 gap-6 sm:gap-3">
        <div className="w-full sm:w-2/3 flex justify-center items-center sm:ml-24">
          <img src={Infra2} alt="Infra2" className="w-full max-w-full" />
        </div>

        <div className="flex flex-col justify-start w-full sm:w-2/3 sm:mr-20">
          <p className="text-[#757575] text-sm sm:text-base">• Huge warehouse with overhead crane facility to store & handle large quantities of raw glass to enable ready availability of stocks for processing</p>
          <p className="text-[#757575] text-sm sm:text-base">• Automatic Glass cutting line from Macotec Italy. Capable of cutting glass in any shape with high speed & perfection</p>
          <p className="text-[#757575] text-sm sm:text-base">• Straight line edge polishing machines</p>
          <p className="text-[#757575] text-sm sm:text-base">• Drilling machine</p>
          <p className="text-[#757575] text-sm sm:text-base">• Glass washing machine</p>
          <p className="text-[#757575] text-sm sm:text-base">• Tempering Furnace from Cool Temper TCME, Taiwan. Our Furnace is capable of processing all types of glass including the most sophisticated coated glass available in India today. It is one of the most advanced glass tempering furnaces available today with both top & bottom convection and can process glass to conform to British Standard Kite Mark BS 6206 class A, BS EN.12150 ANSIAZ 97.1 CNS R 3046, GP9963-88, & JIS R 3206 tempered glass</p>
        </div>
      </div>

      {/* section 3 */}
      <div className="flex flex-col sm:flex-row items-start justify-between bg-[#F9F9F9] px-6 sm:px-20 py-12 sm:py-24 gap-6 sm:gap-3">
        <div className="flex flex-col w-full sm:w-2/3 justify-start items-start gap-2 sm:ml-24">
          <h3 className="text-xl text-[#3D3737] font-bold">Min Size: 120*280mm</h3>
          <h3 className="text-xl text-[#3D3737] font-bold">Max Size: 2500*4200mm</h3>
          <h3 className="text-xl text-[#3D3737] font-bold">Thickness: 3.8 mm to 19 mm</h3>
          <p className="text-[#757575] text-sm sm:text-base">Coating: All types of Coated glass including low E, solar glass & extra clear glass.</p>
        </div>
        <div className="w-full sm:w-2/3 flex justify-center items-center">
          <img src={Infra3} alt="Infra3" className="w-full max-w-full" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Infrastructure;
