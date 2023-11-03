"use client";

import AuthContext from "@/context/AuthContext";
import Link from "next/link";
import { useContext } from "react";
import "./UserPage.css";

const UserPage = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <>
      <div className="userPage  min-h-screen ">
        <div className="hero-content flex-col lg:flex-row gap-32">
          <div className="mt-20">
            <div>
              <img
                src={user.photoURL}
                className="max-w-sm rounded-lg shadow-2xl"
              />
            </div>
<<<<<<< HEAD
=======

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
>>>>>>> b95c315b7ceafb354304fe970795e508d47ec7a2
          </div>
          <div>
            <h1 className="text-5xl font-semibold mt-10 ">User Information</h1>
            <div>
              <h1 className="py-4">
                <span className="text-2xl font-semibold">Name : </span>{" "}
                {user.displayName}
              </h1>
              <p className="py-4">
                <span className="text-2xl font-semibold">Email : </span>{" "}
                {user.email}
              </p>
            </div>
            <div>
              <Link href="/">
<<<<<<< HEAD
                <button
                  className="btn btn-primary mt-8 bg-gradient-to-r from-blue-400 hover:to-blue-400 via-purple-500 to-pink-500 hover:from-pink-500 py-2 px-3 rounded-full"
                  onClick={logOut}
                >
                  Log Out
                </button>
=======
                  <button className="btn btn-primary mt-8 bg-gradient-to-r from-blue-400 hover:to-blue-400 via-purple-500 to-pink-500 hover:from-pink-500 py-2 px-5 rounded-full">
                    Go to Home Page
                  </button>
>>>>>>> b95c315b7ceafb354304fe970795e508d47ec7a2
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPage;
