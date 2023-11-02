"use client";

import { useContext, useState } from "react";

import AuthContext from "@/context/AuthContext";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const links = (
    <>
      <li className="mx-3">
        <Link href={"/"} className="active">
          Home
        </Link>
      </li>
      <li className="mx-3">
        <Link href={"/contact-us"}>Contact Us</Link>
      </li>
      <li className="mx-3">
        <Link href={"/events"}>Events</Link>
      </li>
      <li className="mx-3">
        <Link href={"/about"}>About</Link>
      </li>
    </>
  );

  const logs = user ? (
    <>
      <Link href={"/profile"} className="mx-3">
        <div className="profile-image">
          <img
            className="profile"
            src="/images/profile.png"
            alt="profile"
            title="name"
          />
        </div>
      </Link>
      <button onClick={logOut} className="mx-3" href={"/signup"}>
        Log out
      </button>
      <Link href={"/dashboard"}>Dashboard</Link>
    </>
  ) : (
    <>
      <li className="mx-3">
        <Link href={"/login"}>Login</Link>
      </li>
      <li className="mx-3">
        <Link href={"/signup"}>Sign up</Link>
      </li>
    </>
  );

  // useEffect(() => {
  //   gsap.to(".navigation", {
  //     y: 0,
  //     duration: 0.5,
  //   });
  // }, []);

  return (
    <div>
      <nav className="navigation container mx-auto flex justify-between items-center py-5 overflow-x-hidden">
        <div className="logo">
          <Link href={"/"}>
            <h1 className="mx-3 active font-bold text-3xl">EventGuru</h1>
          </Link>
        </div>

        <ul className="links flex justify-between items-center">{links}</ul>

        <ul className="logs flex justify-between items-center">{logs}</ul>

        <div className="ham-bar mx-3" onClick={() => setOpen(!open)}>
          {open ? <AiOutlineClose></AiOutlineClose> : <FaBars></FaBars>}
        </div>
      </nav>

      <div
        className={`h-screen mobile-menu ${open ? "mobile-menu-active" : ""}`}
      >
        <ul>
          {links}
          {logs}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
