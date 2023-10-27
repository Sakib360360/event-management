
const getEvents = async () => {
    const res = await fetch("http://localhost:5000/events");
    return res.json();
};

export default getEvents;