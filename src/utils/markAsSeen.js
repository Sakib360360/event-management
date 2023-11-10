
const markAsSeen = async (id) => {
    const res = await fetch(`https://server-event-management-iota.vercel.app/messages/${id}`, {
        method: "PATCH"
    });
    return res.json();
};

export default markAsSeen;