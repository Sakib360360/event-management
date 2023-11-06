
const deleteMessage = async (id) => {
    const res = await fetch(`http://localhost:5000/messages/${id}`, {
        method: "DELETE"
    });
    return res.json();
};

export default deleteMessage;