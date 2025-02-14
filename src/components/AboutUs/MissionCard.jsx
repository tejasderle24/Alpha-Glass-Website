import React from 'react'

const MissionCard = ({title,icon, desc}) => {
  return (
    <div className = 'bg-[#0681BA] p-6 w-1/2' >
        <h1 className="text-white font-bold text-4xl mb-3">{title}{icon}</h1>
        <p className="text-white font-normal text-base">{desc}</p>
    </div>
  )
}

export default MissionCard