import React from 'react';

const CardFood = ({ id, name, price, image }) => {
  const [hoverCard, setHoverCard] = React.useState(false);
  return (
    <div 
    className="shadow-xl cursor-pointer relative group" 
    onMouseOver={() => setHoverCard(e => !e)}
    onMouseLeave={() => setHoverCard(false)}
    >
      <div className="overflow-hidden">
        <img 
            className="w-full h-[250px] object-cover hover:scale-125 duration-300"
            src={image}
            title={name}
            alt="name" 
        />
      </div>
      <div className={`absolute top-2 left-5 bg-red-400 text-white text-[.9rem] font-bold px-2 py-[2px] rounded-full
       ${hoverCard ? "hidden" : "block" }`}>
        {id}
      </div>
      <div className="flex flex-wrap sm:flex-nowrap justify-around items-center p-4">
        <h3 className="font-bold group-hover:text-orange-500 duration-200">{name}</h3>
        <p className="bg-orange-500 rounded-full text-white font-bold px-4 py-2 text-sm sm:text-lg">{price}</p>
      </div>
    </div>
  )
}

export default CardFood;