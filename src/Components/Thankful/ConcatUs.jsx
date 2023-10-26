import React from 'react';

const ContactUs = () => {
  return (
    <div>
      <div className="mx-auto text-center md:w-4/12 my-8">
        <p className="text-yellow-600 font-extrabold text-3xl mb-2">
          --- CONTACT US ---
        </p>
        <p className="text-1xl uppercase border-y-4 py-4">
          Nihil officia ut sint molestiae tenetur.
        </p>
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
