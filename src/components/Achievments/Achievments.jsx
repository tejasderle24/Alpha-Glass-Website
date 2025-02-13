import React from 'react'
import AchievmentsCards from './AchievmentsCards'
import ClientCard from './ClientCard'
import E1 from '../../assets/E1.png'
import E2 from '../../assets/E2.png'
import E3 from '../../assets/E3.png'
import E4 from '../../assets/E4.png'
import F1 from '../../assets/F1.png'
import F2 from '../../assets/F2.png'


const  Achievments = () => {
  return (
    <div className="flex items-center justify-between bg-[#005B8C] px-36 py-24 gap-12 ">

        <div className="w-1/3 flex flex-col justify-center ml-24">
          <h3 className="font-semibold text-2xl text-white">Client Testimonials</h3>
          <h1 className="font-bold text-4xl text-white">Our Achievments</h1>
          <div>
            <AchievmentsCards
              img={E1}
              year="20 +"
              desc="Years Experience"
            />
            <AchievmentsCards
              img={E2}
              year="71 +"
              desc="Successful Installations"
            />
            <AchievmentsCards
              img={E3}
              year="50 +"
              desc="Dedicated Team of Professionals"
            />
            <AchievmentsCards
              img={E4}
              year="3 +"
              desc="Trusted Partners"
            />
          </div>
        </div>

        <div className="flex flex-col justify-start w-1/2 gap-12">
          <p className="text-xl text-white">hear directly from our valued clients who have experienced the difference we bring. Their feedback speaks volumes about our commitment to quality, service, and results.</p>
          <div className="flex gap-5 h-auto">
            <ClientCard
              img={F1}
              name="Daniel Roy"
              post="Manager"
              desc="Our commitment to quality, innovation, and customer service has established us as a trusted partner for safety glass solutions."
            />
            <ClientCard
              img={F2}
              name="Roma Richards"
              post="Client"
              desc="Alpha Safety Glass has built a reputation for excellence and reliability, earning the trust and loyalty of clients across various industries."
            />
          </div>

        </div>

      </div>
  )
}

export default Achievments