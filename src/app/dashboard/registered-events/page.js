'use client'

import useAuth from "@/hooks/useAuth";
import { useEffect } from "react";
import { useState } from "react";
import { usePDF } from "react-to-pdf";



const RegisteredEvents = () => {
   const { toPDF, targetRef } = usePDF({filename: 'tickets.pdf'});
    const {user} = useAuth();
    const [registeredEvents, setRegisteredEvents] = useState([]);
    const url =`https://server-event-management-iota.vercel.app/payments/registeredevents?email=${user?.email}`
    useEffect(() => {
      fetch(url)
        .then(res => res.json())
        .then(data => setRegisteredEvents(data));
    }, [user, url]);
 
    return (
        <div className="min-h-screen">
        <div className="p-20">
          <h1 className="text-2xl font-bold mb-5 text-center col-span-full ">
            Registered Events
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {registeredEvents?.map((registered) => (
          <div key={registered._id}  className="bg-white w-96 border rounded-md text-black shadow p-4" ref={targetRef}>
            <img className="object-fit mb-4" src={registered.event.imageUrl} alt="" />
            <h2 className="text-lg font-bold mb-2"> {registered.event.eventName}</h2>
            <p className="text-sm mb-2 font-bold">Location: {registered.event.eventLocation}</p>
            <p className="text-sm font-bold mb-2">Price: ${registered.event.ticketPrice}</p>
            <p className="text-sm font-bold mb-2">Date: {registered.event.eventDate}</p>
            <button className="btn btn-primary" onClick={() => toPDF()}>Download Ticket</button>
          </div>
        ))}
        </div>
        </div>
        </div>

    
    );
};

export default RegisteredEvents;
