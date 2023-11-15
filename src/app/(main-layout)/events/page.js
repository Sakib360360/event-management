"use client"
import React, { useEffect, useState } from 'react';
// import getEvents from '@/utils/getEvents';
import Search from './Search';


const Events = () => {
    // const events = await getEvents()
    const [events,setEvents] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        fetch("https://server-event-management-iota.vercel.app/events")
        .then(res=>res.json())
        .then(data=>{
            setEvents(data)
            setLoading(false)
        })
    },[])
    

    return (
        <>
            <div className=' md:gap-44 gap-8 md:mt-14 mt-4'>
                 <Search events={events} loading={loading}></Search>
                
                
                
            </div>

        </>

    );
};

export default Events;