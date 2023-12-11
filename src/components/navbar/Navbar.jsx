import React from 'react';
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import MenuMobile from './mobile/MenuMobile';

const Navbar = () => {
  const [mobile, setMobile] = React.useState(false);
  const [type, setType] = React.useState({
    Delivery: true,
    Pickup: false
  });
  const handleType = ({ target }) => {
    Object.keys(type).forEach((object, index) => {
      type[object] = false;
    })
    setType({
      ...type, [target.innerText]: !type[target.innerText]
    });  
  }

  return (
    <header className="w-full max-w-[1100px] mx-auto p-3 mt-2">
      <div className="flex gap-4 md:gap-0 justify-between items-center">
        {/* nav left */}
        <div className="flex items-center gap-5">
            <div>
                <LuMenu
                className="hover:text-orange-600 duration-300" 
                onClick={() => setMobile(e => !e)}
                cursor={"pointer"} 
                size={35} />
            </div>
            <div className="text-3xl md:text-4xl">
                <h1>
                    Best
                    <span className="font-bold ml-1">Eats</span>
                </h1>
            </div>
            <div className="bg-gray-300 rounded-full p-1 hidden md:flex">
                <button 
                onClick={handleType}
                className={`${type.Delivery ? "bg-black text-white" : "bg-gray-300 text-black"} rounded-full p-2 duration-200`}>
                  Delivery
                </button>
                <button 
                onClick={handleType}
                className={`${type.Pickup ? "bg-black text-white" : "bg-gray-300 text-black"} p-2 rounded-full duration-200`}>
                  Pickup
                </button>
            </div>
        </div>
        {/* search center */}
        <div className="flex items-center bg-gray-300 rounded-3xl p-2 w-full max-w-[300px] md:max-w-[500px]">
            <FaSearch className="text-gray-700 hover:text-orange-600 duration-300" size={25} cursor={"pointer"} />
            <input 
            className="bg-transparent outline-none w-full px-3 text-orange-500 font-bold"
            type="text" 
            placeholder="Search foods" />
        </div>
        {/* cart right */}
        <button className="hidden md:flex items-center px-7 py-1 text-lg gap-2 bg-black text-white rounded-full hover:opacity-70">
            <FaShoppingCart size={22} />
            <span>Cart</span>
        </button>
      </div>
      {/* mobile menu */}
      <MenuMobile state={mobile} setState={setMobile} />
    </header>
  )
}

export default Navbar;