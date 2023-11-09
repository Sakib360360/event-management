"use client";
import { useState } from "react";
import { useEffect } from "react";
import { useForm} from "react-hook-form";

const page = ({ params }) => {
  const [singleEvents, setSingleEvents] = useState({});
  const { id } = params;
  useEffect(() => {
    fetch(`https://server-event-management-iota.vercel.app/events/${id}`)
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


  const { handleSubmit, control, register, errors } = useForm();

  const onSubmit = (data) => {
    data.eventId = id;
    fetch("http://localhost:5000/order", {
        method: "POST",
        headers: {"content-type" : "application/json"},
        body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then((result) => {
      window.location.replace(result.url)
      console.log(result);
    });
    
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen gap-20">
        <div className="card w-96 bg-base-100 shadow-xl text-black ">
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
        <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <label htmlFor="name" className="label">
          Name
        </label>
        <input
         id="name"
          type="text"
          name="name"
          {...register('name', { required: true })}
          className="input input-bordered input-primary w-full max-w-xs"
          placeholder="John Doe"
        />
      </div>

      <div className="form-control">
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          {...register('email', { required: true})}
          className="input input-bordered input-primary w-full max-w-xs"
          placeholder="john@example.com"
        />
      </div>

      <div className="form-control">
        <label htmlFor="phone" className="label">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          {...register('phone', { required: true,})}
          className="input input-bordered input-primary w-full max-w-xs"
          placeholder="123-456-7890"
        />
      </div>

      <div className="form-control">
        <label htmlFor="quantity" className="label">
          Quantity
        </label>
        <input
          id="quantity"
          type="number"
          name="quantity"
          {...register('quantity', { required: true, min: 1 })}
          className="input input-bordered input-primary w-full max-w-xs"
          placeholder="1"
        />
      </div>

      <div className="form-control">
        <label htmlFor="address" className="label">
          Address
        </label>
        <textarea
          id="address"
          name="address"
          {...register('address', { required: true })}
          className="input input-bordered input-primary input-lg w-full max-w-xs"
          placeholder="123 Main St, City, Country"
          rows="3"
        ></textarea>
      </div>

      <div className="form-control">
        <label htmlFor="currency" className="label">
          Currency
        </label>
        <select
          id="currency"
          name="currency"
          {...register('currency', { required: true })}
          className="select select-primary w-full max-w-xs"
        >
          <option value="BDT">BDT</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary mt-4">
        Pay
      </button>
    </form>
        </div>
      </div>
    </>
  );
};

export default page;
