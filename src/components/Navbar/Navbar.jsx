import React from "react";
import { Search, Heart, ShoppingBag } from "lucide-react";

function Navbar() {
  return (
    <>
      {/* Top Offer Bar */}
      <div className="bg-green-900 text-white text-center text-sm py-2">
        🎁 15% Off + Free Gift on Orders Above ₹1499
      </div>

      {/* Main Navbar */}
      <nav className="bg-white flex justify-between items-center px-10 py-4 shadow-md">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo-DWSBruEc.png"
            alt="Organic Logo"
            className="w-20 h-20 object-contain"
          />
        </div>

        {/* Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <li className="cursor-pointer hover:text-green-700 transition-colors">Shop By Category</li>
          <li className="cursor-pointer hover:text-green-700 transition-colors">Deal Of The Day</li>
          <li className="cursor-pointer hover:text-green-700 transition-colors">Blogs</li>
          <li className="cursor-pointer hover:text-green-700 transition-colors">Combo Offer</li>
          <li className="cursor-pointer hover:text-green-700 transition-colors">Track Order</li>
        </ul>

        {/* Icons Section */}
        <div className="flex items-center space-x-6 text-gray-700">
          {/* Search Icon */}
          <Search className="w-5 h-5 cursor-pointer hover:text-green-700 transition" />

          {/* Login */}
          <button className="text-gray-700 font-medium hover:text-green-700 transition">
            Login
          </button>

          {/* Wishlist */}
          <div className="relative cursor-pointer hover:text-green-700 transition">
            <Heart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] font-bold rounded-full px-[6px] py-[1px]">
              0
            </span>
          </div>

          {/* Cart */}
          <div className="relative cursor-pointer hover:text-green-700 transition">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] font-bold rounded-full px-[6px] py-[1px]">
              0
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
