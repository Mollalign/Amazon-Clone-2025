import React, { useContext, useState } from 'react';
import LayOut from '../../Components/LayOut/LayOut';
import DataContext from '../../Components/DataProvider/DataContext';
import ProductCard from '../../Components/Product/ProductCard'; 
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { ClipLoader } from 'react-spinners';
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat';
import { axiosInstance } from '../../Api/axios';
import { db } from '../../Utility/firebase';
import { useNavigate } from 'react-router-dom';
import { Type } from '../../Utility/action.type';


const Payment = () => {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();


  const [loading, setLoading] = useState(false);
  const [cardError, setCardError] = useState(null);

  const totalItem = basket?.reduce((acc, item) => acc + item.amount, 0);
  const total = basket.reduce((sum, item) => sum + item.price * item.amount, 0);


  const handleChange = (event) => {
    setCardError(event?.error?.message || null);
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      // 1. backend ---> contact to the client secret
      const response = await axiosInstance({
        method: 'POST',
        url: `/payment/create?total=${total*100}`,
      });

      const clientSecret = response.data?.clientSecret;
      
      // 2. client side (react side confirmation)
      const {paymentIntent} = await stripe.confirmCardPayment(
        clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement)
          }
        }        
      );

      // 3. after the confirmation --> order firestore database save, clear the basket
      await db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
        basket: basket,
        amount: paymentIntent.amount / 100,
        created: paymentIntent.created,
      });

      // empty the basket
      dispatch({
        type: Type.EMPTY_BASKET
      });

      setLoading(false);
      navigate("/orders", {state: {msg: "You have placed new order"}});

    } catch (error) {
      console.error('Payment error:', error);
      setLoading(false);
      setCardError('Payment failed. Please try again.');
    }

  }

  return (
    <LayOut>
      <div className="pt-[230px] md:pt-[125px] px-4 bg-gradient-to-b from-blue-100 via-white to-white min-h-screen">
        {/* Page Header */}
        <div className="text-center text-3xl sm:text-4xl font-bold text-gray-800 mb-12">
          Checkout <span className="text-blue-600">({totalItem} items)</span>
        </div>

        {/* Main Container */}
        <section className="max-w-4xl mx-auto bg-white shadow-lg rounded-3xl p-6 sm:p-10 space-y-12 border border-gray-200 transition-all duration-300">
          {/* Delivery Address */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 border-b pb-2">
              Delivery Address
            </h3>
            <div className="text-gray-600 text-sm leading-relaxed space-y-1">
              <p>{user?.email}</p>
              <p>123 Hawassa University</p>
              <p>Hawassa, Ethiopia</p>
            </div>
          </div>

          {/* Items Review */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 border-b pb-2">
              Review Items
            </h3>
            <div className="space-y-4 max-h-80 overflow-y-auto pr-2 custom-scrollbar">
              {basket?.map((item) => (
                <ProductCard key={item.id} product={item} flex={true} />
              ))}
            </div>
          </div>

          {/* Payment Section */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 border-b pb-2">
              Payment Method
            </h3>
            <form className="space-y-6" onSubmit={handlePayment}>
              {/* Stripe CardElement */}
              <div className="p-4 border border-gray-300 rounded-xl bg-gray-50 shadow-inner hover:shadow-md focus-within:ring-2 ring-blue-400 transition-all duration-300">
                <CardElement
                  className="p-2 text-base"
                  onChange={handleChange}
                  options={{
                    style: {
                      base: {
                        fontSize: '16px',
                        color: '#2d3748',
                        '::placeholder': {
                          color: '#a0aec0',
                        },
                      },
                      invalid: {
                        color: '#e53e3e',
                      },
                    },
                  }}
                />
              </div>

              {cardError && (
                <p className="text-sm text-red-600 font-medium animate-pulse">{cardError}</p>
              )}

              {/* Order Summary */}
              <div className="flex items-center justify-between text-lg font-medium text-gray-700 px-4 py-3 bg-gray-100 rounded-lg shadow-sm">
                <span>Total:</span>
                <span className="text-blue-600">
                  <CurrencyFormat amount={total} />
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full flex items-center justify-center py-3 px-4 rounded-xl text-white text-lg font-semibold transition-all duration-300 ${
                  loading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700'
                }`}
              >
                {loading ? (
                  <>
                    <ClipLoader color="#ffffff" size={20} speedMultiplier={0.75} />
                    <span className="ml-2">Processing...</span>
                  </>
                ) : (
                  'Pay Now'
                )}
              </button>
            </form>
          </div>
        </section>
      </div>
    </LayOut>
  );
};

export default Payment;
