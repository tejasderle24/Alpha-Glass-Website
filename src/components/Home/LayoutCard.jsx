import React from 'react'

const LayoutCard = ({ Img, title, desc }) => {
  return (
    <div className="flex gap-6 rounded overflow-hidden shadow-lg bg-white p-3 mb-4">
      <div className="">
        <img src={Img} alt="" className='bg-[#00a6e86b] p-3 rounded' />
      </div>
      <div className='flex flex-col'>
        <h1 className="text-[#3C3C3C] font-bold text-xl mb-2">{title}</h1>
        <p className="text-[#3D3737] text-base">
        {desc}
      </p>
      </div>
      
    </div>
  )
}

export default LayoutCard
