"use client";

import useTextReveal from "@/hooks/useTextReveal";
import gsap from "gsap";
import { useEffect } from "react";
import Button from "../Button/Button";
import LoopingVideo from "../LoopingVideo/LoopingVideo";
import "./Banner.css";

const Banner = () => {
  useTextReveal(".first-title h1, .second-title h1, .third-title h1");
  const tl = gsap.timeline({ defaults: { duration: 0.5, delay: 0.5 } });

  useEffect(() => {
    gsap.to(".fade-in", {
      y: 0,
      opacity: 1,
      delay: 1,
      duration: 0.5,
      stagger: 0.1,
    });

    tl.to(".left-vid", {
      opacity: 1,
    }).to(".right-vid", {
      opacity: 1,
    });
  }, []);

  return (
    <section className="banner-section">
      <div className="max-w-screen-xl mx-auto px-[1em] py-[5em] flex flex-col justify-between items-center lg:flex-row">
        <div className="mb-12">
          <div className="overflow-hidden first-title">
            <h1 className="text-4xl md:text-6xl font-extrabold uppercase translate-y-[100%]">
              Turn Your Festival
            </h1>
          </div>

          <div className="overflow-hidden second-title">
            <h1 className="text-4xl md:text-6xl font-extrabold uppercase translate-y-[100%]">
              Into <span className="gradient">Memorable</span>
            </h1>
          </div>

          <div className="overflow-hidden third-title">
            <h1 className="text-4xl md:text-6xl font-extrabold uppercase translate-y-[100%]">
              Experience
            </h1>
          </div>

          <p className="my-5 break-words max-w-[400px] translate-y-[50%] opacity-0 fade-in">
            Make your life{"'"}s events into priceless memories. Live your life
            as it should be.
          </p>

          <Button href={"/events"} text="Discover More"></Button>
        </div>

        <div className="w-full md:w-[30em] lg:w-[25em] xl:w-[35em] flex justify-center vid-container">
          <div className="mr-12 left-vid opacity-0">
            <LoopingVideo path={"/videos/video1.mp4"}></LoopingVideo>
            <LoopingVideo path={"/videos/video2.mp4"}></LoopingVideo>
          </div>

          <div className="ml-12 right-vid opacity-0">
            <LoopingVideo path={"/videos/video3.mp4"}></LoopingVideo>
            <LoopingVideo path={"/videos/video4.mp4"}></LoopingVideo>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
