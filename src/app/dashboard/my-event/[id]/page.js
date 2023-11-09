"use client"
import AuthContext from '@/context/AuthContext';
import updateEvent from '@/utils/updateEvent';
// import updateFunction from '@/utils/updateFunction';
// pages/editEvent.js


import React, { useState } from 'react';
import { useContext } from 'react';
import Swal from 'sweetalert2';

const EditEvent = ({ params }) => {
  const {user} = useContext(AuthContext)
  console.log(params.id)
  const [eventName, setEventName] = useState('');
  const eventCreator = user?.email;
  const [eventDate, setEventDate] = useState('');
  const [eventStatus, setEventStatus] = useState('pending');
  const [ticketAvailable, setTicketAvailable] = useState(0);
  const [ticketPrice, setTicketPrice] = useState(0);
  const [eventLocation, setEventLocation] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [eventCategory, setEventCategory] = useState('');

  const resetForm = () => {
    setEventName('');
    setEventDate('');
    setEventStatus('pending');
    setTicketAvailable(0);
    setTicketPrice(0);
    setEventLocation('');
    setEventTime('');
    setEventDescription('');
    setImageUrl('');
    setEventCategory('');
  };

             //*********sadia********/
                
             const handleImageUpload = async (e) => {
              const fileInput = e.target;
              const file = fileInput.files[0];
          
              if (file) {
                  try {
                      const formData = new FormData();
                      formData.append("file", file);
                      formData.append('upload_preset', 'lunar-brigade')
                      console.log(formData);
          
                      const response = await fetch(`https://api.cloudinary.com/v1_1/dmaabideu/image/upload`, {
                          method: "POST",
                          body: formData,
                      });
          
                      const data = await response.json();
                      if (data.secure_url) {
                          console.log(data.secure_url)
                          setImageUrl(data.secure_url);
                      } else {
                          console.error("Error uploading image to Cloudinary");
                      }
      
      
                  } catch (error) {
                      console.error("Error uploading image:", error);
                  }
              }
          };
      
          //**************************/
      
  const handleCategoryChange = (e) => {
    setEventCategory(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();


    // Handle form submission, e.g., send data to server or perform other actions
    const createdEvent = {
      eventName,
      eventCreator,
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
    const upEv = await updateEvent(createdEvent, params.id)
    if (upEv.modifiedCount > 0) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Updated successfully",
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Couldn't update",
        text: "Something went wrong!",
        footer: ''
      });
    }
    console.log(upEv)
    // updateFunction(createdEvent, id)
    console.log(createdEvent);
    resetForm();
  };


  // You can now use the eventId to fetch the event details and display the modal.

  return (
    <div>
      {/* <EditEventForm id={params.id}></EditEventForm>
      <p className="text-white">hello</p>
      Add your modal with the form here */}
      <div className='py-8'>
        <form className="max-w-md mx-auto p-8 py-8 border border-white rounded-md shadow-md">

          <h2 className="text-2xl font-semibold mb-4">Update Event</h2>

          {/* Event Name */}
          <div className="mb-4">
            <label htmlFor="eventName" className="block text-sm font-medium text-white">
              Event Name
            </label>
            <input
              type="text"
              id="eventName"
              required
              className="mt-1 p-2 w-full border bg-transparent text-white rounded-md"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
          </div>
          {/* Event created by */}
          <div className="mb-4">
            <label htmlFor="eventCreator" className="block text-sm font-medium text-white">
              Event Creator
            </label>
            <input
              type="email"
              required
              id="eventCreator"
              className="mt-1 p-2 w-full border bg-transparent text-white rounded-md"
              defaultValue={eventCreator}
              // defaultValue={'user email'} //todo
              
            />
          </div>

          {/* Event Date */}
          <div className="mb-4">
            <label htmlFor="eventDate" className="block text-sm font-medium text-white">
              Event Date
            </label>
            <input
              type="date"
              required
              id="eventDate"
              className="mt-1 p-2 w-full border bg-transparent text-white rounded-md"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
            />
          </div>

          {/* Event Status */}
          <div className="mb-4">
            <label htmlFor="eventStatus" className="block text-sm font-medium text-white">
              Event Status
            </label>
            <select
              id="eventStatus"
              className="mt-1 p-2 w-full border bg-transparent text-white rounded-md"

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
            <label htmlFor="ticketAvailable" className="block text-sm font-medium text-white">
              Ticket Available
            </label>
            <input
              type="number"
              required
              id="ticketAvailable"
              className="mt-1 p-2 w-full border bg-transparent text-white rounded-md"
              value={ticketAvailable}
              onChange={(e) => setTicketAvailable(e.target.value)}
            />
          </div>

          {/* Ticket Price */}
          <div className="mb-4">
            <label htmlFor="ticketPrice" className="block text-sm font-medium text-white">
              Ticket Price
            </label>
            <input
              type="number"
              id="ticketPrice"
              required
              className="mt-1 p-2 w-full border bg-transparent text-white rounded-md"
              value={ticketPrice}
              onChange={(e) => setTicketPrice(e.target.value)}
            />
          </div>

          {/* Event Location */}
          <div className="mb-4">
            <label htmlFor="eventLocation" className="block text-sm font-medium text-white">
              Event Location
            </label>
            <input
              type="text"
              id="eventLocation"
              required
              className="mt-1 p-2 w-full border bg-transparent text-white rounded-md"
              value={eventLocation}
              onChange={(e) => setEventLocation(e.target.value)}
            />
          </div>

          {/* Event Time */}
          <div className="mb-4">
            <label htmlFor="eventTime" className="block text-sm font-medium text-white">
              Event Time
            </label>
            <input
              type="time"
              color="white"

              required
              id="eventTime"
              className="mt-1 p-2 w-full border bg-transparent text-white rounded-md"
              value={eventTime}
              onChange={(e) => setEventTime(e.target.value)}
            />
          </div>

          {/* Event Description */}
          <div className="mb-4">
            <label htmlFor="eventDescription" className="block text-sm font-medium text-white">
              Event Description
            </label>
            <textarea
              id="eventDescription"
              required
              className="mt-1 p-2 w-full border bg-transparent text-white rounded-md"
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
            />
          </div>

          {/* Image URL */}
          <div className="mb-4">
            <label htmlFor="imageUrl" className="block text-sm font-medium text-white">
              Image URL
            </label>
            <input
              type="file"
              id="imageUrl"
              required
              className="mt-1 p-2 w-full border bg-transparent text-white rounded-md"
              //value={imageUrl}
              onChange={handleImageUpload}
            />
          </div>

          {/* Event Category */}
          <div className="mb-4">
            <label htmlFor="eventCategory" className="block text-sm font-medium text-white">
              Event Category
            </label>
            <select
              id="eventCategory"
              required
              className="mt-1 p-2 w-full border bg-black text-white rounded-md"
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
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEvent;
