"use client"
import React, { useState } from 'react';
// import eventData from './eventData'
import EventStat from '@/Components/EventStat/EventStat';
const AnalyticsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState('event1');
  const event = events[selectedEvent];
  // console.log(eventData);
    return (
<div className="p-4">
      <h1 className="text-2xl mb-4 ">Select an Event</h1>
      <select
        value={selectedEvent}
        onChange={(e) => setSelectedEvent(e.target.value)}
        className="p-2 rounded "
      >
        {Object.keys(events).map((eventId) => (
          <option key={eventId} value={eventId}>
            {eventId}
          </option>
        ))}
      </select>
      <EventStat event={event} /> {/* Pass the selected event data to EventStat */}
    </div>
      //   <div className="container mx-auto p-4">
      //   <h1 className="text-2xl font-bold mb-4">Event Analytics</h1>
      //   {events.map((event) => (
      //     <div key={event.id} className="mb-6 border p-4 rounded-lg shadow-md">
      //       <h2 className="text-lg font-semibold">{event.name}</h2>
      //       <p>Registrations: {event.registrations}</p>
      //       <p>Ticket Sales: {event.ticketSales}</p>
      //       <h3 className="text-md font-semibold mt-4">Attendee Demographics</h3>
      //       <ul>
      //         {event.demographics.map((demo, index) => (
      //           <li key={index}>
      //             Age: {demo.age}, Gender: {demo.gender}
      //           </li>
      //         ))}
      //       </ul>
      //     </div>
      //   ))}
      // </div>
    );
};

export default AnalyticsPage;

const events = {
  "event1": {
    "id": 1,
    "registrations": 120,
    "ticketSales": 80,
    "demographics": {
      "male": 40,
      "female": 80,
      "ageGroups": [
        { "label": "Under 18", "count": 20 },
        { "label": "18-35", "count": 60 },
        { "label": "36-50", "count": 30 },
        { "label": "Over 50", "count": 10 }
      ]
    }
  },
  "event2": {
    "id": 2,
    "registrations": 180,
    "ticketSales": 120,
    "demographics": {
      "male": 70,
      "female": 110,
      "ageGroups": [
        { "label": "Under 18", "count": 40 },
        { "label": "18-35", "count": 90 },
        { "label": "36-50", "count": 40 },
        { "label": "Over 50", "count": 10 }
      ]
    }
  },
  // "event3": {
  //   "id": 3,
  //   "registrations": 90,
  //   "ticketSales": 60,
  //   "demographics": {
  //     "male": 30,
  //     "female": 60,
  //     "ageGroups": [
  //       { "label": "Under 18", "count": 10 },
  //       { "label": "18-35", "count": 40 },
  //       { "label": "36-50", "count": 30 },
  //       { "label": "Over 50", "count": 10 }
  //     ]
  //   }
  // },
  // "event4": {
  //   "id": 4,
  //   "registrations": 150,
  //   "ticketSales": 100,
  //   "demographics": {
  //     "male": 60,
  //     "female": 90,
  //     "ageGroups": [
  //       { "label": "Under 18", "count": 30 },
  //       { "label": "18-35", "count": 50 },
  //       { "label": "36-50", "count": 40 },
  //       { "label": "Over 50", "count": 30 }
  //     ]
  //   }
  // }
};
