import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import Loader from '../Loader/Loader';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setIsLoading(false)
      });
  }, []);

  return (
    <> 
      {isLoading? (<Loader/>): (<section className="bg-gray-100 py-10 px-4 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Products</h2>
          
          <div className="flex justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-8 md:gap-x-12">
              {products?.map((singleProduct) => (
                <ProductCard
                  key={singleProduct.id} 
                  product={singleProduct}
                  renderAdd={true}
                />
              ))}
            </div>
          </div>

        </div>
      </section>)}
    </>  
  );
};

export default Product;




/*
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="bg-gray-100 py-10 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Products</h2>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array(8).fill().map((_, i) => (
              <div key={i} className="animate-pulse bg-gray-200 h-64 rounded-lg" />
            ))}
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-8 md:gap-x-12">
              {products?.map((singleProduct) => (
                <ProductCard key={singleProduct.id} product={singleProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Product;

*/