"use client";

import useSmoothCarousel from "@/hooks/useSmoothCarousel";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import "./Categories.css";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  useSmoothCarousel(
    "#image-track",
    ".gallery-container",
    ".gallery-image",
    1200
  );

  return (
    <section className="gallery-section container mx-auto">
      <div className="gallery-container">
        <p>Latest Works</p>

        <div id="image-track">
          <Image
            className="gallery-image"
            src={"/images/1.jpg"}
            draggable="false"
            alt="travel"
            width={1000}
            height={1000}
          />

          <Image
            className="gallery-image"
            src={"/images/2.jpg"}
            draggable="false"
            alt="travel"
            width={1000}
            height={1000}
          />

          <Image
            className="gallery-image"
            src={"/images/3.jpg"}
            draggable="false"
            alt="travel"
            width={1000}
            height={1000}
          />

          <Image
            className="gallery-image"
            src={"/images/4.jpg"}
            draggable="false"
            alt="travel"
            width={1000}
            height={1000}
          />

          <Image
            className="gallery-image"
            src={"/images/5.jpg"}
            draggable="false"
            alt="travel"
            width={1000}
            height={1000}
          />

          <Image
            className="gallery-image"
            src={"/images/6.jpg"}
            draggable="false"
            alt="travel"
            width={1000}
            height={1000}
          />

          <Image
            className="gallery-image"
            src={"/images/7.jpg"}
            draggable="false"
            alt="travel"
            width={1000}
            height={1000}
          />

          <Image
            className="gallery-image"
            src={"/images/8.jpg"}
            draggable="false"
            alt="travel"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
