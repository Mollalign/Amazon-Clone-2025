import React, { useContext } from 'react';
import LayOut from '../../Components/LayOut/LayOut';
import DataContext from '../../Components/DataProvider/DataContext';
import ProductCard from '../../Components/Product/ProductCard';
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat';
import { Link } from 'react-router-dom';
import { Type } from '../../Utility/action.type';

const Cart = () => {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => { 
    return (item.price * item.amount) + amount 
  },0);

  const increment = (item) => { 
    dispatch({
      type: Type.ADD_TO_BASKET,
      item
    })
  }

  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id
    })
  }

  return (
    <LayOut>
      <section className="pt-[234px] md:pt-[120px] p-4 flex flex-col lg:flex-row gap-8 mb-5">
        
        {/* Cart Items */}
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800">
            {user ? `Hello, ${user?.email.split("@")[0] || 'Guest'}` : 'Your Shopping Cart'}
          </h3>
          <hr className="mb-4 border-gray-300" />
          <div className="space-y-4">
            {basket?.length === 0 ? (
              <p className="text-gray-500 text-sm">🛒 Oops! No items in your cart</p>
            ) : (
              basket.map((item, i) => (
              <section className="p-4 rounded-xl shadow-md border border-gray-100 bg-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <ProductCard
                  key={i}
                  product={item}
                  renderDesc={true}
                  renderAdd={false}
                  flex={true}
                />

                {/* Quantity Controls */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => decrement(item.id)}
                    className="w-9 h-9 flex items-center justify-center bg-gray-300 hover:bg-gray-200 text-xl font-semibold text-gray-950 rounded-full shadow-sm transition cursor-pointer"
                  >
                    −
                  </button>

                  <span className="min-w-[44px] text-center text-base font-semibold text-orange-600 border border-orange-200 rounded-md px-3 py-[6px] bg-orange-50 shadow-sm">
                   {item.amount}
                  </span>


                  <button
                    onClick={() => increment(item)}
                    className="w-9 h-9 flex items-center justify-center bg-gray-300 hover:bg-gray-200 text-xl font-semibold text-gray-950 rounded-full shadow-sm transition cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </section>

              ))
            )}
          </div>
        </div>

        {/* Subtotal Section */}
        {basket?.length !== 0 && (
          <div className="w-[95%] mx-auto lg:w-1/3 p-5 bg-white border border-gray-200 rounded-xl shadow-sm h-fit">
            <div className="space-y-4">
              <div>
                <p className="text-gray-700 font-medium text-lg">
                  Subtotal ({basket.length} items):
                </p>
                <div className='font-bold text-orange-600'>
                 <CurrencyFormat amount={total} />
                </div>
                
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" className="accent-blue-500" />
                <label>This order contains a gift</label>
              </div>

              <Link to="/payments" className="block">
                <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300 cursor-pointer">
                  Continue to Checkout
                </button>
              </Link>
            </div>
          </div>
        )}
      </section>
    </LayOut>
  );
};

export default Cart;
