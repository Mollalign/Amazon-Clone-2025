import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import DataContext from '../DataProvider/DataContext';
import { Type } from '../../Utility/action.type';


const ProductCard = ({ product, flex, renderDesc, renderAdd }) => {
  const { thumbnail, title, id, rating, price, description } = product;

  const [state, dispatch] = useContext(DataContext);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        thumbnail, title, id, rating, price, description
      }
    });
  };

  return (
    <section>
      <div
        className={`relative bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 
        ${flex 
          ? 'flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-5xl mx-auto p-4 sm:p-6 items-center sm:items-start' 
          : 'flex flex-col w-full max-w-xs sm:max-w-sm p-3 mx-auto'
        }`}
      >
        <Link to={`/products/${id}`} className={`flex justify-center ${flex ? 'sm:flex-shrink-0' : ''}`}>
          <img
            loading="lazy"
            src={thumbnail}
            alt={title}
            className={`object-contain 
              ${flex 
                ? 'w-[120px] sm:w-[160px] md:w-[200px] h-auto' 
                : 'h-36 sm:h-40 mb-3'
              }`}
          />
        </Link>

        <div className={`flex flex-col flex-grow ${flex ? 'sm:ml-4 w-full' : ''}`}>
          <h3
            className={`font-semibold text-gray-800 ${flex ? 'text-base sm:text-lg mb-2 sm:mb-4 mt-3 sm:mt-0' : 'text-sm sm:text-base mb-2 min-h-[2.5rem]'}`}
          >
            {title}
          </h3>

          {renderDesc && (
            <div className='py-1 sm:py-2 mb-3 text-gray-600 max-w-full text-sm sm:text-base line-clamp-3'>
              {description}
            </div>
          )}

          <div className="flex items-center space-x-2 mb-2">
            <Rating value={rating} precision={0.1} size="small" readOnly />
            <small className="text-gray-500">{rating}</small>
          </div>

          <div className="text-sm sm:text-lg font-semibold text-gray-900 mb-4">
            <CurrencyFormat amount={price} />
          </div>

          {renderAdd && (
            <button
              className={`mt-auto bg-yellow-400 hover:bg-yellow-500 text-black text-sm font-semibold py-2 px-4 rounded-full transition duration-300 cursor-pointer
              ${flex ? 'self-start w-[130px]' : 'w-full'}`}
              onClick={addToCart}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductCard;





// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import Rating from '@mui/material/Rating';
// import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
// import DataContext from '../DataProvider/DataContext';
// import { Type } from '../../Utility/action.type';

// const ProductCard = ({ product, flex, renderDesc, renderAdd}) => {
//   const { image, title, id, rating, price, description} = product;

//   const [state, dispatch] = useContext(DataContext);

//   const addToCart = () => {
//     dispatch({
//       type: Type.ADD_TO_BASKET,
//       item: {
//         image, title, id, rating, price, description
//       }
//     })
//   }

//   return (
//     <section className={``}>
//       <div
//       className={`relative bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 
//       ${flex 
//         ? 'flex flex-col lg:flex-row gap-6 mx-auto w-[85%] p-6 sm:p-10 items-center lg:items-start' 
//         : 'flex flex-col w-[165px] md:w-[250px] p-3'
//       }`}
//     >
//       <Link to={`/products/${id}`} className={`flex justify-center ${flex ? 'flex-shrink-0' : ''}`}>
//         <img
//           loading="lazy"
//           src={image}
//           alt={title}
//           className={`object-contain 
//             ${flex 
//               ? 'w-[140px] sm:w-[180px] md:w-[200px] h-auto' 
//               : 'h-36 mb-3'
//             }`}
//         />
//       </Link>

//       <div className={`flex flex-col flex-grow ${flex ? 'w-full mb:ml-3' : ''}`}>
//         <h3
//           className={`font-semibold text-gray-800 ${flex ? 'text-lg sm:text-xl mb-4 mt-4 lg:mt-0' : 'text-xs mb-2 min-h-[2.5rem]'}`}
//         >
//           {title}
//         </h3>

//         {renderDesc && <div className='py-2 mb-3 text-gray-600 max-w-[500px] font-medium'>{description}</div>}

//         <div className="flex items-center space-x-2 mb-2">
//           <Rating value={rating?.rate} precision={0.1} size="small" />
//           <small className="text-gray-500">({rating?.count})</small>
//         </div>

//         <div className="text-base sm:text-lg font-semibold text-gray-900 mb-4">
//           <CurrencyFormat amount={price} />
//         </div>

//         {
//           renderAdd && <button
//           className={`mt-auto bg-yellow-400 hover:bg-yellow-500 text-black text-sm font-semibold py-2 px-4 rounded-full transition duration-300 cursor-pointer
//           ${flex ? 'self-start w-[150px]' : ''}`}

//           onClick={addToCart}
//         >
//           Add to Cart
//         </button>
//         }

//       </div>
//       </div>
//     </section>
//   );
// };

// export default ProductCard;