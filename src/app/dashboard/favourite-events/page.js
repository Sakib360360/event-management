
import getEvents from '@/utils/getEvents';

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