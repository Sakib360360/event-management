import EventButton from "@/Components/EventButton/EventButton";
import getSingleEvent from "@/utils/getSingleEvent";

const SingleEventPage = async ({ params }) => {
    const data = await getSingleEvent(params.id);

    return (
        <div className="flex flex-col items-center lg:flex-row py-12 px-12 min-h-screen event-container">
            <div className="w-full lg:w-[30em] mb-5 lg:mr-12">
                <img className="w-full" src={data.imageUrl} alt={data.eventName} />
            </div>

            <div>
                <div className="mb-7">
                    <h1 className="text-3xl font-semibold">{data.eventName}</h1>
                    <p className="text-xl mt-1">${data.ticketPrice} USD</p>
                </div>

                <div className="mb-7">
                    <p>Details:</p>
                    <p>Location: {data.eventLocation}</p>
                    <p>Date: {data.eventDate}</p>
                    <p>Time: {data.eventTime}</p>
                    <p>Available Tickets: {data.ticketAvailable}</p>
                    <p>Status: {data.eventStatus}</p>
                </div>

                <div>
                    <p>Description:</p>
                    <p>{data.eventDescription}</p>
                </div>

                <EventButton data={data}></EventButton>
            </div>
        </div>
    );
};

export default SingleEventPage;