"use client";
import hoverAnimation from "@/utils/HoverAnimation";
import Link from "next/link";
import { useEffect } from "react";
import "./Button.css";

const Button = ({ href, text }) => {
  useEffect(() => {
    const Btn = document.querySelector(".cta");
    const firstChild = document.querySelector(".cta span:first-child");
    const lastChild = document.querySelector(".cta span:last-child");
    const span = document.querySelector(".cta span");

    const BtnOptions = {
      hoverElement: Btn,
      direction: "top",
      changeElement: span,
      transition: 0.5,
      child: {
        firstChild,
        lastChild,
      },
      changeBG: false,
      positions: {
        defaultFirstChildPos: 200,
        defaultLastChildPos: 50,
        destinationFirstChildPos: 50,
        destinationLastChildPos: -60,
      },
    };

    hoverAnimation(BtnOptions);
  }, []);

  return (
    <Link href={href}>
      <button className="cta text-white rounded-lg px-5 py-3 font-semibold cursor-pointer translate-y-[50%] opacity-0 fade-in">
        <div>
          <span>{text}</span>
          <span>{text}</span>
        </div>
      </button>
    </Link>
  );
};

export default Button;
