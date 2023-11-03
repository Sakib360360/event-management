"use client"
import AuthContext from "@/context/AuthContext";
import { useContext } from "react";

const {user} = useContext(AuthContext)
const getFavorite = async () => {
    const res = await fetch(`https://server-event-management-k3cs1bbdd-sakib360360.vercel.app/liked/${user?.email}`);
    return res.json();
};

export default getFavorite;