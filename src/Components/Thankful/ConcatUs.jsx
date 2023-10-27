import React from 'react';
export const metadata = {
  title: "Contact us | Event Manegment",
  description: "Next Hero",
};
const ContactUs = () => {
  return (
    <div>
      <div className="mx-auto text-center md:w-4/12 mt-12">
        <p className="text-yellow-600 font-extrabold text-3xl mb-2">
          --- CONTACT US ---
        </p>
        <p className="text-1xl uppercase border-y-4 py-4">
          Nihil officia ut sint molestiae tenetur.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-12 max-w-screen-xl mx-auto gap-2">
          <div className='border-r border-[#0E1B4D] pr-4'>
            <h1 className="text-center text-[#0E1B4D] text-2xl font-bold">ADDRESS</h1>
            <p className="text-center text-[#0E1B4D] text-1xl font-semibold">A108 Adam Street, NY 535022, USA</p>
          </div>
          <div className='border-r border-[#0E1B4D] pr-4'>
            <h1 className="text-center text-[#0E1B4D] text-2xl font-bold">PHONE NUMBER</h1>
            <p className="text-center text-[#0E1B4D] text-1xl font-semibold">+1 5589 55488 55</p>
          </div>
          <div>
            <h1 className="text-center text-[#0E1B4D] text-2xl font-bold">EMAIL</h1>
            <p className="text-center text-[#0E1B4D] text-1xl font-semibold">info@example.com</p>
          </div>
        </div>
      <div className="card w-full shadow-2xl bg-base-100">
        <form className="card-body">
          <div className='flex flex-col gap-4 w-full md:flex-row'>
            <div className="w-full md:w-1/2">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input type="text" placeholder="Your Name" className="input input-bordered" required />
            </div>
            <div className="w-full md:w-1/2">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input type="email" placeholder="Your Email" className="input input-bordered" required />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Subject</span>
            </label>
            <input type="text" placeholder="Subject" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea placeholder="Your Message" className="textarea textarea-bordered" rows="4" required />
          </div>
          <div className="form-control mt-6 items-center w-full">
            <button className="btn  text-white bg-red-600 hover:text-black rounded-full md:w-auto">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
