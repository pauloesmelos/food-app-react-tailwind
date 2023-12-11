import React from 'react';
import { categories } from '../../data/data';
import CardCategory from './card-category/CardCategory';

const Category = () => {
  const [category, setCategory] = React.useState(null);
  React.useEffect(() => {
    setCategory(categories);
  }, []);
  if(!category) return null;
  return (
    <section className="w-full max-w-[1100px] mx-auto p-3">
      <h1 className="text-3xl md:text-4xl text-orange-500 text-center font-bold mb-7">Our Food Categories</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {category.map((e,i) => (
          <CardCategory 
            key={i * Math.random()}
            name={e.name} 
            image={e.image} 
          />
        ))}
      </div>
    </section>
  )
}

export default Category;