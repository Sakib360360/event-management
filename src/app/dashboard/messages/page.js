"use client"

import SliceText from "@/utils/SliceText";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { MdDeleteSweep } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";

const MessagesPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const refetch = (url) => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetch("https://server-event-management-iota.vercel.app/messages")
            .then(res => res.json())
            .then(data => {
                setData(data)
                setLoading(false)
            })
            .catch(err => console.log(err));
    }, []);

    const handleSeen = (id) => {
        fetch(`https://server-event-management-iota.vercel.app/messages/${id}`, {
            method: "PATCH"
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    refetch("https://server-event-management-iota.vercel.app/messages");
                }
            });
    };

    const handleDelete = (id) => {
        fetch(`https://server-event-management-iota.vercel.app/messages/${id}`, {
            method: "DELETE"
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    refetch("https://server-event-management-iota.vercel.app/messages");
                }
            });
    };

    return (
        <div className="py-1 min-h-screen message-wrapper dashboard-bg dashboard-color">
            <div className="overflow-x-auto mt-12 mx-2 rounded-2xl">
                <table className="table dashboard-tile">
                    <thead>
                        <tr className="text-white">
                            <th>Name</th>
                            <th>Message</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((dt => <tr key={dt._id}>
                            <td className={dt.status === "unseen" ? "font-bold" : "font-normal"}>
                                {dt.name}
                            </td>
                            <td className={dt.status === "unseen" ? "font-bold" : "font-normal"}>
                                {SliceText(dt.message, 50)}
                            </td>
                            <td>
                                <button
                                    className="btn btn-xs px-[0.3rem] min-h-[2.2rem] h-0"
                                    title="Mark as seen"
                                    onClick={() => handleSeen(dt._id)}
                                >
                                    <IoCheckmarkDoneCircle className="text-2xl"></IoCheckmarkDoneCircle>
                                </button>

                                <button
                                    className="btn btn-xs px-[0.3rem] min-h-[2.2rem] h-0 mx-2"
                                    title="Delete"
                                    onClick={() => handleDelete(dt._id)}
                                >
                                    <MdDeleteSweep className="text-2xl"></MdDeleteSweep>
                                </button>

                                <Link
                                    href={`/dashboard/messages/${dt._id}`}
                                    className="btn btn-xs px-[0.3rem] min-h-[2.2rem] h-0"
                                    title="View"
                                >
                                    <TbListDetails className="text-2xl"></TbListDetails>
                                </Link>
                            </td>
                        </tr>))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MessagesPage;