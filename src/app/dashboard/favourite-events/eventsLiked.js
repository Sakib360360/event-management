
import getFavorite from '@/utils/getFavorite';
import React from 'react';
import FavouriteEvents from './page';

const eventsLiked = async() => {
    const liked = await getFavorite()
    return (
        <div>
            <FavouriteEvents liked={liked}></FavouriteEvents>
        </div>
    );
};

export default eventsLiked;