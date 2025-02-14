import React from 'react'
import Logo from '../../assets/AlphaLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <div className="flex flex-wrap justify-between items-center px-4 py-2">
            {/* Logo Section */}
            <div className="flex items-center w-full sm:w-auto justify-between mb-4 sm:mb-0">
                <img src={Logo} alt="Logo" className="h-24" />
            </div>

            {/* Contact & Business Details Section */}
            <div className="flex flex-col items-start w-full sm:w-auto">
                {/* Contact details for small screens */}
                <ul className="flex flex-wrap gap-4 text-sm mb-4 sm:mb-0">
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

                {/* Navigation and Request a Quote button */}
                <div className="flex flex-wrap gap-6 items-center justify-between w-full sm:w-auto">
                    <ul className="flex gap-6 text-sm">
                        <li><a href="/">Home</a></li>
                        <li><a href="/aboutus">About Us</a></li>
                        <li><a href="/infrastructure">Infrastructure</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/application">Application</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                    <button className='bg-[#005B8C] px-8 py-4 text-white'>
                        Request A Quote
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header;
