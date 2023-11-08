"use client";
import { useState } from "react";
import { useEffect } from "react";

const page = ({ params }) => {
  const [singleEvents, setSingleEvents] = useState({});
  const { id } = params;
  useEffect(() => {
    fetch(`http://localhost:5000/events/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleEvents(data));
  }, []);
  console.log(singleEvents);
  const {
    eventDate,
    eventDescription,
    eventLocation,
    eventName,
    imageUrl,
    ticketPrice,
  } = singleEvents;

  return (
    <>
      <div className="flex justify-center items-center h-screen gap-20">
        <div className="card w-96 bg-base-100 shadow-xl text-black">
          <figure>
            <img src={imageUrl} alt={eventName} />
          </figure>
          <div className="card-body text-black">
            <h2 className="card-title">{eventName}</h2>
            <p>{eventDescription}</p>
            <p>{eventLocation}</p>
            <p>{eventDate}</p>
            <p>{ticketPrice}</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl mt-4 p-5 text-black justify-center">
          <h2 className="text-2xl mb-4">Checkout</h2>
          <div className="form-control">
            <label htmlFor="name" className="label">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="input input-bordered input-primary w-full max-w-xs"
              placeholder="John Doe"
            />
          </div>
          <div className="form-control">
            <label htmlFor="quantity" className="label">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              className="input input-bordered input-primary w-full max-w-xs"
              placeholder="1"
            />
          </div>
          <div className="form-control">
            <label htmlFor="address" className="label">
              Address
            </label>
            <input
              id="address"
              className="input input-bordered input-primary input-lg w-full max-w-xs"
              placeholder="123 Main St, City, Country"
              rows="3"
            ></input>
          </div>
          <div className="form-control">
            <label htmlFor="currency" className="label">
              Currency
            </label>
            <select
              id="currency"
              className="select select-primary w-full max-w-xs"
            >
              <option value="BDT">BDT</option>
              <option value="USD">USD</option>

              <option value="EUR">EUR</option>
            </select>
          </div>
          <button className="btn btn-primary mt-4">Pay</button>
        </div>
      </div>
    </>
  );
};

export default page;
