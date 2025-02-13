import React from 'react'
import Logo from '../../assets/AlphaLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className='flex justify-between items-center pr-4'>
        {/* Logo Section */}
        <div className="flex items-center">
            <img src={Logo} alt="Logo" className="h-24" />
        </div>
        
        {/* Contact & Business Details Section */}
        <div className="flex flex-col items-start">
            <ul className="flex gap-8 text-sm mb-2">
                <li className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faClock} className='text-[#005B8C]' />
                    Mon - Sat : 8AM - 5PM, Sunday: CLOSED
                </li>
                <li className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faPhoneVolume} className='text-[#005B8C]' />
                    9876543210
                </li>
                <li className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faLocationDot} className='text-[#005B8C]' />
                    Nashik, Maharashtra, India
                </li>
            </ul>
            <div className="flex gap-7 items-center">
                <ul className='flex gap-6 text-sm'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Infrastructure</li>
                    <li>Products</li>
                    <li>Application</li>
                    <li>Contact</li>
                </ul>
                <button className='bg-[#005B8C] p-3 text-white rounded'>
                    Request A Quote
                </button>
            </div>
        </div>
    </div>
  )
}

export default Header;
