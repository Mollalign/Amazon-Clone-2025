import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Amazon-logo.png";
import usaIcon from "../../assets/icons/usaFlag.png";
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import { HiOutlineMenu } from "react-icons/hi";
import LowerHeader from "./LowerHeader";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <section className="w-full overflow-x-hidden">
      {/* Top Header */}
      <div className="text-white bg-[#131921] flex items-center justify-between p-3 text-sm h-[62px]">

        {/* Left */}
        <div className="flex items-center space-x-3">
          <Link to="/">
            <img src={logo} alt="Amazon" className="w-[100px] object-contain -mb-3" />
          </Link>
          <div className="hidden md:flex items-center cursor-pointer border border-transparent hover:border-white px-1 py-1 rounded">
            <SlLocationPin className="text-lg" />
            <div className="ml-1 leading-tight">
              <p className="text-[11px] text-gray-300">Deliver to</p>
              <p className="text-[13px] font-bold">Ethiopia</p>
            </div>
          </div>
        </div>

        {/* Middle Search */}
        <div className="hidden md:flex flex-grow mx-4 max-w-3xl h-10">
          <select className="bg-gray-200 text-black/60 hover:text-black text-[13px] font-bold px-3 rounded-l-md border border-gray-300 w-[63px] cursor-pointer">
            <option value="">All</option>
          </select>
          <input
            type="text"
            placeholder="Search Amazon"
            className="flex-grow px-3 py-1 text-black text-sm bg-white outline-none"
          />
          <button className="bg-[#FEBD69] hover:bg-[#F3A847] px-4 rounded-r-md flex items-center justify-center cursor-pointer">
            <BsSearch className="text-black text-lg" />
          </button>
        </div>

        {/* Right */}
        <div className="hidden md:flex items-center space-x-6 text-xs font-medium">
          <div className="flex items-center space-x-1 cursor-pointer border border-transparent hover:border-white px-1 py-1 rounded">
            <img src={usaIcon} className="w-4 h-3" alt="USA Flag" loading="lazy" />
            <select className="bg-transparent text-white text-xs focus:outline-none font-bold">
              <option>EN</option>
            </select>
          </div>

          <Link to="/auth" className="leading-tight border border-transparent hover:border-white px-1 py-1 rounded">
            <p>Hello, sign in</p>
            <p className="font-bold text-sm">Account & Lists</p>
          </Link>

          <Link to="/orders" className="leading-tight border border-transparent hover:border-white px-1 py-1 rounded">
            <p>Returns</p>
            <p className="font-bold text-sm">& Orders</p>
          </Link>

          <Link to="/cart" className="relative flex items-end text-white border border-transparent hover:border-white px-2 pb-1 pt-3 rounded">
            <div className="relative">
              <span className="absolute -top-4 left-3 text-orange-400 font-bold text-lg">0</span>
              <BiCart className="text-3xl text-white" />
            </div>
            <p className="ml-1 font-bold text-sm">Cart</p>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white text-2xl cursor-pointer pr-4"
        >
          <HiOutlineMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40">
          <div
            ref={mobileMenuRef}
            className="absolute top-0 left-0 w-3/4 bg-[#232f3e] h-full shadow-lg transition-transform transform duration-300 ease-in-out"
          >
            <div className="px-6 py-7 space-y-5 text-sm">

              {/* Mobile Search */}
              <div className="flex w-full h-10 rounded overflow-hidden shadow">
                <select className="bg-gray-100 text-black/60 hover:text-black text-sm font-bold px-5 border-r border-gray-300 w-[80px] cursor-pointer focus:outline-none">
                  <option value="">All</option>
                </select>
                <input
                  type="text"
                  placeholder="Search Amazon"
                  className="flex-grow px-3 py-1 text-black text-sm bg-white outline-none"
                />
                <button className="bg-[#FEBD69] hover:bg-[#F3A847] px-3 flex items-center justify-center cursor-pointer">
                  <BsSearch className="text-black text-lg" />
                </button>
              </div>

              {/* Links */}
              <Link
                to="/auth"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 rounded hover:bg-[#37475a] px-2"
              >
                <p className="text-gray-200">Hello, Sign in</p>
                <p className="font-bold text-white">Account & Lists</p>
              </Link>

              <Link
                to="/orders"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 rounded hover:bg-[#37475a] px-2"
              >
                <p className="text-gray-200">Returns</p>
                <p className="font-bold text-white">& Orders</p>
              </Link>

              <Link
                to="/cart"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center py-4 px-2 rounded hover:bg-[#37475a]"
              >
                <div className="relative">
                  <span className="absolute -top-4 left-3 text-orange-400 font-bold text-lg">0</span>
                  <BiCart className="text-3xl text-white" />
                </div>
                <p className="ml-2 font-bold text-white text-sm">Cart</p>
              </Link>

              <div className="flex items-center space-x-2 px-2 py-2 rounded hover:bg-[#37475a] cursor-pointer">
                <img src={usaIcon} className="w-4 h-3" alt="USA Flag" />
                <span className="text-white font-semibold">EN</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lower Header */}
      <LowerHeader />
    </section>
  );
};

export default Header;
