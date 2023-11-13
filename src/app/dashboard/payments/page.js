'use client'
import useAuth from '@/hooks/useAuth';
import React, { useEffect, useState } from 'react';

const PaymentHistory = () => {
  const [paymentHistory, setPaymentHistory] =useState([]); 
  const {user } = useAuth();
   const url =`https://server-event-management-iota.vercel.app/payments/registeredevents?email=${user?.email}`
     useEffect(()=>{
 
         fetch(url)
         .then(res => res.json())
         .then(data => setPaymentHistory(data))
     },[url, user])
     console.log(paymentHistory)
  return (
    <div className='min-h-screen p-20'>
    <div className="flex justify-center">
        <div className="w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Payment History</h1>
        <div className='overflow-x-auto'>
        <table className="table" >
          <thead className='text-white'>
            <tr>
              <th className=" text-lg py-2 px-4 border-b">#</th>
              <th className=" text-lg py-2 px-4 border-b">Name</th>
              <th className=" text-lg py-2 px-4 border-b">Date</th> 
              <th className=" text-lg py-2 px-4 border-b">Price</th>
              <th className=" text-lg py-2 px-4 border-b">Transaction</th>
           
            </tr>
          </thead>
          <tbody>
          
            {paymentHistory?.map((history, index) => (
              <tr key={history._id} className='hover hover:text-black'>
                <td className="py-2 px-4 border-b">{index + 1}</td>
                <td className="py-2 px-4 border-b">{history.event.eventName}</td>
                <td className="py-2 px-4 border-b">{history.event.eventTime}</td>
                <td className="py-2 px-4 border-b">${history.event.ticketPrice}</td>
                <td className="py-2 px-4 border-b">{history.tranjectionId}</td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      </div>
      </div>
  );
};

export default PaymentHistory;
