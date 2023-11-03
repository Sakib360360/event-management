import React from 'react';

const PaymentCard = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <div className="text-2xl font-bold mb-2 text-black">Ticket Checkout</div>
          <input
            type="text"
            placeholder="Visa Card Number"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            $99.99
          </span>
        </div>
        <div className="px-6 py-4 flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-300">
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
