import Link from 'next/link';
import React from 'react';

const SideBar = () => {
    const isAdmin = false;
    const isOrganizer = false;

    const navItems = <>

        {
            isOrganizer && <>
                <li><Link href={'/#'}>Create Event</Link></li>
                <li><Link href={'/#'}>My Events</Link></li>

            </>
        }
        {
            isAdmin && <>
                <li><Link href={'/#'}>Manage User</Link></li>
                <li><Link href={'/#'}>All Events</Link></li>
            </>
        }
        {
            !isAdmin && !isOrganizer ? <>
                <li><Link href={'/#'}>Enrolled Events</Link></li>
                <li><Link href={'/#'}>Favourite Events</Link></li>
                <li><Link href={'/#'}>Payments</Link></li>

            </> : null
        }



    </>




    return (
        <ul className="menu p-4 w-72 h-full bg-no-repeat bg-cover flex flex-col text-white">
            {/* Sidebar content here */}
            {navItems}
        </ul>
    );
};

export default SideBar;