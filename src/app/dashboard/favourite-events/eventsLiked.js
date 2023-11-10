import React from 'react';
import FavouriteEvents from './page';
import { useContext } from 'react';
import AuthContext from '@/context/AuthContext';

const eventsLiked = async() => {
    const {user} = useContext(AuthContext)
    console.log(user,"user form ev")
    return (
        <div>
            <FavouriteEvents></FavouriteEvents>
        </div>
    );
};

export default eventsLiked;