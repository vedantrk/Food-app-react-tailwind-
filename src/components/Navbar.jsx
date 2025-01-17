import React, { useState } from "react";
import { AiOutlineMenu, AiFillTag, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import {BsFillCartFill, BsFillSaveFill} from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb';
import {MdFavorite, MdHelp} from 'react-icons/md';
import {FaUserFriends, FaWallet} from 'react-icons/fa';

const Navbar = () => {
    const [nav, setNav] = useState(false)

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 ">
      {/* left side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>{" "}
        </h1>
        <div className="hidden lg:flex bg-gray-200 rounded-full text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>

      {/* Search Input*/}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] ">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 focus:outline-none"
          type="text"
          placeholder="Search Foods"
        />
      </div>

      {/* Cart */}
      <button className="bg-black text-white hidden md:flex items-center py-2 ">
        <BsFillCartFill size={20} className="mr-2" /> Cart
      </button>

      {/* Mobile menu*/}

      {/* overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/**\Sidebar menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }>
        <div className="p-5 mb-3">
          <AiOutlineClose
            size={30}
            className="absolute left-4 top-6 cursor-pointer "
            onClick={() => setNav(!nav)}
          />
          <h2 className="text-2xl pl-20">
            Best <span className="font-bold">Eats</span>
          </h2>
        </div>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="flex text-xl py-2">
              <TbTruckDelivery className="mr-4" size={25} />
              Orders
            </li>
            <li className="flex text-xl py-2">
              <MdFavorite className="mr-4" size={25} />
              Favourites
            </li>
            <li className="flex text-xl py-2">
              <FaWallet className="mr-4" size={25} />
              Wallet
            </li>
            <li className="flex text-xl py-2">
              <MdHelp className="mr-4" size={25} />
              Help
            </li>
            <li className="flex text-xl py-2">
              <AiFillTag className="mr-4" size={25} />
              Promotions
            </li>
            <li className="flex text-xl py-2">
              <BsFillSaveFill className="mr-4" size={25} />
              Best Ones
            </li>
            <li className="flex text-xl py-2">
              <FaUserFriends className="mr-4" size={25} />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
