
const getMessages = async () => {
    const res = await fetch("https://server-event-management-lyml1m723-sakib360360.vercel.app/messages");
    return res.json();
};

export default getMessages;