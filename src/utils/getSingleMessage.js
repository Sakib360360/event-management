
const getSingleMessage = async (id) => {
    const res = await fetch(`http://localhost:5000/messages/${id}`);
    return res.json();
};

export default getSingleMessage;