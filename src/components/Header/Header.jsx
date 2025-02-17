import React, { useState } from 'react';
import Logo from '../../assets/AlphaLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faPhoneVolume, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full bg-white shadow-md px-4 py-3">
            <div className="flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center">
                    <img src={Logo} alt="Logo" className="h-20 sm:h-24" />
                </div>

                {/* Contact & Business Details (Hidden on Mobile) */}
                <ul className="hidden sm:flex gap-6 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faClock} className='text-[#005B8C]' />
                        Mon - Sat: 8AM - 5PM, Sunday: CLOSED
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

                {/* Hamburger Menu (Mobile) */}
                <div className="sm:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#005B8C] text-2xl">
                        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                    </button>
                </div>
            </div>

            {/* Navigation & Request a Quote (Aligned to Right) */}
            <nav className="hidden sm:flex justify-end items-center mt-4">
                <div className="flex gap-6 text-sm mr-6">
                    <a href="/" className="hover:text-[#005B8C]">Home</a>
                    <a href="/aboutus" className="hover:text-[#005B8C]">About Us</a>
                    <a href="/infrastructure" className="hover:text-[#005B8C]">Infrastructure</a>
                    <a href="/products" className="hover:text-[#005B8C]">Products</a>
                    <a href="/application" className="hover:text-[#005B8C]">Application</a>
                    <a href="/contact" className="hover:text-[#005B8C]">Contact</a>
                </div>
                <button className='bg-[#005B8C] text-white px-6 py-3 rounded-md hover:bg-[#004070] transition-all'>
                    Request A Quote
                </button>
            </nav>

            {/* Mobile Menu (Hamburger) */}
            {menuOpen && (
                <div className="sm:hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex">
                    <div className="bg-white w-3/4 h-full shadow-md p-6">
                        <button onClick={() => setMenuOpen(false)} className="text-[#005B8C] text-2xl mb-4">
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                        <div className="flex flex-col gap-4 text-lg">
                            <a href="/" className="hover:text-[#005B8C]" onClick={() => setMenuOpen(false)}>Home</a>
                            <a href="/aboutus" className="hover:text-[#005B8C]" onClick={() => setMenuOpen(false)}>About Us</a>
                            <a href="/infrastructure" className="hover:text-[#005B8C]" onClick={() => setMenuOpen(false)}>Infrastructure</a>
                            <a href="/products" className="hover:text-[#005B8C]" onClick={() => setMenuOpen(false)}>Products</a>
                            <a href="/application" className="hover:text-[#005B8C]" onClick={() => setMenuOpen(false)}>Application</a>
                            <a href="/contact" className="hover:text-[#005B8C]" onClick={() => setMenuOpen(false)}>Contact</a>
                        </div>
                        <button 
                            className="mt-6 bg-[#005B8C] text-white px-6 py-3 w-full rounded-md hover:bg-[#004070] transition-all"
                            onClick={() => setMenuOpen(false)}
                        >
                            Request A Quote
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
