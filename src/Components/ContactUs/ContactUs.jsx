"use client";

import saveMessage from "@/utils/saveMessage";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import "./ContactUs.css";

const ContactUs = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    const status = "unseen";
    const date = new Date();

    const msg = {
      name,
      email,
      message,
      status,
      date,
    };

    const response = await saveMessage(msg);

    if (response.insertedId) {
      form.reset();
    }
  };

  return (
    <section className="container mx-auto my-[7em]">
      <h1 className="text-4xl md:text-6xl font-bold  mb-12">GET IN TOUCH</h1>
      <div className="flex flex-col justify-center items-center md:justify-around md:items-center md:flex-row">
        <form
          className="min-w-full px-3 md:min-w-[30em]"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="my-12">
            <div>
              <label htmlFor="name">Name</label>
            </div>
            <input className="w-full h-[2em]" type="text" name="name" id="id" />
          </div>

          <div className="my-12">
            <div>
              <label htmlFor="email">Email</label>
            </div>
            <input
              className="w-full h-[2em]"
              type="email"
              name="email"
              id="email"
            />
          </div>

          <div className="w-full my-12">
            <div>
              <label htmlFor="message">Message</label>
            </div>
            <textarea
              className="w-full"
              cols={20}
              rows={2}
              name="message"
              id="message"
            ></textarea>
          </div>

          <div className="my-12">
            <input className="w-full" type="submit" value="Submit" />
          </div>
        </form>

        <div>
          <div className="my-12">
            <p className="mb-2 gray">Phone</p>
            <p>+880125443654343223</p>
          </div>

          <div className="my-12">
            <p className="mb-2 gray">Email</p>
            <p>lunarbrigade@email.com</p>
          </div>

          <div className="my-12">
            <p className="mb-2 gray">Address</p>
            <p>Dhaka, Bangladesh</p>
          </div>

          <div className="my-12">
            <p className="mb-2 gray">socials</p>
            <div className="flex">
              <FaFacebook className="text-2xl"></FaFacebook>
              <FaLinkedin className="mx-3 text-2xl"></FaLinkedin>
              <FaGithub className="text-2xl"></FaGithub>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
