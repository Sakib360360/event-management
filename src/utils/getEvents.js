
const getEvents = async () => {
    const res = await fetch("https://server-event-management-hw2vpz2a7-sakib360360.vercel.app/events");
    return res.json();
};

export default getEvents;