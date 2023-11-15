"use client"
import ContactUs from "@/Components/ContactUs/ContactUs";
import { Box, Grid, Typography } from "@mui/material";
import saveMessage from "@/utils/saveMessage";
import Head from "next/head";

const ContactUsPage = () => {
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
    <>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url("/images/map1.png");
          background-size: cover;
          background-position: center;
        }`}</style>
      <Grid container spacing={2} sx={{}}>
        <Grid item xs={12} md={6} >
        <div className="my-40 mx-6">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.475698141314!2d90.40616554219206!3d23.730410251008188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9f49f34ac39%3A0x979f1d19afa9ca09!2sSK%20Tower!5e0!3m2!1sen!2sus!4v1699972993306!5m2!1sen!2sus"
         width="100%" 
         height="450" 
         style={{ background: 'transparent',marginTop: '20px'}} 
         allowFullScreen="" 
         loading="lazy" 
         referrerPolicy="no-referrer-when-downgrade">
         </iframe>
        </div>
        </Grid>
        <Grid item xs={12} sm={6}>
        <div className="my-32 mx-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">GET IN TOUCH</h1>
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
      {/* <ContactUs></ContactUs> */}
    </div>
        </Grid>
      </Grid>
    </>
    // <div>
    //   
    // </div>
  );
};

export default ContactUsPage;