import React from 'react';

const DashCard = ({params}) => {
    return (
        <div className='grid lg:grid-cols-5 gap-4'>
            <div className='lg:col-span-2 col-span-1 bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-between w-full border p-4 rounded-lg'>
                <div className='flex flex-col w-full pb-4'>
                    <p className='text-2xl font-bold'>31</p>
                    <p className='text-grey-600'>Total Events</p>
                </div>
                <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                    <span className='text-green-700 text-lg'>+20%</span>
                </p>
            </div>
            <div className='lg:col-span-2 col-span-1 bg-gradient-to-r from-indigo-500 via-purple-400 flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                    <p></p>
                    <p></p>
                </div>
                <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                    <span className='text-green-700 text-lg'>+20%</span>
                </p>
            </div>
        </div>
    );
};

export default DashCard;