import EventButton from "@/Components/EventButton/EventButton";
import getSingleEvent from "@/utils/getSingleEvent";
import "./singleEvent.css";

const SingleEventPage = async ({ params }) => {
    const data = await getSingleEvent(params.id);

    return (
        <div className="min-h-screen grid place-content-center dashboard-bg">
            <div className="flex flex-col items-center lg:flex-row dashboard-tile rounded-xl p-3">

                <div className="w-full lg:w-[30em] mb-5 lg:mr-12">
                    <img className="w-full" src={data.imageUrl} alt={data.eventName} />
                </div>

                <div className="card-body">
                    <div>
                        <div className="mb-7">
                            <h1 className="text-3xl font-semibold dashboard-color">{data.eventName}</h1>
                            <p className="text-xl mt-1 font-semibold accent-color">${data.ticketPrice} USD</p>
                        </div>

                        <div className="mb-7">
                            <p className="underline font-semibold accent-color">Details</p>
                            <p className="dashboard-color">Location: {data.eventLocation}</p>
                            <p className="dashboard-color">Date: {data.eventDate}</p>
                            <p className="dashboard-color">Time: {data.eventTime}</p>
                            <p className="dashboard-color">Available Tickets: {data.ticketAvailable}</p>
                            <div><span className="dashboard-color">Status:</span> {data.eventStatus === "approved"
                                ? <div className="badge badge-accent">{data.eventStatus}</div>
                                : data.eventStatus === "pending"
                                    ? <div className="badge badge-primary">{data.eventStatus}</div>
                                    : <div className="badge badge-secondary">{data.eventStatus}</div>}</div>
                        </div>

                        <div>
                            <p className="underline font-semibold accent-color">Description</p>
                            <p className="dashboard-color">{data.eventDescription}</p>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <EventButton data={data}></EventButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleEventPage;