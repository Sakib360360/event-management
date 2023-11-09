
const getMessages = async () => {
    const res = await fetch("https://server-event-management-iota.vercel.app/messages");
    return res.json();
};

export default getMessages;