
const getSingleMessage = async (id) => {
    const res = await fetch(`https://server-event-management-iota.vercel.app/messages/${id}`);
    return res.json();
};

export default getSingleMessage;