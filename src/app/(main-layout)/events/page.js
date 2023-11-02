
import React from 'react';
import getEvents from '@/utils/getEvents';
import { FaHeart } from 'react-icons/fa';
import "./event.module.css"
import Search from './Search';
import Filter from './Filter';


const Events = async () => {
    const events = await getEvents()

    return (
        <>
            <div className='flex justify-center md:gap-44 gap-8 md:mt-14 mt-4'>
                <Search></Search>
                {/* filter */}
                <Filter></Filter>
            </div>



            <div className="max-w-3xl mx-auto mt-8 p-8 bg-transparent rounded-md shadow-md">
                <h2 className="text-2xl font-semibold mb-4"></h2>

                {/* List of Events */}
                {events.map((event) => (
                    <div key={event.id} className="mb-8 p-4 bg-transparent border border-white rounded-md">
                        <img
                            src={event.imageUrl}
                            alt={event.eventName}
                            className="mb-4 w-full h-48 object-cover rounded-md"
                        />
                        <h3 className="text-xl font-semibold mb-2">{event.eventName}</h3>
                        <p className="text-gray-600 mb-2">{event.eventDate}</p>
                        <p className="text-gray-600 mb-2">{event.eventLocation}</p>
                        <p className="text-gray-600 mb-4">{event.eventDescription}</p>
                        <div className="flex justify-between items-center">
                            <button
                                className="bg-[#55c2da] text-white p-2 rounded-md hover:bg-[#55c2da]"
                            >
                                Details
                            </button>
                            <div className='flex'>
                                <button
                                    className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                                >
                                    Buy
                                </button>
                                <FaHeart color="red" className='favoriteIcon cursor-pointer ml-2 mt-1' size={30} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>

    );
};

export default Events;