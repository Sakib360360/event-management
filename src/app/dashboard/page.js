// pages/dashboard.js
import DashCard from '@/Components/DashCard';
import DashboardChart from '@/Components/DashboardChart';
import getEvents from '@/utils/getEvents';
import React from 'react';

const dashboard = async () => {
  const events = await getEvents();
  const currentDate = new Date().toISOString().split('T')[0];

const upcomingEvents = events.filter((event) => event.date >= currentDate);
  // Fake data for testing purposes
  const totalEvents = 15;
  const totalParticipants = 320;
  // const upcomingEvents = [
  //   { id: 1, name: 'Event 1', date: '2023-11-01', location: 'Venue A' },
  //   { id: 2, name: 'Event 2', date: '2023-11-15', location: 'Venue B' },
  //   // Add more events as needed
  // ];

  return (
    <div className="ml-12 mr-12 mx-auto  mt-8">
      <h1 className="text-3xl font-semibold mb-4">Dashboard</h1>
<DashboardChart></DashboardChart>
      {/* Summary Cards */}
      <div className='flex justify-center'>
      <div className="grid content-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {/* Total Events */}
        {/* <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-lg font-semibold mb-2 text-black">Total Events</h2>
          <p className="text-3xl font-bold text-black">{totalEvents}</p>
        </div> */}
        

        {/* Total Participants */}
        {/* <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-lg font-semibold mb-2">Total Participants</h2>
          <p className="text-3xl font-bold text-black">{totalParticipants}</p>
        </div> */}

        {/* Other Summary Cards */}
        {/* Add more summary cards as needed */}
      </div>
      </div>
      <DashCard totalEvents={totalEvents}></DashCard>
                   {/*  experiment  */}
                   <div className="bg-gray-900 text-white p-4 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event._id} className="mb-4">
            <div className="bg-gray-700 p-4 rounded-md shadow-md">
              <h3 className="text-lg font-semibold mb-2">{event.eventName}</h3>
              <p className="text-sm text-gray-400">{event.eventDate}</p>
              <p className="mt-2">{event.eventDescription}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
      {/* Upcoming Events */}
      <div className="bg-gray-900 text-white p-4 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id} className="mb-4">
            <div className="bg-gray-700 p-4 rounded-md shadow-md">
              <h3 className="text-lg font-semibold mb-2">{event.name}</h3>
              <p className="text-sm text-gray-400">{event.date}</p>
              <p className="mt-2">{event.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default dashboard;
