import React from 'react'

const ProductCard = ({ img, title, desc }) => {
    return (
        <div className="flex flex-col rounded overflow-hidden shadow-lg items-center justify-center w-72 h-120 bg-white mb-4">
            <img src={img} alt="" className='rounded w-64 h-64' />
            <h1 className="text-[#3C3C3C] font-bold text-xl mb-2 ">{title}</h1>
            <p className="text-[#3D3737] text-base p-4">
                {desc}
            </p>
        </div>
    )
}

export default ProductCard