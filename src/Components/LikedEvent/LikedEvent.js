// LikedEvent.js

import { useContext } from 'react';
import { FaHeart } from 'react-icons/fa';
import saveFavorite from '@/utils/saveFavorite';
import AuthContext from '@/context/AuthContext';
import { useEffect } from 'react';

const LikedEvent = ({ eventId, isLiked, onLikeToggle,favorites,setFavorites }) => {
  const { user } = useContext(AuthContext);

  const handleLikeClick = () => {
    onLikeToggle(eventId, isLiked);
    saveFavoriteToServer();
  };

  const saveFavoriteToServer = async () => {
    const userLikedEvents = {
      email: user?.email,
      likedEvents: isLiked
        ? favorites.filter((id) => id !== eventId) // Remove event if liked
        : [...favorites, eventId], // Add event if not liked
    };
  
    try {
      const response = await saveFavorite(userLikedEvents);
  
      if (!response.ok) {
        throw new Error('Failed to save liked events on the server');
      }
    } catch (error) {
      console.error('Error saving liked events:', error);
    }
  };

//   get favorites
useEffect(()=>{
    console.log(user?.email)
    fetch(`https://server-event-management-iota.vercel.app/liked/${user?.email}`)
    
    .then(res=>res.json())
    .then(data=>{
      setFavorites(data[0]?.likedEvents)
      
    })
  },[user])
  console.log(favorites)
  return (
    <div
      className={`heart-icon-container text-3xl mt-2 ${favorites?.includes(eventId) ? 'liked' : ''}`}
      onClick={handleLikeClick}
    >
      <FaHeart />
    </div>
  );
};

export default LikedEvent;
