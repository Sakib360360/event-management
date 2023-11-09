// // "use client"
// // import AuthContext from "@/context/AuthContext";
// // import { useContext } from "react";
// const user = "saakibabrar@gmail.com"
// // const {user} = useContext(AuthContext)
// const getFavorite = async () => {
//     const res = await fetch(`https://server-event-management-k3cs1bbdd-sakib360360.vercel.app/liked/${user}`);
//     return res.json();
// };

// export default getFavorite;


const getFavorite = async () => {
    const res = await fetch("https://server-event-management-iota.vercel.app/liked/saakibabrar@gmail.com");
    return res.json();
};

export default getFavorite;