
const getSingleUser = async (id) => {
    const res = await fetch(`https://server-event-management-iota.vercel.app/users/${id}`);
    return res.json();
};

export default getSingleUser;