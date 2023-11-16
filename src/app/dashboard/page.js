"use client"
import DashCard from '@/Components/DashCard';
import DashTable from '@/Components/DashTable';
import DashboardChart from '@/Components/DashboardChart';
import PieChartComp from '@/Components/PieChart';
import eventData from 'src/data/eventData.json';
import "./scroll.css";
import { useState } from 'react';
import { useEffect } from 'react';





const dashboard = () => {

  const [totalInterested,setTotalInterested] = useState(0)
  const [totalLiked,setTotalLiked] = useState([])
  const [totalPayments,setTotalPayments] = useState([])
  const [totalUsers,setTotalUsers] = useState(0)
  const [totalEvents,setTotalEvents] = useState(0)
  const [totalTicketSold,setTotalTicketSold] = useState(0)
  const [paymentSuccess,setPaymentSuccess] = useState()
  const [paymentUnsuccess,setPaymentUnsuccess] = useState()
  const totalData = {
    totalEvents,
    totalTicketSold,
    totalInterested,
    totalUsers,
    totalRevenue: 5000,
    totalExpense: 2000,
    totalMale: 150,
    totalFemale: 150,
  };

  // total users

  useEffect(()=>{
    fetch(`https://server-event-management-iota.vercel.app/users`)
    .then(res=>res.json())
    .then(data=>{
      setTotalUsers(data?.items?.length || 0)
    })
  },[])
  // console.log(getTotalUsers)

  // get number of events
  useEffect(()=>{
    fetch(`https://server-event-management-iota.vercel.app/events`)
    .then(res=>res.json())
    .then(data=>{
      setTotalEvents(data?.length || 0)
    })
  },[])


  // total sold ticket
  
  useEffect(()=>{
    fetch(`https://server-event-management-iota.vercel.app/payments/registeredevents`)
    .then(res=>res.json())
    .then(data=>{
      setTotalPayments(data)
    })
  },[])
  // console.log(totalPayments)
  useEffect(() => {
    const countSoldTickets = totalPayments.reduce((count, item) => {
      return item.paidStatus ? count + 1 : count;
    }, 0);

    setTotalTicketSold(countSoldTickets);
  }, [totalPayments]);

  

// liked events

  useEffect(()=>{
    fetch(`https://server-event-management-iota.vercel.app/allLiked`)
    .then(res=>res.json())
    .then(data=>{
      setTotalLiked(data)
    })
  },[])
  // console.log(totalLiked)
  useEffect(() => {
    let totalLikedCount = 0;

    totalLiked.forEach((item) => {
      if (item.likedEvents) {
        if (Array.isArray(item.likedEvents)) {
          totalLikedCount += item.likedEvents.length;
        } else {
          // Assuming a string value is a single ID
          totalLikedCount += 1;
        }
      }
    });

    setTotalInterested(totalLikedCount);
  }, [totalLiked]);

// payment status
  useEffect(()=>{
    fetch(`https://server-event-management-git-sadia-binta-sakib360360.vercel.app/getPaidStatusCount`)
    .then(res=>res.json())
    .then(data=>{
      setPaymentSuccess((prevPaymentSuccess) => data.trueCount);
setPaymentUnsuccess((prevPaymentUnsuccess) => data.falseCount);
      console.log(paymentSuccess,paymentUnsuccess)
    })
  },[paymentSuccess,paymentUnsuccess])

  const sortedEventData = eventData.sort((a, b) => b.ticketSold - a.ticketSold);
  const topEvents = sortedEventData.slice(0, 5);
  return (
    <div className="container dashboard-bg my-4">
        
      <div className='mx-2'>
      <DashCard totalData={totalData}></DashCard>
      </div>

        <div className="mx-4 flex flex-col md:flex-row gap-5 mt-4">
          <div className='rounded w-full md:w-1/2 bg-zinc-900' style={{backgroundColor:'rgb(42, 45, 62)',}}>
            <DashboardChart></DashboardChart>
          </div>
          <div className="mx-auto rounded w-full md:w-1/2 bg-zinc-900" style={{backgroundColor:'rgb(42, 45, 62)',}} >
            <PieChartComp status={{paymentSuccess,paymentUnsuccess}}></PieChartComp>
          </div>
        </div>
        <div className="mx-4 rounded mt-4 bg-zinc-900" style={{backgroundColor:'rgb(42, 45, 62)',}}>
        <DashTable topEvents={topEvents}></DashTable>
        </div>
      {/* </div> */}

    </div>
  );
};

export default dashboard;