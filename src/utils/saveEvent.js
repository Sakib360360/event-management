
const saveEvent = async (body) => {
    const res = await fetch("https://server-event-management-iota.vercel.app/events", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    
    return res.json();
};

export default saveEvent;