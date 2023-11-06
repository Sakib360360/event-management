
const markAsSeen = async (id) => {
    const res = await fetch(`http://localhost:5000/messages/${id}`, {
        method: "PATCH"
    });
    return res.json();
};

export default markAsSeen;