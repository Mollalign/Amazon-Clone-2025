import React from 'react';
import Rating from '@mui/material/Rating';
import CurrencyFormat from './CurrencyFormat/CurrencyFormat';

const ProductCard = ({ product }) => {
  const { image, title, rating, price } = product;

  return (
    <div className="relative flex flex-col bg-white rounded-2xl shadow-md p-3 w-[185px] md:w-[250px] hover:shadow-xl transition duration-300">
      <a href="#" className="flex justify-center">
        <img src={image} alt={title} className="h-36 object-contain mb-3" />
      </a>
      <div className="flex flex-col flex-grow">
      <h3 className="text-xs font-medium text-gray-800 mb-2 min-h-[2.5rem]">{title}</h3>
        <div className="flex items-center space-x-2 mb-2">
          {/* Rating */}
          <Rating value={rating.rate} precision={0.1} size="small"/>
          {/* Count */}
          <small className="text-gray-500">({rating.count})</small>
        </div>
        <div className="text-base font-semibold text-gray-900 mb-3">
          {/* Price */}
          <CurrencyFormat amount={price} />
        </div>
        <button className="mt-auto bg-yellow-400 hover:bg-yellow-500 text-black text-xs font-bold py-2 rounded-4xl transition duration-300 cursor-pointer">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;