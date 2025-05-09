import React, {useContext } from "react";
import { Link } from "react-router-dom";
import './header.css'
import logo from "../../assets/images/Amazon-logo.png";
import usaIcon from "../../assets/icons/usaFlag.png";
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader';
import DataContext from "../DataProvider/DataContext";
import {auth} from "../../Utility/firebase";


const Header = () => {
  const [{user, basket}] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount 
  }, 0);

  return (
    <header className="w-full fixed z-50">
      {/* Top Header */}
      <div className="w-full bg-[#131921] text-white px-4 py-4 mb:py-0 flex flex-col md:flex-row items-center justify-between gap-1 md:gap-0 text-sm md:h-[65px]">
        
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <Link to="/">
            <img src={logo} alt="Amazon" className="w-[100px] object-contain md:-mb-3" />
          </Link>

          <div className="hidden md:flex items-center gap-1 cursor-pointer border border-transparent hover:border-white p-1 rounded">
            <SlLocationPin className="text-lg" />
            <div className="leading-tight">
              <p className="text-[11px] text-gray-300">Deliver to</p>
              <p className="text-[13px] font-bold">Ethiopia</p>
            </div>
          </div>
        </div>

        {/* Middle Section (Search Bar) */}
        <div className="flex w-[80%] md:max-w-[575px] h-10 flex-grow mx-auto md:mx-0 justify-center">
          <select className="bg-gray-200 text-black text-[13px] font-bold px-2 rounded-l-md border border-gray-300 w-[60px]">
            <option>All</option>
          </select>
          <input
            type="text"
            placeholder="Search Amazon"
            className="max-w-[80%] md:max-w-full flex-grow px-3 py-1 text-black text-sm bg-white outline-none overflow-noe"
          />
          <button className="bg-[#FEBD69] hover:bg-[#F3A847] px-4 rounded-r-md flex items-center justify-center">
            <BsSearch className="text-black text-lg" />
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 md:gap-4 text-xs font-medium whitespace-nowrap mt-1 md:mt-0">
          {/* Language */}
          <div className="hidden md:flex items-center gap-1 cursor-pointer hover:border-white border border-transparent px-2 py-1 rounded">
            <img src={usaIcon} className="w-4 h-3" alt="USA Flag" loading="lazy" />
            <select className="bg-transparent text-white text-xs focus:outline-none font-bold">
              <option>EN</option>
            </select>
          </div>

          {/* Account */}
          <Link to={ !user && "/auth"} 
            className="leading-tight hover:border-white border border-transparent px-2 py-1 rounded">
            <div onClick={() => auth.signOut()}>
              {
                user ? (
                  <>
                    <p>Hello <span className="text-orange-400">{user?.email?.split("@")[0]}</span></p>
                    
                    <span className="">Sign Out</span>
                  </>
                 
                ) : (
                  <>
                   <p>Hello, sign in</p>
                   <p className="font-bold text-sm">Account & Lists</p>
                  </>                 
                )                
              }          
            </div>
          </Link>

          {/* Orders */}
          <Link to="/orders" className=" md:block leading-tight hover:border-white border border-transparent px-2 py-1 rounded">
            <p>Returns</p>
            <p className="font-bold text-sm">& Orders</p>
          </Link>

          {/* Cart */}
          <Link to="/cart" className="relative flex items-end text-white hover:border-white border border-transparent px-2 pt-3 pb-1 rounded">
            <div className="relative">
              <span className="absolute -top-4 left-3 text-orange-400 font-bold text-lg">{totalItem}</span>
              <BiCart className="text-3xl" />
            </div>
            <p className="ml-1 font-bold text-sm">Cart</p>
          </Link>
        </div>
      </div>

      {/* Lower section */}
      <LowerHeader/>
    </header>
  );
};

export default Header;
