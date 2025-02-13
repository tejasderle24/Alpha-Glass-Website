import React from 'react'

const ClientCard = ({ img, name, post, desc, rate }) => {
  return (
    <div className='bg-gray-100 p-10 flex flex-col w-xl'>
      {/* Header Section */}
      <div className="flex items-center mb-4">
        <img src={img} alt={name} className="w-12 h-12 rounded-full mr-4" />
        <div className="flex flex-col">
          <h1 className="text-[#1C2752] font-semibold text-xl">{name}</h1>
          <h3 className="text-[#757575] font-normal text-lg">{post}</h3>
        </div>
      </div>

      {/* Description Section */}
      <div className="mb-4">
        <p className="text-[#757575] font-normal text-base">
          {desc}
        </p>
      </div>

      {/* Rating Section */}
      <div>
        <p className="text-[#1C2752] font-semibold text-lg">{rate}</p>
      </div>
    </div>
  )
}

export default ClientCard
