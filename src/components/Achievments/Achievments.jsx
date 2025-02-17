import React from 'react';
import AchievmentsCards from './AchievmentsCards';
import ClientCard from './ClientCard';
import E1 from '../../assets/E1.png';
import E2 from '../../assets/E2.png';
import E3 from '../../assets/E3.png';
import E4 from '../../assets/E4.png';
import F1 from '../../assets/F1.png';
import F2 from '../../assets/F2.png';

const Achievments = () => {
  return (
    <div className="bg-[#005B8C] px-6 py-12 sm:px-24 sm:py-24 flex flex-col sm:flex-row justify-between gap-8 sm:gap-12">

      {/* Achievements Section */}
      <div className="flex flex-col w-full sm:w-2/5 justify-center sm:ml-24">
        <h3 className="font-semibold text-xl text-white mb-4">Client Testimonials</h3>
        <h1 className="font-bold text-2xl sm:text-3xl text-white mb-6">Our Achievements</h1>

        <div>
          <AchievmentsCards img={E1} year="20 +" desc="Years Experience" />
          <AchievmentsCards img={E2} year="71 +" desc="Successful Installations" />
          <AchievmentsCards img={E3} year="50 +" desc="Dedicated Team of Professionals" />
          <AchievmentsCards img={E4} year="3 +" desc="Trusted Partners" />
        </div>
      </div>

      {/* Client Testimonials Section */}
      <div className="flex flex-col w-full sm:w-3/5 gap-8 sm:gap-12">
        <p className="text-lg sm:text-base text-white mb-6">
          Hear directly from our valued clients who have experienced the difference we bring. Their feedback speaks volumes about our commitment to quality, service, and results.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 sm:gap-5">
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
  );
};

export default Achievments;
