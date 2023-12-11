import React from 'react';

const Card = ({ src, title, subtitle }) => {
  return (
    <div className="relative rounded-xl hover:shadow-lg hover:scale-105 duration-100 cursor-pointer
    group">
      <div className="absolute p-4 bg-black/40 h-full w-full rounded-xl">
        <h2 className="text-gray-200 font-bold text-xl">{title}</h2>
        <span className="text-white font-bold">{subtitle}</span>
      </div>
      <div className="rounded-xl">
        <img 
            className="rounded-xl w-full max-h-[200px] object-cover"
            src={src} 
            alt={title} 
        />
      </div>
      <button className="absolute bottom-5 left-5 bg-white p-2 text-black rounded-lg font-bold
      group-hover:bg-orange-400 group-hover:text-white duration-200">
        Order Now</button>
    </div>
  )
}

export default Card;