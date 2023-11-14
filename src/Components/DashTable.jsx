import React from 'react';

const DashTable = ({topEvents}) => {
    //const {topEvents}=topEvents;
    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Event Name</th>
        <th>Category</th>
        <th>Ticket Sold</th>
        <th></th>
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
              <div className="font-bold">{event.eventName}</div>
            </div>
          </div>
        </td>
        <td>
        {event.eventCategory}
        </td>
        <td>{event.ticketSold}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>)}
    </tbody> 
  </table>
</div>
    );
};

export default DashTable;