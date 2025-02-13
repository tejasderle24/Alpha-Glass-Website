

const AchievmentsCards = ({ img, year, desc }) =>  {
  return (
    <div className="flex  p-6 rounded-lg space-x-6 items-center">
      <div className="w-1/3">
        <img src={img} alt="Achievement" className="items-center justify-center bg-[#D9D9D9] px-6 py-3 " />
      </div>
      <div className="flex flex-col justify-center w-2/3">
        <h1 className="text-3xl font-bold text-white">{year}</h1>
        <p className="text-xl mt-2 text-white">{desc}</p>
      </div>
    </div>
  )
}

export default AchievmentsCards
