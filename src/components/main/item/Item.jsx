import React from 'react';
import CardFood from './card/CardFood';

const Item = ({ foods }) => {
  if(!foods) return null;
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-6 my-10">
      {/* map in all foods */}
      {foods.map((food, index) => (
        <CardFood
            key={index * Math.random()}
            id={food.id}
            name={food.name}
            price={food.price}
            image={food.image}
        />
      ))}
    </section>
  )
}

export default Item;