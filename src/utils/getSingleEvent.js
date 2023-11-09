
const getSingleEvent = async (id) => {
    const res = await fetch(`https://server-event-management-iota.vercel.app/events/${id}`);
    return res.json();
};

export default getSingleEvent;