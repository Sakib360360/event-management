
const deleteMessage = async (id) => {
    const res = await fetch(`https://server-event-management-iota.vercel.app/messages/${id}`, {
        method: "DELETE"
    });
    return res.json();
};

export default deleteMessage;