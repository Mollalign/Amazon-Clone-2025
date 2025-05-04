import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import Loader from '../Loader/Loader';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get('https://dummyjson.com/products');
        setProducts(res.data.products);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch products:', err);
        setError('Failed to load products. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className="bg-gray-100 py-10 px-4 min-h-screen">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Products</h2>

            {error && (
              <p className="text-red-500 text-center mb-4">{error}</p>
            )}

            <div className="flex justify-center">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-8 md:gap-x-12">
                {products.map((singleProduct) => (
                  <ProductCard
                    key={singleProduct.id}
                    product={singleProduct}
                    renderAdd={true}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Product;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import ProductCard from './ProductCard';
// import Loader from '../Loader/Loader';

// const Product = () => {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       setIsLoading(true);
//       try {
//         const res = await axios.get('https://dummyjson.com/products');
//         setProducts(res.data.products);
//         setError(null);
//       } catch (err) {
//         console.error('Failed to fetch products:', err);
//         setError('Failed to load products. Please try again.');
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <section className="bg-gray-100 py-10 px-4 min-h-screen">
//           <div className="max-w-7xl mx-auto">
//             <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Products</h2>

//             {error && (
//               <p className="text-red-500 text-center mb-4">{error}</p>
//             )}

//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-6 sm:gap-x-8 md:gap-x-10">
//               {products.map((singleProduct) => (
//                 <ProductCard
//                   key={singleProduct.id}
//                   product={singleProduct}
//                   renderAdd={true}
//                 />
//               ))}
//             </div>
//           </div>
//         </section>
//       )}
//     </>
//   );
// };

// export default Product;