'use client'  // we cannot async await from 2 client component getFavorite have to be server components
import { BiMoney } from 'react-icons/bi'
import AuthContext from '@/context/AuthContext';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri'
import Link from 'next/link';
import deleteFavoriteEvent from '@/utils/deleteFavoriteEvent';
import Swal from 'sweetalert2';
const FavouriteEvents = () => {
  const [allEvents, setAllEvents] = useState([])
  const [favorites, setFavorites] = useState([])
  const [loading, setLoading] = useState(true)
  const { user } = useContext(AuthContext)
  const [count, setCount] = useState(0)
  useEffect(() => {
    fetch(`https://server-event-management-iota.vercel.app/events`)
      .then(res => res.json())
      .then(data => {
        setAllEvents(data)
      })
  }, [])
  useEffect(() => {
    console.log(user?.email)
    fetch(`https://server-event-management-iota.vercel.app/liked/${user?.email}`)

      .then(res => res.json())
      .then(data => {
        setFavorites(data)
        setLoading(false)

      })
  }, [user, count])

  const handleRemoveFavorite = async (userId) => {
    console.log(userId)
    const dlt = await deleteFavoriteEvent(user?.email, userId)
    console.log(dlt.success)
    if (dlt.success) {

      setCount(count + 1)
      Swal.fire({
        position: "bottom-end",
        icon: "delete",
        title: "Deleted",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }


  const allFavoriteEvents = allEvents.filter(event => favorites[0]?.likedEvents.includes(event._id))
  console.log(allFavoriteEvents)


 const handleBuyClick = () => {
  console.log('yes')
 }



 


  return (
    <div className="flex justify-center items-center h-screen bg-black text-white">
      <div className="w-3/4">
        <h2 className="text-2xl font-bold mb-4">Favorite Events</h2>
        <div className='overflow-x-auto'>
          <table className="table">
            {
              loading ? <><div className="flex justify-center items-center mx-auto py-8 w-16">
                <span className="loading loading-infinity loading-lg"></span>
              </div></> :
                <thead>
                  <tr>
                    <th className="text-white">Event Name</th>
                    <th className="text-white">Ticket Price</th>
                    <th className="text-white">Event Date</th>
                    <th className="text-white">Delete</th>
                    <th className="text-white">Pay</th>
                  </tr>
                </thead>
            }
            <tbody>
              {
                // loading ? <>
                //   <div className="flex justify-center items-center mx-auto py-8 w-16">
                //     <span className="loading loading-infinity loading-lg"></span>
                //   </div>
                // </> :

                  allFavoriteEvents.map((event) => (
                    <tr key={event._id}>
                      <td className="text-white">{event.eventName}</td>
                      <td className="text-white">{event.ticketPrice}</td>
                      <td className="text-white">{event.eventDate}</td>
                      <td className="text-white">
                        <button className="px-2 py-1 bg-red-500 text-white rounded" onClick={() => handleRemoveFavorite(event._id)}> <RiDeleteBin6Line></RiDeleteBin6Line></button>
                      </td>
                      <td className="">
                        <Link href={`/dashboard/payments/${event._id}`}>
                          <button onClick={() => handleBuyClick(event)} className="px-2 py-1 bg-green-500 text-white rounded">
                            <BiMoney></BiMoney>
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))

              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FavouriteEvents;