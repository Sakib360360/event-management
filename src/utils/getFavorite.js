"use client"
import AuthContext from "@/context/AuthContext";
import { useContext } from "react";

const {user} = useContext(AuthContext)
const getFavorite = async () => {
    const res = await fetch(`https://server-event-management-hw2vpz2a7-sakib360360.vercel.app/liked/${user?.email}`);
    return res.json();
};

export default getFavorite;