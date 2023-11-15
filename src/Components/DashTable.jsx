import React from 'react';

const DashTable = ({topEvents}) => {
    //const {topEvents}=topEvents;
    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th className='text-white'>Event Name</th>
        <th className='text-white'>Category</th>
        <th className='text-white'>Ticket Sold</th>
        <th className='text-white'>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {topEvents.map(event=>
        <tr key={event.id}>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={event.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold text-white">{event.eventName}</div>
            </div>
          </div>
        </td>
        <td className='text-white'>
        {event.eventCategory}
        </td>
        <td className='text-white'>{event.ticketSold}</td>
        <th>
          <button className="btn btn-ghost text-white btn-xs">details</button>
        </th>
      </tr>)}
    </tbody> 
  </table>
</div>
    );
};

export default DashTable;