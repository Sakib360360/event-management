import React from "react";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "./UserPage.css";

const UserPage = () => {
  return (
    <>
      <div className="userPage  min-h-screen ">
        <div className="hero-content flex-col lg:flex-row gap-32">
          <div className="mt-20">
            <div>
              <img
                src="https://i.ibb.co/x2wg0zr/1.jpg"
                className="max-w-sm rounded-lg shadow-2xl"
              />
            </div>

            <div className="social mt-20 gap-8 flex justify-center items-center">
              <Link className="text-xl " href={"/"}>
                <FaFacebook></FaFacebook>
              </Link>
              <Link className="text-xl" href={"/"}>
                <FaTwitter></FaTwitter>
              </Link>
              <Link className="text-xl " href={"/"}>
                <FaLinkedinIn></FaLinkedinIn>
              </Link>
              <Link className="text-xl" href={"/"}>
                <FaGithub></FaGithub>
              </Link>
            </div>
            <div className="mt-10 flex gap-6">
              <button className="btn bg-gradient-to-r from-blue-400 hover:to-blue-400 via-purple-500 to-pink-500 hover:from-pink-500 py-2 px-5 rounded-full ">Message</button>
              <button className="btn bg-gradient-to-r from-blue-400 hover:to-blue-400 via-purple-500 to-pink-500 hover:from-pink-500 py-2 px-5 rounded-full">Contact</button>
            </div>
          </div>
          <div>
            <h1 className="text-5xl font-semibold mt-10 ">User Information</h1>
            <div>
              <h1 className="py-4"><span className="text-2xl font-semibold">Name : </span> Example Name</h1>
              <p className="py-4"><span className="text-2xl font-semibold">Email : </span> example@email.com</p>
              <p className="py-4"><span className="text-2xl font-semibold">Phone :</span> +8801761105578</p>
            </div>
            <div> 
              <Link href="/">
                  <button className="btn btn-primary mt-8 bg-gradient-to-r from-blue-400 hover:to-blue-400 via-purple-500 to-pink-500 hover:from-pink-500 py-2 px-5 rounded-full">
                    Go to Home Page
                  </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPage;
