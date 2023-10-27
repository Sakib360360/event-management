"use client"

import AuthContext from '@/context/AuthContext'
import Image from 'next/image'
import { useContext } from 'react'

const Profile = () => {
  const { user } = useContext(AuthContext)
  return (
    <Image
      className='rounded-full border-[3px]'
      src={user && user.photoURL ? user.photoURL : "https://i.ibb.co/c3hFmkK/images-profile.jpg"}
      alt='profile'
      height='40'
      width='40'
    />
  )
}

export default Profile