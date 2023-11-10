
import getFavorite from '@/utils/getFavorite';
import React from 'react';
import FavouriteEvents from './page';
import useAuth from '@/hooks/useAuth';
import AuthContext from '@/context/AuthContext';

const eventsLiked = async() => {
    const {user} = useAuth(AuthContext)
    const liked = await getFavorite(user?.email)
    console.log(liked)
    return (
        <div>
            <FavouriteEvents liked={liked}></FavouriteEvents>
        </div>
    );
};

export default eventsLiked;