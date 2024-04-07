import React from "react";
import { FiBell, FiSettings, FiUser } from "react-icons/fi";

const Header = () => {
  return (
    <div className="bg-transparent text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent text-white px-4 py-2 rounded-lg border border-black mr-4 focus:outline-none"
        />
      </div>
      <div className="flex items-center space-x-4">
        <button className="focus:outline-none">
          <FiBell size={24} color="black" />
        </button>
        <button className="focus:outline-none">
          <FiSettings size={24} color="black" />
        </button>
        <button className="focus:outline-none">
          <FiUser size={24} color="black" />
        </button>
      </div>
    </div>
  );
};

export default Header;
