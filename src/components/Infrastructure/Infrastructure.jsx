import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
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

      {/* section 1  */}
      <div className="flex items-start justify-between bg-[#F9F9F9] px-20 py-24 gap-3">
        <div className="flex flex-col w-2/3 justify-start items-start gap-5 ml-24">
          <h3 className='text-xl text-[#005B8C] font-semibold '>Our Infrastructure</h3>
          <h1 className="text-[#3D3737] font-bold text-4xl">Transforming Ambitions with  Cutting Edge Infrastructure.</h1>
          <p className="text-[#757575] text-sm ">We are supported by a well equipped infrastructure base spread   over 40,000 sq. ft constructed area. It compromises all necessary   tools and testing equipments along with advanced machineries   resulting in flawless products.</p>
        </div>
        <div className="w-2/3 flex justify-center items-center">
          <img src={Infra1} alt="Infra1" className="w-full max-w-full" />
        </div>
      </div>

      {/* 2 */}

      <div className="flex items-center justify-between bg-[#F9F9F9] px-20 py-24">

        <div className="w-2/3 flex justify-center items-center ml-24">
          <img src={Infra2} alt="Infra2" className="w-98 max-w-full" />
        </div>

        <div className="flex flex-col justify-start w-2/3 mr-20">
          <p className="text-[#757575] text-sm ">• Huge warehouse with overhead crane facility to store & handle   large quantities of raw glass to enable ready availability of stocks for processing </p>
          <p className="text-[#757575] text-sm ">• Automatic Glass cutting line from Macotec Italy.  Capable of   cutting glass in any shape with high speed & perfection</p>
          <p className="text-[#757575] text-sm ">• Straight line edge polishing machines</p>
          <p className="text-[#757575] text-sm ">• Drilling machine </p>
          <p className="text-[#757575] text-sm ">• Glass washing machin</p>
          <p className="text-[#757575] text-sm ">• Tempering Furnace from Cool Temper TCME, Taiwan Our Furnace   is capable of processing all types of glass including the most   sophisticated coated glass available In India today. It is one of   the most advanced glass tempering furnace available today   with both top & bottom convection and can process glass to conform to British Standard Kite Mark BS 6206 class A, BS EN.12150   ANSIAZ 97.1 CNS R 3046, GP9963-88, & JIS R 3206 tempered glass</p>
        </div>


      </div>
      <div className="flex items-start justify-between bg-[#F9F9F9] px-20 py-24 gap-3">
        <div className="flex flex-col w-2/3 justify-start items-start gap-2 ml-24">
          <h3 className='text-xl text-[#3D3737] font-bold '>Min Size        :        120*280mm  </h3>
          <h3 className='text-xl text-[#3D3737] font-bold '>Max Size       :        2500*4200mm</h3>
          <h3 className='text-xl text-[#3D3737] font-bold '>Thickness    :        3.8 mm to 19 mm  </h3>
          <p className="text-[#757575] text-sm ">Coating All types of Coated glass including low E,   solar glass & extra clear glass.</p>
        </div>
        <div className="w-2/3 flex justify-center items-center">
          <img src={Infra3} alt="Infra4" className="w-full max-w-full" />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Infrastructure