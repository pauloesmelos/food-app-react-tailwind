import React from 'react';
import { MdMonetizationOn } from "react-icons/md";
import { data } from '../../data/data';
import Item from './item/Item';

const Main = () => {
  const [foods, setFoods] = React.useState(null);
  React.useEffect(() => {
    setFoods(data);
  }, []);
  const filterType = (type) => {
    const filter = (type === "all" ? data : data.filter(e => e.category === type));
    setFoods(filter);
  };
  const filterPrice = (price) => {
    const filter = data.filter(food => food.price === price);
    setFoods(filter);
  }
  return (
    <main className="pt-7 w-full max-w-[1100px] mx-auto p-3">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-orange-600 text-center">
            Top Rated Menu Itens
        </h1>
        <div className="flex flex-wrap w-full justify-around mt-8">
            <div>
                <h2 className="text-lg font-bold">Filter per Type</h2>
                <ul className="flex flex-wrap gap-4 my-6">
                    <li>
                        <button 
                        onClick={() => filterType("all")}
                        className="px-5 py-2 border border-orange-500 rounded-lg text-orange-500 hover:bg-orange-500
                        hover:text-white duration-200 font-bold">
                            All
                        </button>
                    </li>
                    <li>
                        <button 
                        onClick={() => filterType("burger")}
                        className="px-5 py-2 border border-orange-500 rounded-lg text-orange-500 hover:bg-orange-500
                        hover:text-white duration-200 font-bold">
                            Burgers
                        </button>
                    </li>
                    <li>
                        <button 
                        onClick={() => filterType("pizza")}
                        className="px-5 py-2 border border-orange-500 rounded-lg text-orange-500 hover:bg-orange-500
                        hover:text-white duration-200 font-bold">
                            Pizza
                        </button>
                    </li>
                    <li>
                        <button 
                        onClick={() => filterType("salad")}
                        className="px-5 py-2 border border-orange-500 rounded-lg text-orange-500 hover:bg-orange-500
                        hover:text-white duration-200 font-bold">
                            Salads
                        </button>
                    </li>
                    <li>
                        <button 
                        onClick={() => filterType("chicken")}
                        className="px-5 py-2 border border-orange-500 rounded-lg text-orange-500 hover:bg-orange-500
                        hover:text-white duration-200 font-bold">
                            Chicken
                        </button>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="text-lg font-bold">Filter per Price</h2>
                <ul className="flex flex-wrap gap-4 my-6">
                    <li>
                        <button 
                        onClick={() => filterPrice("$")}
                        className="px-5 py-2 border border-orange-500 rounded-lg text-orange-500 hover:bg-orange-500
                        hover:text-white duration-200">
                            <MdMonetizationOn size={20}/>
                        </button>
                    </li>
                    <li>
                        <button 
                        onClick={() => filterPrice("$$")}
                        className="flex px-5 py-2 border border-orange-500 rounded-lg text-orange-500 hover:bg-orange-500
                        hover:text-white duration-200">
                            <MdMonetizationOn size={20} />
                            <MdMonetizationOn size={20} />
                        </button>
                    </li>
                    <li>
                        <button 
                        onClick={() => filterPrice("$$$")}
                        className="flex px-5 py-2 border border-orange-500 rounded-lg text-orange-500 hover:bg-orange-500
                        hover:text-white duration-200">
                            <MdMonetizationOn size={20} />
                            <MdMonetizationOn size={20} />
                            <MdMonetizationOn size={20} />
                        </button>
                    </li>
                    <li>
                        <button 
                        onClick={() => filterPrice("$$$$")}
                        className="flex px-5 py-2 border border-orange-500 rounded-lg text-orange-500 hover:bg-orange-500
                        hover:text-white duration-200">
                            <MdMonetizationOn size={20} />
                            <MdMonetizationOn size={20} />
                            <MdMonetizationOn size={20} />
                            <MdMonetizationOn size={20} />
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        {/* card foods */}
        <div>
            <Item foods={foods} />
        </div>
      </div>
    </main>
  )
}

export default Main;