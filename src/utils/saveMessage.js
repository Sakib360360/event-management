
const saveMessage = async (body) => {
    const res = await fetch("https://server-event-management-lyml1m723-sakib360360.vercel.app/messages", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    });

    return res.json();
};

export default saveMessage;