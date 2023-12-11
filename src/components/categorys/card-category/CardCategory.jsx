import React from 'react';

const CardCategory = ({ name, image }) => {
  return (
    <div className="bg-gray-200/50 flex items-center gap-3 rounded-md p-3 cursor-pointer duration-300 hover:shadow-lg hover:scale-105
    justify-around">
      <div>
        <h3 className="text-slate-700 font-bold text-xl">
            {name}
        </h3>
      </div>
      <div>
        <img 
            className="w-20"
            src={image} 
            alt={name}
            title={name}
        />
      </div>
    </div>
  )
}

export default CardCategory;