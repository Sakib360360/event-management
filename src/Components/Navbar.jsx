"use client";

import { useContext, useState } from "react";

import AuthContext from "@/context/AuthContext";
import Link from "next/link";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const links = (
    <>
      <li>
        <Link href={"/home"}>Home</Link>
      </li>
      <li>
        <Link href={"/contact-us"}>Contact Us</Link>
      </li>
      <li>
        <Link href={"/events"}>Events</Link>
      </li>
    </>
  );
  return (
    <nav>
      <div className="logo">
        <h1>Eveniu</h1>
      </div>

      <ul className="links">{links}</ul>

      <div className="logs"></div>
    </nav>
  );
}

export default Navbar;
