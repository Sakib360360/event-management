
const deleteFavoriteEvent = async (username,eventId) => {
    const res = await fetch(`https://server-event-management-iota.vercel.app/deleteFavEvent/${username}/${eventId}`, {
        method: "DELETE"
    });
    return res.json();
};

export default deleteFavoriteEvent;