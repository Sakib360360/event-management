import React from 'react';
import Link from 'next/link';
import './ErrorPage.css';

const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="error-content">
        <Link href="/">
          <div>
            <img className="error-img" src="https://i.ibb.co/7QPSjv8/err.jpg" alt="Error" />
            <button className='HomeBtn p-4  font-bold'>Go to Home Page</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
