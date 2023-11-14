// pages/event/[id].js
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link"; // Import the Link component

export default function EventDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [eventDetails, setEventDetails] = useState(null);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        if (id) {
          const response = await fetch(
            `https://server-event-management-iota.vercel.app/events/${id}`
          );
          if (response.ok) {
            const eventData = await response.json();
            setEventDetails(eventData);
          } else {
            console.error("Failed to fetch event details");
          }
        }
      } catch (error) {
        console.error("Error fetching event details:", error);
      }
    };

    console.log(id);
    fetchEventDetails();
  }, [id]);

  return (
    <div>
      {eventDetails ? (
        <div>
          <h1>{eventDetails.title}</h1>
          <p>Date: {eventDetails.date}</p>
          <p>Location: {eventDetails.location}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      
    </div>
  );
}
