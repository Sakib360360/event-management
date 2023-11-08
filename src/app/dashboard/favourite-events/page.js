'use client'  // we cannot async await from 2 client component getFavorite have to be server components
import getEvents from '@/utils/getEvents';
//import getFavorite from '@/utils/getFavorite';
import React from 'react';
import {RiDeleteBin6Line} from 'react-icons/ri'
const FavouriteEvents = async() => {
    const favoriteEvents = await getEvents()  //get favorite will be add later after fix
    console.log(favoriteEvents,"here")
    console.log("jlkhl")
    return (
        <div className="flex justify-center items-center h-screen bg-white text-black">
      <div className="w-3/4">
        <h2 className="text-2xl font-bold mb-4">Favorite Events</h2>
        <div className='overflow-x-auto'>
        <table className="table table-zebra">
          <thead>
            <tr>
              <th className="">Event Name</th>
              <th className="">Ticket Price</th>
              <th className="">Event Date</th>
              <th className="">Action</th>
            </tr>
          </thead>
          <tbody>
          {favoriteEvents.map((event) => (
              <tr key={event.id}>
                <td className="">{event.eventName}</td>
                <td className="">{event.ticketPrice}</td>
                <td className="">{event.eventTime}</td>
                <td className="">
                  <button className="px-2 py-1 bg-red-500 text-white rounded" onClick={() => handleRemoveFavorite(event.id)}> <RiDeleteBin6Line></RiDeleteBin6Line></button>
                </td>
              </tr>
            ))} 
          </tbody>
        </table>
        </div>
      </div>
    </div>
    );
};

export default FavouriteEvents;