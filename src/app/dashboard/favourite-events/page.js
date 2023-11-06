
import getEvents from '@/utils/getEvents';
import React from 'react';

const FavouriteEvents = async() => {
    const getMyAllEvents = await getEvents()
    console.log(getMyAllEvents,"here")
    console.log("jlkhl")
    return (
        <div>
            evetns are coming
        </div>
    );
};

export default FavouriteEvents;