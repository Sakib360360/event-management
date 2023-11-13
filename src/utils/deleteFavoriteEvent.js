
const deleteFavoriteEvent = async (userId,eventId) => {
    const res = await fetch(`http://localhost:5000/deleteFavEvent/${userId}/${eventId}`, {
        method: "DELETE"
    });
    return res.json();
};

export default deleteFavoriteEvent;