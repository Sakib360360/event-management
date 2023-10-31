"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useEffect } from "react";
import "./StartedSection.css";

/* eslint-disable @next/next/no-img-element */

const StartedSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline({
    defaults: { duration: 0.5, ease: "circ.out", delay: 0 },
  });

  useEffect(() => {
    tl.to(".image", {
      x: 0,
      opacity: 1,
    })
      .to(
        ".text-group",
        {
          y: 0,
          opacity: 1,
        },
        "once"
      )
      .to(
        ".accent",
        {
          y: 0,
          duration: 1.5,
        },
        "once"
      );

    ScrollTrigger.create({
      animation: tl,
      trigger: ".started-container",
      toggleActions: "play pause resume reverse",
      markers: false,
      start: "top 60%",
    });
  }, []);

  return (
    <section className="my-[10em]">
      <div className="container mx-auto flex flex-col-reverse items-center px-2 overflow-hidden started-container lg:justify-around lg:items-center lg:flex-row">
        <div className="content">
          <div className="overflow-hidden mt-9">
            <p className="accent translate-y-[-100%]">An incredible force</p>
          </div>

          <div className="text-group translate-y-[40%] opacity-0">
            <h1 className="text-5xl font-bold py-5">
              Music is the
              <br /> Grater Uniter
            </h1>
            <p className="max-w-[35em] started-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reiciendis labore qui quos. Quis necessitatibus natus iste nisi
              cum eius aliquam sit itaque blanditiis architecto provident,
              eveniet libero dolor dicta vitae.
            </p>
          </div>
        </div>

        <div className="image translate-x-[70%] opacity-0">
          <div className="image-wrapper">
            <Image
              className="img"
              src="/images/event.jpg"
              alt="Background Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartedSection;
