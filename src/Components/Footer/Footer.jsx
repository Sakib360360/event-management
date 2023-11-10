"use client";

import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const links = (
    <>
      <li className="gray">
        <Link href={"/"}>Home</Link>
      </li>
      <li className="gray">
        <Link href={"/contact-us"}>Contact Us</Link>
      </li>
      <li className="gray">
        <Link href={"/events"}>Events</Link>
      </li>
      <li className="gray">
        <Link href={"/feedback"}>Feedback</Link>
      </li>
    </>
  );

  return (
    <footer className="pt-[1px]">
      <div className="container mx-auto flex flex-col items-center md:justify-around md:flex-row md:items-start md:my-5">
        <div className="logo my-7">
          <Link href={"/"}>
            <h1 className="mx-3 active font-bold text-3xl">EventGuru</h1>
          </Link>
        </div>

        <div className="my-7">
          <p className="text-2xl">Menu</p>
          <ul className="mt-2">{links}</ul>
        </div>
        {/* socials */}
        <div className="legal my-7">
          <p className="text-2xl">Socials</p>
          <ul className="mt-2">
            <li className="gray flex  gap-2 items-center">
              <Link className="text-xl" href={"/"}>
                <FaFacebook></FaFacebook>
              </Link>
              <Link href={"/#"}>Facebook</Link>
            </li>
            <li className="gray flex  gap-2 items-center">
              <Link className="text-xl" href={"/"}>
                <FaTwitter></FaTwitter>
              </Link>
              <Link href={"/#"}>Twitter</Link>
            </li>
            <li className="gray flex gap-2 items-center">
              <Link className="text-xl" href={"/"}>
                <FaLinkedinIn></FaLinkedinIn>
              </Link>
              <Link href={"/#"}>LinkedIn</Link>
            </li>
          </ul>
        </div>


        <div className="legal my-7">
          <p className="text-2xl">Legal</p>
          <ul className="mt-2">
            <li className="gray">
              <Link href={"/legal?id=terms-of-use"}>Terms of use</Link>
            </li>
            <li className="gray">
              <Link href={"/legal?id=privacy-policy"}>Privacy Policy</Link>
            </li>
            <li className="gray">
              <Link href={"/legal?id=cookie-policy"}>Cookie Policy</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container  py-2 px-4">
        <p className="my-5 mx-auto text-center">
          Copyright &copy; 2023 - All right reserved by Lunar Brigade
        </p>
      </div>
    </footer>
  );
};

export default Footer;
