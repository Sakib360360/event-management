
const saveUser = async (body) => {
    const res = await fetch("https://localhost:5000/users", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    return res.json();
};


export default saveUser;