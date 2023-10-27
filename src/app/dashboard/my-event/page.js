// components/MyEventsDashboard.js
"use client";
import React, { useState } from 'react';

const MyEventsDashboard = () => {
    // Mock data for testing purposes
    const mockEvents = [
        {
            id: 1,
            eventName: 'Event 1',
            eventDate: '2023-11-01',
            eventStatus: 'pending',
            ticketAvailable: 100,
            ticketPrice: 20,
            eventLocation: 'Venue A',
            eventTime: '18:00',
            eventDescription: 'Description of Event 1',
            imageUrl: 'https://media.istockphoto.com/id/499517325/photo/a-man-speaking-at-a-business-conference.jpg?s=612x612&w=0&k=20&c=gWTTDs_Hl6AEGOunoQ2LsjrcTJkknf9G8BGqsywyEtE=',
            eventCategory: 'music',
        },
        {
            id: 2,
            eventName: 'Event 2',
            eventDate: '2023-11-15',
            eventStatus: 'approved',
            ticketAvailable: 50,
            ticketPrice: 30,
            eventLocation: 'Venue B',
            eventTime: '20:00',
            eventDescription: 'Description of Event 2',
            imageUrl: 'https://www.visionvivaah.com/blog/wp-content/uploads/2019/10/Best-Event-Management-Company-In-Mumbai.jpg',
            eventCategory: 'concerts',
        },
        // Add more events as needed
    ];

    // State to store the list of events
    const [events, setEvents] = useState(mockEvents);

    // Function to delete an event by ID
    const handleDeleteEvent = (eventId) => {
        const updatedEvents = events.filter((event) => event.id !== eventId);
        setEvents(updatedEvents);
    };

    // Function to edit an event by ID
    const handleEditEvent = (eventId) => {
        // Implement your logic to navigate to the edit page or open a modal for editing
        console.log(`Editing event with ID ${eventId}`);
    };

    return (
        <div className="max-w-3xl mx-auto mt-8 p-8 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4">My Events Dashboard</h2>

            {/* List of Events */}
            {events.map((event) => (
                <div key={event.id} className="mb-8 p-4 bg-gray-100 rounded-md">
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
                            onClick={() => handleDeleteEvent(event.id)}
                            className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
                        >
                            Delete Event
                        </button>
                        <button
                            onClick={() => handleEditEvent(event.id)}
                            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                        >
                            Edit Event
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MyEventsDashboard;
