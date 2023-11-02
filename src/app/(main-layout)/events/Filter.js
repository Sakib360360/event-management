"use client"
// components/Filter.js
import React, { useState } from 'react';

const Filter = () => {
    const [selectedFilter, setSelectedFilter] = useState('');

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedFilter(selectedValue);
    };
    console.log(selectedFilter)

    return (
        <select
            className="select bg-transparent border-2 border-white rounded-3xl w-full max-w-xs"
            onChange={handleSelectChange}
            value={selectedFilter}
        >
            <option disabled value="">
                Filter by...
            </option>
            <option className='text-black' value="latest">Latest</option>
            <option className='text-black' value="topRated">Top rated</option>
            <option className='text-black' value="mostSold">Most sold</option>
        </select>
    );
};

export default Filter;

