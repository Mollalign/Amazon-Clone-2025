import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ data }) => {
  return (
    <Link
      to={`/category/${data.name}`}
      className="bg-white rounded-md border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden cursor-pointer w-[300px] min-h-[300px] flex flex-col justify-between p-4 no-underline"
    >
      {/* Title */}
      <div>
        <h2 className="text-lg font-bold text-gray-800 mb-4 leading-tight">
          {data.title}
        </h2>

        {/* Main Image */}
        <div className="w-full h-[200px] flex items-center justify-center">
          <img
            src={data.imgLink}
            alt={data.name}
            className="max-h-full object-contain"
          />
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-4">
        <span className="text-blue-600 text-sm font-semibold hover:underline">
          Shop now
        </span>
      </div>
    </Link>
  );
};

export default CategoryCard;
