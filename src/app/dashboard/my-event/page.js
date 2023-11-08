/* eslint-disable @next/next/no-img-element */
// components/MyEventsDashboard.js
import getEvents from '@/utils/getEvents';
import DeleteButton from '../../../Components/delete-button/DeleteButton';
// import EditButton from '../../../Components/EditButton';
import Link from 'next/link';
const MyEventsDashboard = async () => {
    const events = await getEvents()
    return (
        <div className="max-w-3xl mx-auto  p-8 bg-transparent rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4">My Events Dashboard</h2>

            {/* List of Events */}
            {events.map((event) => (
                <div key={event.id} className="mb-8 p-4 bg-transparent border border-white rounded-md">
                    <img
                        src={event.imageUrl}
                        alt={event.eventName}
                        className="mb-4 w-full h-48 object-cover rounded-md"
                    />
                    <h3 className="text-xl font-semibold mb-2">{event.eventName}</h3>
                    <p className="text-gray-600 mb-2">{event.eventDate}</p>
                    <p className="text-gray-600 mb-2">{event.eventLocation}</p>
                    <p className="text-gray-600 mb-4">{event.eventDescription}</p>
                    <div className="flex justify-between items-center">
                        <DeleteButton></DeleteButton>
                        {/* <EditButton event={event}></EditButton> */}
                        <Link className='btn btn-primary' href={`/dashboard/my-event/${event._id}`}>Edit</Link>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default MyEventsDashboard;
