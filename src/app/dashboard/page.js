// pages/dashboard.js
import DashCard from '@/Components/DashCard';
import DashboardChart from '@/Components/DashboardChart';
import getEvents from '@/utils/getEvents';
import CalenderComp from '@/Components/CalenderComp';

import React from 'react';


const dashboard = async () => {
  const events = await getEvents();
  const currentDate = new Date().toISOString().split('T')[0];

const upcomingEvents = events.filter((event) => event.date >= currentDate);

  const totalEvents = 15;
  const totalParticipants = 320;


  return (
    <div className="container">
      <div className='my-4'>
      <DashCard totalEvents={totalEvents}></DashCard>
      <DashCard totalParticipants={totalParticipants}></DashCard>

<div className="flex flex-col md:flex-row gap-4">
  <div className='rounded w-full md:w-1/2 bg-stone-800'>
  <DashboardChart></DashboardChart>
  </div>
  <div className="container mx-auto rounded pt-4 w-full md:w-1/2 bg-stone-800">
      <h1 className="font-semisbold text-2xl text-center mt-4">Upcoming Events</h1>

      <div className="overflow-y-auto sm:h-60">
        <div className="grid grid-cols-1 gap-8">
          {events.map((event, index) => (
            <div key={index} className=" p-4 rounded-lg shadow-md">
              <img className='rounded-full w-24 h-24' src={event.imageUrl}/>
              <h2 className="text-xl font-semibold text-white mb-2">{event.eventName}</h2>
              <p className="text-gray-400">Date: {event.eventDate}</p>
              <p className="text-gray-400">Location: {event.eventLocation}</p>
              <a href="#" className="text-blue-500 hover:underline pb-2">Learn More</a>
              <hr/>
            </div>
          ))}
        </div>
      </div>
  </div>
</div>
{/* <CalenderComp></CalenderComp> */}
      </div>
    
    </div>
  );
};

export default dashboard;
