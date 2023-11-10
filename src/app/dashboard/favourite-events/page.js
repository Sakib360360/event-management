'use client'  // we cannot async await from 2 client component getFavorite have to be server components

import AuthContext from '@/context/AuthContext';
import getEvents from '@/utils/getEvents';
import getFavorite from '@/utils/getFavorite';
//import getFavorite from '@/utils/getFavorite';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri'
const FavouriteEvents = () => {
  const [allEvents,setAllEvents] = useState([])
  const [favorites,setFavorites] = useState([])
  const { user } = useContext(AuthContext)
  useEffect(()=>{
    fetch(`https://server-event-management-iota.vercel.app/events`)
    .then(res=>res.json())
    .then(data=>{
      setAllEvents(data)
    })
  },[])
  useEffect(()=>{
    console.log(user?.email)
    fetch(`https://server-event-management-iota.vercel.app/liked/${user?.email}`)
    
    .then(res=>res.json())
    .then(data=>{
      setFavorites(data)
      
    })
  },[user])
  // const favoriteEvents = await getEvents()  //get favorite will be add later after fix
  // const getFavoriteEvents =  getFavorite(user?.email)  //get favorite will be add later after fix
  // console.log(favorites[0]?.likedEvents, "liked")
  // console.log(user)
  // console.log(allEvents, "all")
  // filter all the favorite events that is needed to show
  const allFavoriteEvents = allEvents.filter(event=>favorites[0]?.likedEvents.includes(event._id))
  console.log(allFavoriteEvents)
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
              {allFavoriteEvents.map((event) => (
                <tr key={event._id}>
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