import { useRouter } from 'next/router';
import React from 'react';

const singleEvent = () => {
  const router = useRouter();
  const { _id } = router.query;
  console.log(_id);
  const getSingleEvent = async () => {
    const res = await fetch(`http://localhost:5000/events/${_id}`);
    const data =await res.json();
};
    return (
      <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">Name</h1>
        <div className="space-x-4">
          <button className="text-blue-500 hover:text-blue-700">
            Share
          </button>
          <button className="text-blue-500 hover:text-blue-700">
            Pay
          </button>
          <button className="text-red-500 hover:text-red-700">
            Favorite
          </button>
        </div>
      </div>
      <div className="mt-4">
        <img src={image} alt={name} className="w-full h-64 object-cover rounded-lg" />
      </div>
      <div className="mt-4">
        <p className="text-gray-400">Date</p>
        <p className="mt-2">Description</p>
      </div>
    </div>
    );
};

export default singleEvent;