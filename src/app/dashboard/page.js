// pages/dashboard.js
import React from 'react';

const dashboard = () => {
  // Fake data for testing purposes
  const totalEvents = 15;
  const totalParticipants = 320;
  const upcomingEvents = [
    { id: 1, name: 'Event 1', date: '2023-11-01', location: 'Venue A' },
    { id: 2, name: 'Event 2', date: '2023-11-15', location: 'Venue B' },
    // Add more events as needed
  ];

  return (
    <div className="ml-12 mr-12 mx-auto  mt-8">
      <h1 className="text-3xl font-semibold mb-4">Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Events */}
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-lg font-semibold mb-2">Total Events</h2>
          <p className="text-3xl font-bold">{totalEvents}</p>
        </div>

        {/* Total Participants */}
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-lg font-semibold mb-2">Total Participants</h2>
          <p className="text-3xl font-bold">{totalParticipants}</p>
        </div>

        {/* Other Summary Cards */}
        {/* Add more summary cards as needed */}
      </div>

      {/* Upcoming Events */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>

        <ul>
          {upcomingEvents.map((event) => (
            <li key={event.id} className="mb-4">
              <div className="bg-white p-4 rounded-md shadow-md">
                <h3 className="text-lg font-semibold mb-2">{event.name}</h3>
                <p className="text-gray-600">{event.date}</p>
                <p className="text-gray-600">{event.location}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default dashboard;
