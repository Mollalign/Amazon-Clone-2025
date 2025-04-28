import React from 'react';

const CategoryCard = ({ data }) => {
  return (
    <div className="bg-white rounded-md border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden cursor-pointer w-[300px] min-h-[300px] flex flex-col justify-between p-4">
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

      {/* Bottom Link */}
      <div className="mt-4">
        <a
          href="#"
          className="text-blue-600 text-sm font-semibold hover:underline"
        >
          Shop now
        </a>
      </div>
    </div>
  );
};

export default CategoryCard;
