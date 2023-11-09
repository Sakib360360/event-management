
const getEvents = async () => {
    const res = await fetch("https://server-event-management-iota.vercel.app/events");
    return res.json();
};

export default getEvents;