
const deleteEvent = async (id) => {
    const res = await fetch(`https://server-event-management-lyml1m723-sakib360360.vercel.app/events/${id}`, {
        method: "DELETE"
    });
    return res.json();
};

export default deleteEvent;