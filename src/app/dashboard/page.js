"use client"
import DashCard from '@/Components/DashCard';
import DashTable from '@/Components/DashTable';
import DashboardChart from '@/Components/DashboardChart';
import PieChartComp from '@/Components/PieChart';
import { useEffect, useState } from 'react';
import eventData from 'src/data/eventData.json';
import "./scroll.css";





const dashboard = () => {

  const [totalInterested,setTotalInterested] = useState(0)
  const [totalLiked,setTotalLiked] = useState([])
  const [totalPayments,setTotalPayments] = useState([])
  const [totalUsers,setTotalUsers] = useState(0)
  const [totalEvents,setTotalEvents] = useState(0)
  const [totalTicketSold,setTotalTicketSold] = useState(0);
  const [paidData, setPaidData] = useState({});

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
  // // console.log(totalPayments)
  // useEffect(() => {
  //   const countSoldTickets = totalPayments.reduce((count, item) => {
  //     return item.paidStatus ? count + 1 : count;
  //   }, 0);

  //   setTotalTicketSold(countSoldTickets);
  // }, [totalPayments]);

// liked events

  useEffect(()=>{
    fetch(`https://server-event-management-iota.vercel.app/allLiked`)
    .then(res=>res.json())
    .then(data=>{
      setTotalLiked(data)
    })
  },[])

  useEffect(()=>{
    fetch("http://localhost:5000/getPaidStatusCount")
    .then(res => res.json())
    .then(data => {
      setPaidData(data);
      setTotalTicketSold(data?.trueCount)
    })
    .catch(err => console.log(err));

  }, [])
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

  const sortedEventData = eventData.sort((a, b) => b.ticketSold - a.ticketSold);
  const topEvents = sortedEventData.slice(0, 5);
  return (
    <div className="container dashboard-bg my-4">
      {/* <div className='my-4'> */}
        
      <div className='mx-2'>
      <DashCard totalData={totalData}></DashCard>
      </div>

        <div className="mx-4 flex flex-col md:flex-row gap-5 mt-4">
          <div className='rounded w-full md:w-1/2 bg-zinc-900' style={{backgroundColor:'rgb(42, 45, 62)',}}>
            <DashboardChart></DashboardChart>
          </div>
          <div className="mx-auto rounded w-full md:w-1/2 bg-zinc-900" style={{backgroundColor:'rgb(42, 45, 62)',}} >
            <PieChartComp paidData={paidData}></PieChartComp>
            {/* <h1 className="font-semisbold text-2xl text-center mt-4">Upcoming Events</h1>

            <div className="overflow-y-auto sm:h-60 scroll-bar">
              <div className="grid grid-cols-1 gap-8">
                {events.map((event, index) => (
                  <div key={index} className=" p-4 rounded-lg shadow-md">
                    <img className='rounded-full w-24 h-24' src={event.imageUrl} />
                    <h2 className="text-xl font-semibold text-white mb-2">{event.eventName}</h2>
                    <p className="text-gray-400">Date: {event.eventDate}</p>
                    <p className="text-gray-400">Location: {event.eventLocation}</p>
                    <a href="#" className="text-blue-500 hover:underline pb-2">Learn More</a>
                    <hr />
                  </div>
                ))}
              </div>
            </div> */}
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