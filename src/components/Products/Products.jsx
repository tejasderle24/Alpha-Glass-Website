import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Pro1 from '../../assets/Pro1.png';
import Pro2 from '../../assets/Pro2.png';
import Pro3 from '../../assets/Pro3.png';

function Products() {
  return (
    <div>
      <Header />
      <div className="items-center justify-center flex flex-col mt-8 px-4 sm:px-8 md:px-16">
        <h1 className="text-4xl font-bold text-[#005B8C]">Products</h1>
        <p className="text-sm font-semibold text-[#1C2752]">Home | Products</p>
      </div>

      {/* 1 */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#F9F9F9] px-4 py-12 md:px-20 md:py-24 gap-4 md:gap-10">
        <div className="flex flex-col w-full md:w-2/3 justify-start items-start gap-5 md:ml-24">
          <h3 className='text-xl text-[#005B8C] font-semibold '>Our Products</h3>
          <h1 className="text-[#3D3737] font-bold text-3xl md:text-4xl">Float Glass</h1>
          <p className="text-[#757575] text-sm md:text-base">This is the most common type of glass which is generally available on glass retail shops for use in buildings. The stock sheets of glass are cut to size generally on the glass shop itself and supplied to the site for glazing in the windows or other applications.</p>
          <p className="text-[#757575] text-sm md:text-base">Basic float glass is manufactured by melting sand. Other ingredients such as soda ash, limestone, salt cake, and broken cullet glasses are added to lower the melting temperature of silica and promote optical clarity of the finished glass product. Mixed batch of above materials is heated to a temperature of 1450 to 1650º C and formed into large flat sheets by floating molten glass on molten tin, thus giving it precise flatness and transparency.</p>
        </div>
        <div className="w-full md:w-2/3 flex justify-center items-center">
          <img src={Pro1} alt="Pro1" className="w-full max-w-xs md:max-w-full" />
        </div>
      </div>

      {/* 2 */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#F9F9F9] px-4 py-12 md:px-20 md:py-6 gap-4 md:gap-10">
        <div className="w-full md:w-2/3 flex justify-center items-center">
          <img src={Pro2} alt="Pro2" className="w-full max-w-xs md:max-w-full" />
        </div>
        <div className="flex flex-col w-full md:w-2/3 justify-start items-start md:ml-24">
          <h1 className="text-[#3D3737] font-bold text-3xl md:text-4xl mb-5">Tinted Float Glass</h1>
          <p className="text-[#757575] text-sm md:text-base">It is a normal flat glass to which color is added during the manufacturing process to achieve tint and solar radiation absorption properties.</p>
          <p className="text-[#757575] text-sm md:text-base">Its absorption properties help diminish energy transmissions through glass when exposed to strong sunlight. Variations in the thickness of the glass would yield different performance in terms of light and solar transmission.</p>
          <p className="text-[#757575] text-sm md:text-base">Although darker shades reduce the amount of heat being transmitted to the interiors, they also reduce the amount of daylight being transmitted.</p>
        </div>
      </div>

      {/* 3 */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#F9F9F9] px-4 py-12 md:px-20 md:py-24 gap-4 md:gap-10">
        <div className="flex flex-col w-full md:w-2/3 justify-start items-start md:ml-24">
          <h1 className="text-[#3D3737] font-bold text-3xl md:text-4xl mb-5">Online Coated Float Glass</h1>
          <p className="text-[#757575] text-sm md:text-base">It is a normal flat glass to which color is added during the manufacturing process to achieve tint and solar radiation absorption properties.</p>
          <p className="text-[#757575] text-sm md:text-base">Its absorption properties help diminish energy transmissions through glass when exposed to strong sunlight. Variations in the thickness of the glass would yield different performance in terms of light and solar transmission.</p>
          <p className="text-[#757575] text-sm md:text-base">Although darker shades reduce the amount of heat being transmitted to the interiors, they also reduce the amount of daylight being transmitted.</p>
        </div>
        <div className="w-full md:w-2/3 flex justify-center items-center">
          <img src={Pro3} alt="Pro3" className="w-full max-w-xs md:max-w-full" />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Products
