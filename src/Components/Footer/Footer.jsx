"use client";

import {
    FaArrowAltCircleRight,
    FaFacebook,
    FaGithub,
    FaGreaterThan,
    FaLinkedinIn,
    FaTwitter,
  } from "react-icons/fa";
  import Link from "next/link";
  
  const Footer = () => {
    return (
      <>
     <div className="mt-12  text-white"> 
      <footer className="footer mx-auto p-10 bg-black">
        <nav>
          <header className="footer-title">TheEvenet</header>
          <div className="">
            <p>
In alias aperiam. Placeat tempore <br /> facere. Officiis voluptate ipsam vel <br /> eveniet est dolor et totam porro. <br /> Perspiciatis ad omnis fugit molestiae <br /> recusandae possimus. Aut consectetur <br /> id quis. In inventore consequatur ad <br />voluptate cupiditate debitis <br /> accusamus repellat cumque.</p>
          </div>
        </nav>
        <nav>
          <header className="footer-title">EventGuru</header>
          <div>
          <div>
            <p>A108 Adam Street</p>
            <p>New York, NY 535022</p>
            <p>United States</p>
            <p>Phone: +1 5589 55488 55</p>
            <p>Email: info@example.com</p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://facebook.com" // Replace with your Facebook URL
              className="flex justify-center items-center mt-4 w-8 h-8 text-gray-700 hover:text-gray-900 rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-black dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://github.com" // Replace with your GitHub URL
              className="flex justify-center items-center mt-4 w-8 h-8 text-gray-700 hover:text-gray-900 rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-black dark.text-gray-400 dark.bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com" // Replace with your LinkedIn URL
              className="flex justify-center items-center mt-4 w-8 h-8 text-gray-700 hover:text-gray-900 rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-black dark.text-gray-400 dark.bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://twitter.com" // Replace with your Twitter URL
              className="flex justify-center items-center mt-4 w-8 h-8 text-gray-700 hover:text-gray-900 rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-black dark.text-gray-400 dark.bg-gray-700 dark:hover-bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark.focus:ring-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
          
          </div>
        </nav>
        <nav>
          <header className="footer-title text-black">Company</header>
          <Link className="flex  gap-1 items-center" href="/about"><span className="text-red-600"><FaGreaterThan/></span>About us</Link>
          {/* <Link className="flex gap-1 items-center" href="/advisors"><span className="text-red-600"><FaGreaterThan/></span> Advisors</Link> */}
          {/* <Link className="flex gap-1 items-center" href="/reviews"><span className="text-red-600"><FaGreaterThan/></span> Reviews</Link> */}
          {/* <Link className="flex gap-1 items-center" href="/partners"><span className="text-red-600"><FaGreaterThan/></span> Partners</Link> */}
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <Link className="flex gap-1 items-center" href="/"><span className="text-red-600"><FaGreaterThan/></span>Terms of use</Link>
          <Link className="flex gap-1 items-center" href="/"><span className="text-red-600"><FaGreaterThan/></span>Privacy policy</Link>
          <Link className="flex gap-1 items-center" href="/"><span className="text-red-600"><FaGreaterThan/></span>Cookie policy</Link>
        </nav>
        <form>
          <header className="footer-title">Newsletter</header>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input rounded-lg w-full pr-16"
              />
              <button className="btn  absolute top-0 right-0 rounded-full">
                <FaArrowAltCircleRight />
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
      <div className="mx-auto  text-center justify-center m bg-black text-white">
    
    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
  
      </div>
      </div>
      </>
    );
  };
  
  export default Footer;
  