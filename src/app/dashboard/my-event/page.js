/* eslint-disable @next/next/no-img-element */
// components/MyEventsDashboard.js
import getEvents from '@/utils/getEvents';

const MyEventsDashboard = async () => {
    // Mock data for testing purposes
    const events = await getEvents()
    return (
        <div className="max-w-3xl mx-auto mt-8 p-8 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4">My Events Dashboard</h2>

            {/* List of Events */}
            {events.map((event) => (
                <div key={event.id} className="mb-8 p-4 bg-gray-100 rounded-md">
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
                        <button
                            className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
                        >
                            Delete Event
                        </button>
                        <button
                            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                        >
                            Edit Event
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MyEventsDashboard;
