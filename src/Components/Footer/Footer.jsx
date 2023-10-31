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
    </>
  );

  return (
    <footer>
      <div className="container mx-auto flex flex-col items-center md:justify-around md:flex-row md:items-start md:my-5">
        <div className="logo my-3">
          <Link href={"/"}>
            <h1 className="mx-3 active font-bold text-3xl">Eveniu</h1>
          </Link>
        </div>

        <div className="my-3">
          <p className="text-2xl">Menu</p>
          <ul className="mt-2">{links}</ul>
        </div>

        <div className="legal">
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

      <div className="container mx-auto flex flex-col items-center py-5 md:justify-between md:items-center md:flex-row">
        <p className="my-5">
          Copyright &copy; 2023 - All right reserved by Lunar Brigade
        </p>
        <div className="social flex justify-center items-center">
          <Link className="text-xl mx-2" href={"/"}>
            <FaFacebook></FaFacebook>
          </Link>
          <Link className="text-xl mx-2" href={"/"}>
            <FaTwitter></FaTwitter>
          </Link>
          <Link className="text-xl mx-2" href={"/"}>
            <FaLinkedinIn></FaLinkedinIn>
          </Link>
          <Link className="text-xl mx-2" href={"/"}>
            <FaGithub></FaGithub>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
