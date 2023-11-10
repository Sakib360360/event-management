'use client'
import React from 'react';
import animationData from "/public/Success.json";
import Lottie from 'lottie-react';
const page = () => {
    return (
        <div className="flex flex-col min-h-screen justify-center items-center">
        <Lottie
          animationData={animationData}
          className="flex justify-center items-center w-[580px]" 
          loop={false} 
        />
      </div>
    );
};

export default page;