"use client"
import { Controller, useForm } from "react-hook-form";

const ContactUs = () => {
    const { control, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
      console.log(data);
    //  reset();
    };
    return (
        <div className="bg-black text-white min-h-screen p-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 p-6">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <p className="mb-4">
              We would love to hear from you! Please fill out the form below, and we will get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  render={({ field }) => <input {...field} type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Name" />}
                />
              </div>
              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => <input {...field} type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Email" />}
                />
              </div>
              <div className="mb-6">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <Controller
                  name="message"
                  control={control}
                  defaultValue=""
                  render={({ field }) => <textarea {...field} rows="5" className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Message" />}
                />
              </div>
              <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="w-full md:w-1/2 p-6">

            <iframe
              className="w-full h-64 mt-24"
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.1361699658046!2d90.39437557439255!3d23.77816488771164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c769ad5e7f6f%3A0x1d928a50d9cbcc90!2sSKS%20Shopping%20Mall!5e0!3m2!1sen!2sus!4v1698843451708!5m2!1sen!2sus"
              allowFullScreen
            />
            
          </div>
        </div>
      </div>
    </div>
    );
};

export default ContactUs;