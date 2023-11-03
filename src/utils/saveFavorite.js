
const saveFavorite = async (body) => {
    const res = await fetch("https://server-event-management-f9enhmfs8-sakib360360.vercel.app/addToLiked", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    return res.json();
};

export default saveFavorite;