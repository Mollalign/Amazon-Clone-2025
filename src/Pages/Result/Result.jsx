import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LayOut from '../../Components/LayOut/LayOut';
import ProductCard from '../../Components/Product/ProductCard';
import Loader from '../../Components/Loader/Loader';
import { productUrl } from '../../Api/endPoints';

const Result = () => {
  const { categoryName } = useParams();
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await axios.get(`${productUrl}/products/category/${categoryName}`);
        setResults(res.data.products || []);
      } catch (err) {
        console.error(err);
        setError('Failed to load category products.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategoryProducts();
  }, [categoryName]);

  return (
    <LayOut>
      <section className="bg-gray-100 py-10 px-5 min-h-screen max-w-7xl mx-auto pt-[220px] md:pt-[110px]">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Results</h1>
        <p className="mb-4 text-gray-700">
          Category / <span className="font-bold capitalize">{categoryName.replace(/-/g, ' ')}</span>
        </p>
        <hr className="text-gray-300 mb-6" />

        {isLoading ? (
          <Loader />
        ) : error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : results.length === 0 ? (
          <p className="text-center text-gray-600">No products found in this category.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {results.map((product) => (
              <ProductCard key={product.id} product={product} renderAdd={true} />
            ))}
          </div>
        )}
      </section>
    </LayOut>
  );
};

export default Result;
