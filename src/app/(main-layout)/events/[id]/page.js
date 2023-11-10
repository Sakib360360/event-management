"use client";
import React from "react";
// import { useRouter } from 'next/router';
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { data } from "autoprefixer";
import NextImage from "next/image";
import Image from "next/image";

const singleEvent = ({ params }) => {
  const [eventData, setEventData] = useState();
  const id = params.id;
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await fetch(`http://localhost:5000/events/${id}`);
        const data = await res.json();
        setEventData(data);
        console.log(eventData);
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };

    if (id) {
      fetchEvent();
    }
  }, [id]);

  return (
    <div>
      <div className="relative min-h-screen bg-black bg-opacity-70 over overflow-y-auto">
      {eventData?.imageUrl && (
        <div
          className="fixed top-15 left-0 w-full h-full z-0"
          style={{
            backgroundImage: `url(${eventData.imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "black",
            opacity: 0.3,
          }}
        />
      )}

      <div className="absolute w-full p-8 text-white rounded-lg mb-16 z-10">
        <h1 className="text-3xl font-semibold text-white text-center pb-4">
          {eventData?.eventName}
        </h1>
        <div className="flex flex-col justify-center">
          <div className="flex justify-center">
            {eventData?.imageUrl && (
              <Image
                src={eventData.imageUrl}
                alt="event"
                width={700}
                height={700}
                className="rounded-lg"
              />
            )}
          </div>
        </div>
        <div className="flex justify-around w-1/2 mx-auto py-2 bg-black-500 text-white">
          <div className="">
            <header className="footer-title text-xl">When</header>
            <p className="text-lg">{eventData?.eventDate}</p>
          </div>
          <div className="">
            <header className="footer-title text-xl">Where</header>

            <p className="text-lg">{eventData?.eventLocation}</p>
          </div>
          <div className="">
            <header className="footer-title text-xl">Cost</header>
            <p className="text-lg">
              {eventData?.ticketPrice ? `$${eventData.ticketPrice}` : "Free"}
            </p>
          </div>
        </div>
        <div className="text-white py-4 text-center">
          <p className="text-lg font-semibold">Event Details </p>
          <p>{eventData?.eventDescription}</p>
        </div>
        <div className="text-center">
        <button
                 
                  className="bg-transparent border-white border text-white p-2 mr-4 rounded-md hover:bg-white hover:text-black transition duration-500"
                >
                  Buy
                </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default singleEvent;
