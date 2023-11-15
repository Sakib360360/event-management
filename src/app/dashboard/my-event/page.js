"use client"
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'; // Import React and useEffect, useState
import getEvents from '@/utils/getEvents';
import DeleteButton from '../../../Components/delete-button/DeleteButton';
import Link from 'next/link';
import useAuth from '@/hooks/useAuth';
import AuthContext from '@/context/AuthContext';
import Swal from 'sweetalert2';
import deleteEvent from '@/utils/deleteEvent';
const MyEventsDashboard = () => {
    const { user } = useAuth(AuthContext)
    const [events, setEvents] = useState([]); // Use state to manage the events
    const [count,setCount] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            try {
                let eventsData = await getEvents();
                setEvents(eventsData);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchData(); // Call the async function
    }, [count]);

    const handleDelete = async (id) => {
        // console.log(id)
        const dlEv = await deleteEvent(id)
        
        if (dlEv.deletedCount > 0) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Deleted successfully",
                showConfirmButton: false,
                timer: 1500
            });
            setCount(count+1)
        } else {
            Swal.fire({
                icon: "error",
                title: "Couldn't delete",
                text: "Something went wrong!",
                footer: ''
            });
        }
    }
    // console.log(events,user)
    const myEvents = events.filter(event => event?.eventCreator === user?.email)
    console.log(myEvents)
    return (
        <div className="max-w-3xl mx-auto min-h-screen p-8 bg-black rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4">My Events Dashboard</h2>

            {/* List of Events */}
            {
                myEvents.length > 0 ? <>{myEvents?.map((event) => (
                    <div key={event._id} className="mb-8 p-4 bg-transparent border border-white rounded-md">
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
                                className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600" onClick={() => handleDelete(event._id)}
                            >
                                Delete Event
                            </button>
                            {/* <EditButton event={event}></EditButton> */}
                            <Link className='btn btn-primary' href={`/dashboard/my-event/${event._id}`}>Edit</Link>
                        </div>

                    </div>
                ))}</> : <>
                    <div>
                        <h1 className=''>You didn't have any event yet. Please create an event...</h1>
                    </div>
                </>
            }
        </div>
    );
};

export default MyEventsDashboard;
