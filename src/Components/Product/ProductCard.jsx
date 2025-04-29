import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import { DataContext } from '../DataProvider/DataProvider';
import { Type } from '../../Utility/action.type';

const ProductCard = ({ product, flex, renderDesc}) => {
  const { image, title, id, rating, price, description} = product;

  const [state, dispatch] = useContext(DataContext);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        image, title, id, rating, price, description
      }
    })
  }

  return (
    <div
      className={`relative bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 
      ${flex 
        ? 'flex flex-col lg:flex-row gap-6 w-full p-6 sm:p-10 items-center lg:items-start' 
        : 'flex flex-col w-[165px] md:w-[250px] p-3'
      }`}
    >
      <Link to={`/products/${id}`} className={`flex justify-center ${flex ? 'flex-shrink-0' : ''}`}>
        <img
          loading="lazy"
          src={image}
          alt={title}
          className={`object-contain 
            ${flex 
              ? 'w-[140px] sm:w-[180px] md:w-[200px] h-auto' 
              : 'h-36 mb-3'
            }`}
        />
      </Link>

      <div className={`flex flex-col flex-grow ${flex ? 'w-full mb:ml-3' : ''}`}>
        <h3
          className={`font-semibold text-gray-800 ${flex ? 'text-lg sm:text-xl mb-4 mt-4 lg:mt-0' : 'text-xs mb-2 min-h-[2.5rem]'}`}
        >
          {title}
        </h3>

        {renderDesc && <div className='py-2 mb-3 text-gray-600 max-w-[500px] font-medium'>{description}</div>}

        <div className="flex items-center space-x-2 mb-2">
          <Rating value={rating?.rate} precision={0.1} size="small" />
          <small className="text-gray-500">({rating?.count})</small>
        </div>

        <div className="text-base sm:text-lg font-semibold text-gray-900 mb-4">
          <CurrencyFormat amount={price} />
        </div>

        <button
          className={`mt-auto bg-yellow-400 hover:bg-yellow-500 text-black text-sm font-semibold py-2 px-4 rounded-full transition duration-300 cursor-pointer
          ${flex ? 'self-start w-[150px]' : ''}`}

          onClick={addToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
