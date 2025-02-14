import React from 'react'

const TeamCard = ({ img, title, post, desc }) => {
    return (
        <div className="flex flex-col rounded overflow-hidden shadow-lg items-center justify-start w-72 h-120 bg-[#D9D9D9] mb-4">
            <img src={img} alt="" className='rounded w-full' />
            <div className="leading-tight text-center flex-col bg-[#8BC2EF] px-12 py-1">
            <h1 className="text-[#005B8C] font-semibold text-lg ">{title}</h1>
            <p className="text-[#3C3C3C] font-semibold text-sm">{post}</p>
            </div>
            <p className="text-[#000000] text-base p-4">
                {desc}
            </p>
        </div>
    )
}

export default TeamCard