"use client"

import {FiMenu} from "react-icons/fi";
import {AiOutlineClose} from "react-icons/ai";
import Link from 'next/link';
import { useContext, useState } from 'react';

import Profile from "./Profile";
import AuthContext from "@/context/AuthContext";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const { user, logOut } = useContext(AuthContext)
  return (
    <div>
      <nav className="w-full bg-blue-400 fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <h2 className="text-2xl text-orange-900 font-bold ">Event Guru</h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-50 rounded-md outline-none focus:border-orange-00 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <AiOutlineClose className='h-6 w-6' alt="logo" />
                  ) : (
                    <FiMenu
                     
                      alt="logo"
                      className=" h-6 w-6 focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-orange-900  border-orange-900  md:hover:text-orange-600 md:hover:bg-transparent">
                  <Link href="/dashboard" onClick={() => setNavbar(!navbar)}>
                    Dasboard
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-orange-900  border-orange-900  md:hover:text-orange-600 md:hover:bg-transparent">
                  <Link href="/contact-us" onClick={() => setNavbar(!navbar)}>
                 Contact Us
                  </Link>
                </li>
                
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-orange-900  border-orange-900  md:hover:text-orange-600 md:hover:bg-transparent">
                  <Link href="/events" onClick={() => setNavbar(!navbar)}>
                    Events
                  </Link>
                </li>
             
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-orange-900  border-orange-900  md:hover:text-orange-600 md:hover:bg-transparent">
                  <Link href="/about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>

                </li>
                <li className=" hidden md:block className='pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-orange-900  md:hover:text-purple-600 md:hover:bg-transparent cursor-pointer"><Profile></Profile></li>
                {user ? (
              <li
                onClick={logOut}
                className='pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-orange-900 border-orange-900  md:hover:text-orange-600 md:hover:bg-transparent cursor-pointer'
              >
                Logout
              </li>
            ) : (
              <>
              <li className='pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-orange-900  border-orange-900  md:hover:text-orange-600 md:hover:bg-transparent'><Link
                  href='/login'
                  
                >
                  Login
                </Link> </li>
              
              </>
            )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;