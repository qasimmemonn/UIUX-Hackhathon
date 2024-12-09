"use client"

import { useState } from "react";
import { FaSearch, FaHeart, FaShoppingCart, FaBars } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      {/* Top Header */}
      <div className="bg-gray-100 text-black py-2">
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Left Side: Logo */}
         <img src="/images/vector (1).png" alt="Logo"></img>
          {/* Right Side: Links */}
          <div className="space-x-6 text-sm">
            <Link href="#" className="hover:text-gray-400">Find a Store</Link>
            <Link href="/help" className="hover:text-gray-400">Help</Link>
            <Link href="/signup" className="hover:text-gray-400">Join Us</Link>
            <Link href="/signin" className="hover:text-gray-400">Sign In</Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          {/* Left Side: Logo */}
          <div className="text-2xl font-bold text-gray-800">
            <img src="/images/vector.png" alt="Logo"></img>
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="#" className="text-gray-800 hover:text-gray-600">Mew & Featured</Link>
            <Link href="#" className="text-gray-800 hover:text-gray-600">Male</Link>
            <Link href="#" className="text-gray-800 hover:text-gray-600">Women</Link>
            <Link href="#" className="text-gray-800 hover:text-gray-600">Kids</Link>
            <Link href="#" className="text-gray-800 hover:text-gray-600">Sale</Link>
            <Link href="#" className="text-gray-800 hover:text-gray-600">SNKRS</Link>
          </div>

          {/* Right Side: Search Bar, Wishlist, Cart */}
          <div className="flex items-center space-x-6">
            {/* Small Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-32 md:w-48 py-2 pl-10 pr-4 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            {/* Wishlist Icon */}
            <div className="relative">
             <Link  href='/'> <FaHeart className="w-6 h-6 text-gray-800 hover:text-blue-600 cursor-pointer" /></Link>
            </div>

            {/* Cart Icon */}
            <div className="relative">
             <Link href='/cart'> <FaShoppingCart className="w-6 h-6 text-gray-800 hover:text-blue-600 cursor-pointer" /></Link>
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-800"
              onClick={toggleMobileMenu}
            >
              <FaBars className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-6 py-4">
            <a href="#" className="block py-2 text-gray-800">Home</a>
            <a href="#" className="block py-2 text-gray-800">Shop</a>
            <a href="#" className="block py-2 text-gray-800">About</a>
            <a href="#" className="block py-2 text-gray-800">Contact</a>
            <div className="flex flex-col space-y-4 mt-4">
              <a href="#" className="text-gray-800">Find a Store</a>
              <a href="#" className="text-gray-800">Help</a>
              <a href="#" className="text-gray-800">Join Us</a>
              <a href="#" className="text-gray-800">Sign In</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
