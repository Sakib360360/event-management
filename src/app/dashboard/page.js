
import DashCard from '@/Components/DashCard';
import DashboardChart from '@/Components/DashboardChart';
import getEvents from '@/utils/getEvents';
import "./scroll.css";
import PieChartComp from '@/Components/PieChart';
import DashTable from '@/Components/DashTable';
import eventData from 'src/data/eventData.json';



const dashboard = async () => {
  const totalData = {
    totalEvents: 10,
    totalTicketSold: 500,
    totalInterested: 1000,
    totalUsers: 300,
    totalRevenue: 5000,
    totalExpense: 2000,
    totalMale: 150,
    totalFemale: 150,
  };

  const sortedEventData = eventData.sort((a, b) => b.ticketSold - a.ticketSold);
  const topEvents = sortedEventData.slice(0, 5);
  return (
    <div className="container bg-black">
      <div className='my-4'>
        
      <DashCard totalData={totalData}></DashCard>

        <div className="flex flex-col md:flex-row gap-5 mt-8 mx-2">
          <div className='rounded w-full md:w-1/2 bg-zinc-900'>
            <DashboardChart></DashboardChart>
          </div>
          <div className="container mx-auto rounded pt-4 w-full md:w-1/2 bg-zinc-900">
            <PieChartComp></PieChartComp>
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
        <div className="container rounded pt-4 my-4 mx-2 w-full bg-zinc-900">
        <DashTable topEvents={topEvents}></DashTable>
        </div>
      </div>

    </div>
  );
};

export default dashboard;
