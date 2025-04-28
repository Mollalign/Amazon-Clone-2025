import React from 'react';
import { categoryInfos } from './categoryFullInfos';
import CategoryCard from './CategoryCard';

const Category = () => {
  return (
    <section className="relative -mt-[14%] md:-mt-[22%] grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {categoryInfos.map((infos, index) => (
        <CategoryCard key={index} data={infos} />
      ))}
    </section>
  );
};

export default Category;
