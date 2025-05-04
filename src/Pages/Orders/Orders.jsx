import React, { useContext, useEffect, useState } from 'react';
import LayOut from '../../Components/LayOut/LayOut';
import { db } from '../../Utility/firebase';
import DataContext from '../../Components/DataProvider/DataContext';
import ProductCard from '../../Components/Product/ProductCard';

const Orders = () => {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          const formattedOrders = snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }));
          setOrders(formattedOrders);
        });
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <LayOut>
      <div className='pt-[225px] md:pt-[110px]'>
        <div className="px-4 md:px-10 bg-gray-50 min-h-screen">
          <section className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Orders</h2>

            {orders?.length > 0 ? (
              <div className="space-y-10">
                {orders.map((eachOrder, i) => (
                  <div
                    key={i}
                    className="bg-white border border-gray-200 shadow-sm rounded-xl p-6 transition hover:shadow-md w-full overflow-hidden"
                  >
                    <div className="mb-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                      <div className="text-sm text-gray-500">Order ID:</div>
                      <div className="text-sm font-medium text-gray-700">{eachOrder.id}</div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {eachOrder?.data?.basket.map((order) => (
                        <div key={order.id} className="w-full h-full">
                          <ProductCard flex={false} product={order} />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-lg text-gray-600">No orders found.</p>
              </div>
            )}
          </section>
        </div>
      </div>
    </LayOut>
  );
};

export default Orders;
