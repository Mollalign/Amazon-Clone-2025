import React from "react";
import { Link } from "react-router-dom";
import { FaGlobe, FaDollarSign } from "react-icons/fa";
import LogoImg from "../../assets/images/Amazon-logo.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#232f3e] text-white text-sm pb-5 mt-10">
        {/* Back to top */}
        <div className="bg-[#37475a] py-3 text-center hover:bg-[#485769] cursor-pointer">
          <Link to="#" className="text-white">Back to top</Link>
        </div>

        {/* Top links */}
        <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-white">
          <div>
            <h3 className="font-bold mb-2">Get to Know Us</h3>
            <ul className="space-y-1">
              <li><Link to="#">Careers</Link></li>
              <li><Link to="#">Blog</Link></li>
              <li><Link to="#">About Amazon</Link></li>
              <li><Link to="#">Investor Relations</Link></li>
              <li><Link to="#">Amazon Devices</Link></li>
              <li><Link to="#">Amazon Science</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Make Money with Us</h3>
            <ul className="space-y-1">
              <li><Link to="#">Sell products on Amazon</Link></li>
              <li><Link to="#">Sell on Amazon Business</Link></li>
              <li><Link to="#">Sell apps on Amazon</Link></li>
              <li><Link to="#">Become an Affiliate</Link></li>
              <li><Link to="#">Advertise Your Products</Link></li>
              <li><Link to="#">Self-Publish with Us</Link></li>
              <li><Link to="#">Host an Amazon Hub</Link></li>
              <li><Link to="#" className="text-blue-400">› See More Make Money with Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Amazon Payment Products</h3>
            <ul className="space-y-1">
              <li><Link to="#">Amazon Business Card</Link></li>
              <li><Link to="#">Shop with Points</Link></li>
              <li><Link to="#">Reload Your Balance</Link></li>
              <li><Link to="#">Amazon Currency Converter</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Let Us Help You</h3>
            <ul className="space-y-1">
              <li><Link to="#">Amazon and COVID-19</Link></li>
              <li><Link to="#">Your Account</Link></li>
              <li><Link to="#">Your Orders</Link></li>
              <li><Link to="#">Shipping Rates & Policies</Link></li>
              <li><Link to="#">Returns & Replacements</Link></li>
              <li><Link to="#">Manage Your Content and Devices</Link></li>
              <li><Link to="#">Help</Link></li>
            </ul>
          </div>
        </div>

        {/* Logo and language buttons */}
        <div className="border-t border-gray-600">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-6 gap-4">
            <img
              src={LogoImg}
              alt="Amazon Logo"
              className="w-24"
            />
            <div className="flex flex-wrap justify-center gap-3 text-xs">
              <button className="flex items-center gap-2 border border-gray-500 px-3 py-1 rounded hover:bg-gray-700">
                <FaGlobe /> English
              </button>
              <button className="flex items-center gap-2 border border-gray-500 px-3 py-1 rounded hover:bg-gray-700">
                <FaDollarSign /> USD - U.S. Dollar
              </button>
              <button className="flex items-center gap-2 border border-gray-500 px-3 py-1 rounded hover:bg-gray-700">
                <img
                  src="https://flagcdn.com/us.svg"
                  alt="US Flag"
                  className="w-4 h-4 rounded-sm"
                />
                United States
              </button>
            </div>
          </div>
        </div>
      </footer>
    </> 
  );
};

export default Footer;
