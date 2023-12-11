import React from 'react';
import { FaHeart, FaTruck, FaUserFriends, FaWallet } from "react-icons/fa";
import { IoMdHelpCircle } from "react-icons/io";

const MenuList = () => {
  return (
    <div>
      <ul className="p-3">
        <li>
            <a
            className="flex items-center gap-3 w-full hover:bg-orange-100 p-2 rounded-lg duration-200 text-gray-500"
            href="#" 
            target="_blank">
                <FaTruck className="text-orange-400" size={25} />
                <span className="text-xl">Order</span>
            </a>
        </li>
        <li>
            <a
            className="flex items-center gap-3 w-full hover:bg-orange-100 p-2 rounded-lg duration-200 text-gray-500"
            href="#" 
            target="_blank">
                <FaHeart className="text-orange-400" size={25} />
                <span className="text-xl">Favorites</span>
            </a>
        </li>
        <li>
            <a
            className="flex items-center gap-3 w-full hover:bg-orange-100 p-2 rounded-lg duration-200 text-gray-500"
            href="#" 
            target="_blank">
                <FaWallet className="text-orange-400" size={25} />
                <span className="text-xl">Wallet</span>
            </a>
        </li>
        <li>
            <a
            className="flex items-center gap-3 w-full hover:bg-orange-100 p-2 rounded-lg duration-200 text-gray-500"
            href="#" 
            target="_blank">
                <IoMdHelpCircle className="text-orange-400" size={25} />
                <span className="text-xl">Help</span>
            </a>
        </li>
        <li>
            <a
            className="flex items-center gap-3 w-full hover:bg-orange-100 p-2 rounded-lg duration-200 text-gray-500"
            href="#" 
            target="_blank">
                <FaUserFriends className="text-orange-400" size={25} />
                <span className="text-xl">Invite Friends</span>
            </a>
        </li>
      </ul>
    </div>
  )
}

export default MenuList;