"use client"
import AuthContext from '@/context/AuthContext';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { MdFavorite, MdPayments } from 'react-icons/md';
import { TiPointOfInterestOutline } from 'react-icons/ti';
import { FaArchive,FaAddressBook,FaChartLine,FaMale,FaEnvelopeOpenText } from "react-icons/fa";

const SideBar = () => {
    const { user } = useContext(AuthContext)
    const [role,setRole] = useState('')
    useEffect(() => {
        fetch(`https://server-event-management-iota.vercel.app/users/role/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setRole(data.role)
        })
    }, [user])
    console.log(role)
    const isAdmin = role==="admin";
    const isOrganizer = role==="organizer";

    const navItems = <>

        {
            isOrganizer && <>
                <li><Link className='flex gap-2 items-center' href={'/dashboard/create-event'}><FaArchive></FaArchive>Create Event</Link></li>
                <li><Link className='flex gap-2 items-center' href={'/dashboard/my-event'}><FaAddressBook></FaAddressBook>My Events</Link></li>
                <li><Link className='flex gap-2 items-center' href={'/dashboard/event-analytics'}><FaChartLine></FaChartLine>Event Analytics</Link></li>

            </>
        }
        {
            isAdmin && <>
                <li><Link className='flex gap-2 items-center text-lg' href={'/dashboard/manage-user'}><FaMale></FaMale>Manage User</Link></li>
                <li><Link className='flex gap-2 items-center text-lg' href={'/dashboard/all-events'}><FaArchive></FaArchive>All Events</Link></li>
                <li><Link className='flex gap-2 items-center text-lg' href={'/dashboard/messages'} prefetch={true}	><FaEnvelopeOpenText></FaEnvelopeOpenText>Messages</Link></li>
            </>
        }
        {
            !isAdmin && !isOrganizer ? <>
                   
                <li className='flex gap-2 items-center text-lg'> <TiPointOfInterestOutline></TiPointOfInterestOutline><Link href={'/dashboard/registered-events'}> Registered </Link></li>
                <li className='flex gap-2 items-center text-lg'><MdFavorite></MdFavorite> <Link href={'/dashboard/favourite-events'}>Favourite </Link></li>
                <li className='flex gap-2 items-center text-lg'><MdPayments></MdPayments><Link href={'/dashboard/payments'}>Payments</Link></li>

            </> : null
        }



    </>




    return (
        <>
            <ul className=" p-4 h-full bg-no-repeat bg-cover flex flex-col text-white gap-4">

                {navItems}
            </ul>
            <div>
                <button className="text-white  absolute bottom-2"><Link href={'/'}>Go to Home</Link></button>
            </div>
        </>
    );
};



export default SideBar;

