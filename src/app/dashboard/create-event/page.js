// Ensure that you're importing from 'react'
"use client";
import React, { useState } from 'react';

const CreateEventForm = () => {
    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventStatus, setEventStatus] = useState('pending');
    const [ticketAvailable, setTicketAvailable] = useState(0);
    const [ticketPrice, setTicketPrice] = useState(0);
    const [eventLocation, setEventLocation] = useState('');
    const [eventTime, setEventTime] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [eventCategory, setEventCategory] = useState('');

    const handleCategoryChange = (e) => {
        setEventCategory(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Handle form submission, e.g., send data to server or perform other actions
        const createdEvent = {
            eventName,
            eventDate,
            eventStatus,
            ticketAvailable,
            ticketPrice,
            eventLocation,
            eventTime,
            eventDescription,
            imageUrl,
            eventCategory,
        }
        console.log('Form submitted:', {
            createdEvent
        });
    };

    return (
        <form className="max-w-md mx-auto mt-8 p-8 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Create Event</h2>

            {/* Event Name */}
            <div className="mb-4">
                <label htmlFor="eventName" className="block text-sm font-medium text-gray-600">
                    Event Name
                </label>
                <input
                    type="text"
                    id="eventName"
                    className="mt-1 p-2 w-full border rounded-md"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                />
            </div>

            {/* Event Date */}
            <div className="mb-4">
                <label htmlFor="eventDate" className="block text-sm font-medium text-gray-600">
                    Event Date
                </label>
                <input
                    type="date"
                    id="eventDate"
                    className="mt-1 p-2 w-full border rounded-md"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                />
            </div>

            {/* Event Status */}
            <div className="mb-4">
                <label htmlFor="eventStatus" className="block text-sm font-medium text-gray-600">
                    Event Status
                </label>
                <select
                    id="eventStatus"
                    className="mt-1 p-2 w-full border rounded-md"
                    value={eventStatus}
                    onChange={(e) => setEventStatus(e.target.value)}
                >
                    <option value="pending">Pending</option>
                    {/* <option value="approved">Approved</option>
          <option value="cancelled">Cancelled</option> */}
                </select>
            </div>

            {/* Ticket Available */}
            <div className="mb-4">
                <label htmlFor="ticketAvailable" className="block text-sm font-medium text-gray-600">
                    Ticket Available
                </label>
                <input
                    type="number"
                    id="ticketAvailable"
                    className="mt-1 p-2 w-full border rounded-md"
                    value={ticketAvailable}
                    onChange={(e) => setTicketAvailable(e.target.value)}
                />
            </div>

            {/* Ticket Price */}
            <div className="mb-4">
                <label htmlFor="ticketPrice" className="block text-sm font-medium text-gray-600">
                    Ticket Price
                </label>
                <input
                    type="number"
                    id="ticketPrice"
                    className="mt-1 p-2 w-full border rounded-md"
                    value={ticketPrice}
                    onChange={(e) => setTicketPrice(e.target.value)}
                />
            </div>

            {/* Event Location */}
            <div className="mb-4">
                <label htmlFor="eventLocation" className="block text-sm font-medium text-gray-600">
                    Event Location
                </label>
                <input
                    type="text"
                    id="eventLocation"
                    className="mt-1 p-2 w-full border rounded-md"
                    value={eventLocation}
                    onChange={(e) => setEventLocation(e.target.value)}
                />
            </div>

            {/* Event Time */}
            <div className="mb-4">
                <label htmlFor="eventTime" className="block text-sm font-medium text-gray-600">
                    Event Time
                </label>
                <input
                    type="time"
                    id="eventTime"
                    className="mt-1 p-2 w-full border rounded-md"
                    value={eventTime}
                    onChange={(e) => setEventTime(e.target.value)}
                />
            </div>

            {/* Event Description */}
            <div className="mb-4">
                <label htmlFor="eventDescription" className="block text-sm font-medium text-gray-600">
                    Event Description
                </label>
                <textarea
                    id="eventDescription"
                    className="mt-1 p-2 w-full border rounded-md"
                    value={eventDescription}
                    onChange={(e) => setEventDescription(e.target.value)}
                />
            </div>

            {/* Image URL */}
            <div className="mb-4">
                <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-600">
                    Image URL
                </label>
                <input
                    type="text"
                    id="imageUrl"
                    className="mt-1 p-2 w-full border rounded-md"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                />
            </div>

            {/* Event Category */}
            <div className="mb-4">
                <label htmlFor="eventCategory" className="block text-sm font-medium text-gray-600">
                    Event Category
                </label>
                <select
                    id="eventCategory"
                    className="mt-1 p-2 w-full border rounded-md"
                    value={eventCategory}
                    onChange={handleCategoryChange}
                >
                    <option value="">Select a category</option>
                    <option value="music">Music Festival</option>
                    <option value="conferences">Conferences</option>
                    <option value="concerts">Concerts</option>
                    <option value="workshops">Workshops</option>
                </select>
            </div>

            {/* Submit Button */}
            <div className="mt-6">
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                >
                    Create Event
                </button>
            </div>
        </form>
    );
};

export default CreateEventForm;

