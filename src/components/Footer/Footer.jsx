import React from 'react';
import Logo from '../../assets/AlphaLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faGooglePlay, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className="py-12 px-20 flex flex-wrap justify-between bg-[#3D3737] text-white">
            <div className="w-full sm:w-1/3 lg:w-1/4 mb-8 sm:mb-0">
                <img src={Logo} alt="Logo" className="w-[200px] h-[55px]" />
                <p className="mt-4 text-sm leading-tight">
                    Gat No.: 322, Dhakambe Shivar, Juna Pimpalnare Road, A/P : Dhakambe, Tal : Dindori, Dist. : Nashik, Maharashtra (India). PIN - 422 004
                </p>
                <p className="mt-2 text-sm"><span className="font-semibold">Phone : </span> (02557) 255111/112/113/114</p>
                <p className="text-sm"><span className="font-semibold">Email : </span>info@alphasafetyglass.in</p>
            </div>

            <div className="w-full sm:w-1/3 lg:w-1/4 mb-8 pl-16 sm:mb-0">
                <h1 className="font-bold text-lg mb-4 ">Useful Links</h1>
                <ul className="flex flex-col gap-2 ">
                    <li>Home</li>
                    <li>Services</li>
                    <li>About Us</li>
                    <li>Products</li>
                    <li>Career</li>
                    <li>Contact Us</li>
                </ul>
            </div>

            <div className="w-full sm:w-1/3 lg:w-1/4 mb-8 sm:mb-0">
                <h1 className="font-bold text-lg mb-4">Our Services</h1>
                <ul className="flex flex-col gap-2">
                    <li>Superior Quality</li>
                    <li>Superior Service & Timely Delivery</li>
                    <li>Latest Machinery & Infrastructure</li>
                    <li>Highly Qualified Workforce</li>
                </ul>
            </div>

            <div className="w-full sm:w-1/3 lg:w-1/4 mb-8 sm:mb-0">
                <h1 className="font-bold text-lg mb-4">Follow Us</h1>
                <div className="flex space-x-4">
                    <div className="p-2 rounded-full bg-white shadow-md flex items-center justify-center">
                        <FontAwesomeIcon icon={faFacebookF} className="text-[#005B8C] text-[14px]" />
                    </div>
                    <div className="p-2 rounded-full bg-white shadow-md flex items-center justify-center">
                        <FontAwesomeIcon icon={faGooglePlay} className="text-[#005B8C] text-[14px]" />
                    </div>
                    <div className="p-2 rounded-full bg-white shadow-md flex items-center justify-center">
                        <FontAwesomeIcon icon={faGoogle} className="text-[#005B8C] text-[14px]" />
                    </div>
                    <div className="p-2 rounded-full bg-white shadow-md flex items-center justify-center">
                        <FontAwesomeIcon icon={faXTwitter} className="text-[#005B8C] text-[14px]" />
                    </div>
                    <div className="p-2 rounded-full bg-white shadow-md flex items-center justify-center">
                        <FontAwesomeIcon icon={faLinkedinIn} className="text-[#005B8C] text-[14px]" />
                    </div>
                </div>
            </div>

            <div className=" border-t-1 border-white w-full pt-2 mt-7">
                <h1 className="text-center">&#169; Copyright Active. All Rights Reserved</h1>
            </div>
        </div>
    );
}

export default Footer;
