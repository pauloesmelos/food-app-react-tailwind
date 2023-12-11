import React from 'react';
import { IoMdClose } from "react-icons/io";
import MenuList from './list/MenuList';

const MenuMobile = ({ state, setState }) => {
  return (
    <nav>
      <div>
        {/* shadow */}
        { state ? 
        <div className="fixed top-0 left-0 w-full h-screen bg-black/40 z-50"></div> :
        <></>
        }
        {/* bar left */}
        <div className={state ? "fixed w-full h-full max-w-[310px] left-0 top-0 bg-white duration-300 z-50" : 
        "fixed w-full h-full max-w-[300px] left-0 top-0 ml-[-100%] bg-white duration-300 z-50"}>
            <div className="flex justify-between p-3">
                <h1 className="text-4xl">
                    Best
                    <span className="font-bold">Eats</span>
                </h1>
                <IoMdClose 
                className="hover:text-orange-600 duration-300 hover:scale-105"
                onClick={() => setState(false)}
                size={35} 
                cursor={"pointer"} />
            </div>
            <MenuList />
        </div>
      </div>
    </nav>
  )
}

export default MenuMobile;