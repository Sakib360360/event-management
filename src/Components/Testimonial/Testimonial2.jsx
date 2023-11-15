// Testimonial2.jsx
"use client";

import SliceText from "@/utils/SliceText";
import { useEffect, useState } from "react";
import { AiOutlineHolder } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Testimonial2.css";

const Testimonial2 = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch(
      "https://server-event-management-iota.vercel.app/testimonial?status=testimonial"
    )
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(testimonials);
  // const testimonials = [
  //   {
  //     content:
  //       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //     author: "Sara Lee",
  //     position: "CFO of Acme Co",
  //     image: "https://i.ibb.co/n0GRSQV/a.jpg",
  //   },
  //   {
  //     content:
  //       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //     author: "Sara Lee",
  //     position: "CFO of Acme Co",
  //     image: "https://i.ibb.co/n0GRSQV/a.jpg",
  //   },
  //   {
  //     content:
  //       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //     author: "Sara Lee",
  //     position: "CFO of Acme Co",
  //     image: "https://i.ibb.co/n0GRSQV/a.jpg",
  //   },
  //   {
  //     content:
  //       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //     author: "Sara Lee",
  //     position: "CFO of Acme Co",
  //     image: "https://i.ibb.co/n0GRSQV/a.jpg",
  //   },
  // ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="container mx-auto my-[7em]">
      <h4 className="text-[1.5rem] md:text-[1.5rem] font-bold mb-4">
        WHAT OTHERS SAY
      </h4>
      <h1 className="text-[3rem] md:text-[3rem] font-extrabold mb-20">
        TESTIMONIAL.
      </h1>
      <div className="">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card   border shadow-xl  bg-black p-10   rounded-2xl w-[450px] "
            >
              <div className="">
                <div>
                  <span className="text-5xl font-extrabold">
                    <AiOutlineHolder></AiOutlineHolder>
                  </span>
                </div>
                <div className="card-body h-[10em]">
                  <p className="text-[18px]">
                    {SliceText(testimonial.feedback, 90)}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <div>
                      <h2 className="text-white font-medium text-[16px]">
                        {" "}
                        <span className="text-blue-500"> @ </span>{" "}
                        {testimonial.userName}
                      </h2>
                      {/* <p className="text-blue-700 text-[12px] mt-1">{testimonial.position}</p> */}
                    </div>
                    {/* <div>
                      <img
                        className="w-10 h-10 rounded-full object-cover"
                        src={testimonial.image}
                        alt=""
                      />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial2;
