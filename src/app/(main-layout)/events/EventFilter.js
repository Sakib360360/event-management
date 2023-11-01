"use client"
// components/EventFilter.js

import React, { useState } from 'react';

const EventFilter = ({ events, onFilter }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onFilter(searchQuery);
  };

  return (
    <div className='flex justify-center'>
      <div className="relative flex items-center">
        <div className="relative text-white">
          <input
            type="text"
            placeholder="Search event..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-2 border-white rounded-full py-2 px-4 pl-10 focus:outline-none focus:border-blue-500 transition-all duration-300"
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4a8 8 0 100 16 8 8 0 000-16z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4-4"
            />
          </svg>
        </div>
      </div>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default EventFilter;
