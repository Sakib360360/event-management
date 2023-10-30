
const getEvents = async () => {
    const res = await fetch("https://server-event-management-f9enhmfs8-sakib360360.vercel.app/events");
    return res.json();
};

export default getEvents;