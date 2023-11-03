
import React from 'react';
import getEvents from '@/utils/getEvents';
import Search from './Search';


const Events = async () => {
    const events = await getEvents()
    

    return (
        <>
            <div className=' md:gap-44 gap-8 md:mt-14 mt-4'>
                <Search events={events}></Search>
                
            </div>

        </>

    );
};

export default Events;