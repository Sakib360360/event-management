
const getMessages = async () => {
    const res = await fetch("http://localhost:5000/messages");
    return res.json();
};

export default getMessages;