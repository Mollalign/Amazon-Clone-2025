import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ data }) => {
  const { title, name, imgLink } = data;

  return (
    <Link
      to={`/category/${name}`}
      className="bg-white rounded-lg border border-gray-200 shadow hover:shadow-md transition-shadow duration-300 overflow-hidden cursor-pointer w-[300px] min-h-[300px] flex flex-col justify-between p-4 no-underline"
    >
      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">{title}</h2>

      {/* Image */}
      <div className="w-full h-[200px] flex items-center justify-center">
        <img
          src={imgLink}
          alt={title}
          className="max-h-full max-w-full object-contain"
          loading="lazy"
        />
      </div>

      {/* CTA */}
      <div className="mt-4 pl-1.5">
        <span className="text-blue-600 text-sm font-semibold hover:underline">
          Shop now
        </span>
      </div>
    </Link>
  );
};

export default CategoryCard;
