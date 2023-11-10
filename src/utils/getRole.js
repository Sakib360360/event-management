
const getRole = async ({user}) => {
    const res = await fetch(`https://server-event-management-iota.vercel.app/users/role/${user?.email}`);
    return res.json();
};

export default getRole;