
const getEvents = async () => {
    const res = await fetch("https://server-event-management-k3cs1bbdd-sakib360360.vercel.app/events");
    return res.json();
};

export default getEvents;