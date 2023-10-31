"use client"

import React from "react";
import { FaCheck } from "react-icons/fa";

const TicketSelse = () => {
  return (
    <>
      <div className=" mx-auto">
      <div className="mx-auto text-center md:w-4/12 my-8">
            <p className="text-yellow-600 text-3xl font-extrabold mb-2">---   BUY TICKETS ---</p>
            <p className="text-1xl uppercase border-y-4 py-4"> Velit consequatur consequatur <span>inventore</span> iste fugit unde
            omnis eum aut.</p>
        </div>
       
        <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-2">
          <div className="card w-96 border shadow-xl mx-auto">
            <div className="card-body">
              <div>
                <h1 className="text-3xl text-center font-bold text-[#0E1B4D]">
                  STANDARD ACCESS
                </h1>
                <p className="text-2xl text-center mt-4 font-semibold">$150</p>
              </div>{" "}
              <hr />
              <div className="py-4">
                <p className="flex gap-2 py-2 items-center">
                  {" "}
                  <FaCheck /> Regular Seating
                </p>
                <p className="flex gap-2 py-2 items-center">
                  {" "}
                  <FaCheck /> Coffee Break
                </p>
                <p className="flex gap-2 py-2 items-center">
                  {" "}
                  <FaCheck /> Custom Badge
                </p>
                <p className="flex gap-2 py-2 items-center">
                  {" "}
                  <FaCheck /> Community Access
                </p>
                <p className="flex gap-2 py-2 items-center">
                  {" "}
                  <FaCheck /> Workshop Access
                </p>
                <p className="flex gap-2 py-2 items-center">
                  {" "}
                  <FaCheck /> After Party
                </p>
              </div>{" "}
              <hr />
              <div className="card-actions justify-center ">
                <button className="btn text-white bg-red-600 hover:text-black rounded-full ">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="card w-96 border shadow-xl mx-auto">
            <div className="card-body">
              <div>
                <h1 className="text-3xl text-center font-bold text-[#0E1B4D]">
                PRO ACCESS
                </h1>
                <p className="text-2xl text-center mt-4 font-semibold">$250</p>
              </div>{" "}
              <hr />
              <div className="py-4">
                <p className="flex gap-2 py-2 items-center">
                  {" "}
                  <FaCheck /> Regular Seating
                </p>
                <p className="flex gap-2 py-2 items-center">
                  {" "}
                  <FaCheck /> Coffee Break
                </p>
                <p className="flex gap-2 py-2 items-center">
                  {" "}
                  <FaCheck /> Custom Badge
                </p>
                <p className="flex gap-2 py-2 items-center">
                  {" "}
                  <FaCheck /> Community Access
                </p>
                <p className="flex gap-2 py-2 items-center">
                  {" "}
                  <FaCheck /> Workshop Access
                </p>
                <p className="flex gap-2 py-2 items-center">
                  {" "}
                  <FaCheck /> After Party
                </p>
              </div>{" "}
              <hr />
              <div className="card-actions justify-center ">
                <button className="btn text-white bg-red-600 hover:text-black rounded-full ">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="card w-96 border shadow-xl mx-auto">
            <div className="card-body">
              <div>
                <h1 className="text-3xl text-center font-bold text-[#0E1B4D]">
                PREMIUM ACCESS
                </h1>
                <p className="text-2xl text-center mt-4 font-semibold">$350</p>
              </div>{" "}
              <hr />
              <div className="py-4">
                <p className="flex gap-2 py-2 items-center">
                  {" "}
                  <FaCheck /> Regular Seating
                </p>
                <p className="flex gap-2 py-2 items-center">
                  {" "}
                  <FaCheck /> Coffee Break
                </p>
                <p className="flex gap-2 py-2 items-center">
                  {" "}
                  <FaCheck /> Custom Badge
                </p>
                <p className="flex gap-2 py-2 items-center">
                  {" "}
                  <FaCheck /> Community Access
                </p>
                <p className="flex gap-2 py-2 items-center">
                  {" "}
                  <FaCheck /> Workshop Access
                </p>
                <p className="flex gap-2 py-2 items-center">
                  {" "}
                  <FaCheck /> After Party
                </p>
              </div>{" "}
              <hr />
              <div className="card-actions justify-center ">
                <button className="btn text-white bg-red-600 hover:text-black rounded-full ">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default TicketSelse;
