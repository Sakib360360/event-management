
const saveEvent = async (body) => {
    const res = await fetch("http://localhost:5000/events", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    return res.json();
};

export default saveEvent;