import React from "react";
import { AiOutlineHolder } from "react-icons/ai";
const Testimonial = () => {
  return (
    <>
      <section className="container mx-auto my-[7em]">
        <h4 className="text-[1.5rem] md:text-[1.5rem] font-bold  mb-4">
          WHAT OTHERS SAY
        </h4>
        <h1 className="text-[3rem] md:text-[3rem] font-extrabold  mb-20">TESTIMONIAL.</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-4 md:justify-around md:items-center lg:justify-between lg:items-center md:grid-row">

          <div className="card border shadow-xl bg-black p-8 rounded-2xl  xs:w-[320px] w-full">
            <div>
              <span className="text-5xl font-extrabold"><AiOutlineHolder></AiOutlineHolder></span>
            </div>
            <div className="card-body ">
              <p className="text-[18px]">I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.</p>
              <div className="flex justify-between items-center mt-4">
              <div>
               <h2 className="text-white font-medium text-[16px]"> <span className="text-blue-500"> @ </span> Sara Lee</h2>
               <p className="text-blue-700 text-[12px] mt-1">CFO of Acme Co</p>
              </div>
              <div>
                <img className="w-10 h-10 rounded-full object-cover" src="https://i.ibb.co/n0GRSQV/a.jpg" alt="" />
              </div>
              </div>
            </div>
          </div>


          <div className="card border shadow-xl bg-black p-8 rounded-2xl xs:w-[320px] w-full">
            <div>
              <span className="text-5xl font-extrabold"><AiOutlineHolder></AiOutlineHolder></span>
            </div>
            <div className="card-body">
              <p className="text-[18px]">I've  thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.</p>
              <div className="flex justify-between items-center mt-4">
              <div>
               <h2 className="text-white font-medium text-[16px]"> <span className="text-blue-500"> @ </span> Lisa Wang </h2>
               <p className="text-blue-700 text-[12px] mt-1">CTO of 456 Enterprises</p>
              </div>
              <div>
                <img className="w-10 h-10 rounded-full object-cover" src="https://i.ibb.co/cvQpSq5/b.jpg" alt="" />
              </div>
              </div>
            </div>
          </div>


          <div className="card border shadow-xl bg-black p-8 rounded-2xl xs:w-[320px] w-full">
            <div>
              <span className="text-5xl font-extrabold"><AiOutlineHolder></AiOutlineHolder></span>
            </div>
            <div className="card-body">
              <p className="text-[18px]">I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.</p>
              <div className="flex justify-between items-center mt-4">
              <div>
               <h2 className="text-white font-medium text-[16px]"> <span className="text-blue-500"> @ </span> Chris Brown</h2>
               <p className="text-blue-700 text-[12px] mt-1">COO of DEF Corp</p>
              </div>
              <div>
                <img className="w-10 h-10 rounded-full object-cover" src="https://i.ibb.co/6wTL28X/c.jpg" alt="" />
              </div>
              </div>
            </div>
          </div>


    
        </div>
      </section>
    </>
  );
};

export default Testimonial;
