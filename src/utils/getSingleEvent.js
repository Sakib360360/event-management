
const getSingleEvent = async (id) => {
    const res = await fetch(`http://localhost:5000/events/${id}`);
    return res.json();
};

export default getSingleEvent;