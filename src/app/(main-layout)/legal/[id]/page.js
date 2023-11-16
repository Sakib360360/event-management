"use client";
import React from "react";
// import { useRouter } from 'next/router';
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { data } from "autoprefixer";
import NextImage from "next/image";
import { legalItems } from "@/Components/Footer/Footer";

const singleLegal = ({ params }) => {
  const [eventData, setEventData] = useState();
  const id = params.id;
  const singleLegal=legalItems.find(item => item.ref === id);


  return (
    <div className="mb-20 ml-10">
        {singleLegal.content}
            </div>
  );
};

export default singleLegal;
