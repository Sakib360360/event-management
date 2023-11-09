
const updateEvent = async (body,id) => {
    const res = await fetch(`https://server-event-management-iota.vercel.app/events/${id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    
    return res.json();
};

export default updateEvent;