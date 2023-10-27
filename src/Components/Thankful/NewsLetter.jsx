/* eslint-disable @next/next/no-img-element */
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <>
      <div className="news-item bg-fixed text-white pt-8 my-20">
        <div className="mx-auto text-center md:w-4/12 my-8">
          <p className="text-yellow-600 font-extrabold text-3xl mb-2">
            --- NEWSLETTER ---
          </p>
          <p className="text-1xl uppercase border-y-4 py-4">
            Rerum numquam illum recusandae quia mollitia consequatur.
          </p>
        </div>
        
        <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
          <div>
            <img src="https://i.ibb.co/h8VgkzL/organisers.jpg" alt="" />
          </div>
          <div className="md:ml-10">
            <p>Aug 20, 2029</p>
            <p className="uppercase">WHERE CAN I GET SOME?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn btn-outline border-0 border-b-4 mt-4">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
