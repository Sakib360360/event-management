
const getSingleUser = async (id) => {
    const res = await fetch(`http://localhost:5000/users/${id}`);
    return res.json();
};

export default getSingleUser;