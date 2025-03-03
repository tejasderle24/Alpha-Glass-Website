import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Archievments from '../Achievments/Achievments'
import AboutImg from '../../assets/AboutImg.png';
import H1 from '../../assets/H1.png';
import H2 from '../../assets/H2.png';
import TeamCard from './TeamCard';
import MissionCard from './MissionCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';

function AboutUs() {
  return (
    <div>
      <Header />
      {/* Hero Section */}
      <div className="items-center justify-center flex flex-col mt-8">
        <h1 className="text-4xl font-bold text-[#005B8C]">About us</h1>
        <p className="text-sm font-semibold text-[#1C2752]">Home | About Us</p>
      </div>

      {/* Section 1 - Our Story */}
      <div className="flex flex-col sm:flex-row items-center justify-between bg-[#F9F9F9] px-6 sm:px-20 py-24">
        <div className="w-full sm:w-2/3 flex justify-center items-center mb-6 sm:mb-0 sm:ml-24">
          <img src={AboutImg} alt="HomeImg" className="w-full sm:w-98 max-w-full" />
        </div>

        <div className="flex flex-col justify-start w-full sm:w-1/2 gap-5 sm:mr-20">
          <h3 className='text-xl text-[#005B8C] font-semibold '>Our Story</h3>
          <h1 className="text-[#3D3737] font-bold text-4xl">Our commitment to glass excellence mirrors Our dedication to your satisfaction.</h1>
          <p className="text-[#757575] text-sm">Alpha Safety Glass Pvt. Ltd. is a Nashik (Dhakambe) based Glass Processing Unit spread over 3.5 acres with more than 40,000 Sq.ft. of constructed area. It is the only unit of its type in North Maharashtra.</p>
          <p className="text-[#757575] text-sm">The company is promoted by entrepreneurs with more than 20 years of experience in the glass industry. We are equipped with the best machinery and trained manpower to deliver world-class products at a reasonable price. We aim to provide our customers with a superior experience with our products and services.</p>
        </div>
      </div>

      {/* Section 2 - Mission & Vision */}
      <div className="flex flex-col items-center justify-center py-12 px-6 bg-gray-100">
        <h1 className="text-4xl font-bold text-[#3D3737] mb-12">About Us</h1>

        <div className="flex flex-col items-center mb-10 space-y-6 w-full sm:w-3/4">
          <MissionCard
            title="Our Mission"
            icon={<FontAwesomeIcon icon={faBullseye} />}
            desc="To be the preferred choice for customers seeking top-notch glass products by consistently delivering quality, innovation, and unmatched customer service."
          />
          <MissionCard
            title="Our Vision"
            icon={<FontAwesomeIcon icon={faEye} />}
            desc="At Alpha Glass Manufacturing Company, we envision a future where clarity and safety converge seamlessly. Our commitment is to pioneer innovative glass solutions that not only redefine industry standards but also empower individuals and businesses to see the world with unprecedented clarity and confidence."
          />
        </div>
      </div>

      {/* Section 3 - Our Team */}
      <div className="items-center justify-center flex flex-col mt-8 gap-10">
        <h1 className="text-4xl font-bold text-[#3D3737]">Our Team</h1>
        <div className="flex flex-wrap gap-6 items-center justify-center">
          <TeamCard
            img={H1}
            title="John Doe"
            post="Director"
            desc="To be the preferred choice for top-notch glass products through quality, innovation, and unmatched customer service."
          />
          <TeamCard
            img={H2}
            title="Jane Doe"
            post="Director"
            desc="To be the preferred choice for top-notch glass products through quality, innovation, and unmatched customer service."
          />
        </div>
      </div>

      <Archievments />
      <Footer />
    </div>
  )
}

export default AboutUs;
