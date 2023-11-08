
const markAsSeen = async (id) => {
    const res = await fetch(`https://server-event-management-lyml1m723-sakib360360.vercel.app/messages/${id}`, {
        method: "PATCH"
    });
    return res.json();
};

export default markAsSeen;