import React from 'react';
import { categories } from '../data/data';

const Categories = () => {
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="font-bold text-orange-600 text-center text-4xl"> Categories</h1>

      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="flex justify-center items-center p-4 bg-gray-100 rounded-lg">
            <h2 className="font-bold sm:text-xl">{item.name}</h2>
            <img className='w-20' src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
