"use client"
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarSection = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
  
    return (
      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 transition duration-300 ease-in-out transform hover:scale-105">
        <div className="bg-yellow-500 p-6 rounded-lg shadow-md">
          <h3 className="text-white text-2xl font-semibold mb-4">Calendar</h3>
          <Calendar
            onChange={(date) => setSelectedDate(date)}
            value={selectedDate}
            tileClassName={({ date }) => {
              // Highlight the current month and selected date
              return date.getMonth() === new Date().getMonth() && date.getDate() === selectedDate.getDate()
                ? 'bg-blue-700 text-white rounded-full'
                : '';
            }}
          />
        </div>
      </div>
    );
  };