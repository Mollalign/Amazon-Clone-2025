import React from 'react';
import './header.css';
import { HiOutlineMenu } from "react-icons/hi";

const LowerHeader = ({className}) => {
  return (
    <div className={`bg-[#232F3E] text-white ${className} shadow-md`} >
      <ul className="flex items-center space-x-4 px- py-1 font-semibold text-sm overflow-x-auto md:overflow-visible hide-scrollbar">
        <li className="flex items-center gap-1 px-2 py-1 rounded hover:bg-[#37475A] transition duration-200 cursor-pointer whitespace-nowrap">
          <HiOutlineMenu className="text-[1.6rem]" />
          <span>All</span>
        </li>
        <li className="px-2 py-1 rounded hover:bg-[#37475A] transition duration-200 cursor-pointer whitespace-nowrap">Today's Deals</li>
        <li className="px-2 py-1 rounded hover:bg-[#37475A] transition duration-200 cursor-pointer whitespace-nowrap">Registry</li>
        <li className="px-2 py-1 rounded hover:bg-[#37475A] transition duration-200 cursor-pointer whitespace-nowrap">Prime Video</li>
        <li className="px-2 py-1 rounded hover:bg-[#37475A] transition duration-200 cursor-pointer whitespace-nowrap">Gift Cards</li>
        <li className="px-2 py-1 rounded hover:bg-[#37475A] transition duration-200 cursor-pointer whitespace-nowrap">Customer Service</li>
        <li className="px-2 py-1 rounded hover:bg-[#37475A] transition duration-200 cursor-pointer whitespace-nowrap">Sell</li>
      </ul>
    </div>
  );
};

export default LowerHeader;
