
const saveMessage = async (body) => {
    const res = await fetch("http://localhost:5000/messages", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    });

    return res.json();
};

export default saveMessage;