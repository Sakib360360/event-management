
const deleteEvent = async (id) => {
    const res = await fetch(`https://server-event-management-iota.vercel.app/events/${id}`, {
        method: "DELETE"
    });
    return res.json();
};

export default deleteEvent;