import Link from 'next/link';
/* import { MdFavorite, MdPayments } from 'react-icons/md';
import { TiPointOfInterestOutline } from 'react-icons/ti'; */


import { MdFavorite, MdPayments } from 'react-icons/md';
import { TiPointOfInterestOutline } from 'react-icons/ti';

 const SideBar = () => {
    const isAdmin = false;
    const isOrganizer = true;

    const navItems = <>

        {
            isOrganizer && <>
                <li><Link href={'/dashboard/create-event'}>Create Event</Link></li>
                <li><Link href={'/dashboard/my-event'}>My Events</Link></li>
                <li><Link href={'/dashboard/event-analytics'}>Event Analytics</Link></li>

            </>
        }
        {
            isAdmin && <>
                <li><Link href={'/dashboard/manage-user'}>Manage User</Link></li>
                <li><Link href={'/dashboard/all-events'}>All Events</Link></li>
                <li><Link href={'/dashboard/messages'}>Messages</Link></li>
            </>
        }
        {
            !isAdmin && !isOrganizer ? <>
                   
                <li className='flex gap-2 items-center text-lg'> <TiPointOfInterestOutline></TiPointOfInterestOutline><Link href={'/dashboard/enrolled-events'}> Registered </Link></li>
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
  
