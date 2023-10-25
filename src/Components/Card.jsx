/* eslint-disable @next/next/no-img-element */
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";
const Card = () => {
  return (
    <>
      <div className="w-56 h-64 shadow-lg mb-16">
        <img
          src="https://i.ibb.co/D9H6fzF/istockphoto-1200677760-612x612.jpg"
          alt="Card Image"
          className="w-full h-full rounded-xl border-gray-900 border-[1.5px]"
        />
        <div className=" py-4">
          <div className="font-bold text-xl mb-1">David Bargmen</div>
          <p className="font-semibold mb-2">Advisory Admin</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-900 h-8">
              <FaFacebook></FaFacebook>
            </a>
            <a href="#" className="text-gray-900 h-8">
              <FaLinkedinIn></FaLinkedinIn>
            </a>
            <a href="#" className="text-gray-900 h-8">
              <FaTwitter></FaTwitter>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
