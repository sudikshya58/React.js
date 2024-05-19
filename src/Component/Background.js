import React from "react";

export const Background = () => {
  return (
    <>
      <div className="relative">
        <img
        src="https://png.pngtree.com/thumb_back/fh260/background/20220322/pngtree-background-biru-keren-dan-kosong-abstract-untuk-template-desain-powerpoint-ppt-image_1067979.jpg"
          alt=""
          className="w-full h-[100vh] object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center  items-center lg:items-start lg:justify-between mx-4 lg:mx-60 text-white">
          <div className="w-full lg:w-[70%] mt-[20px] md:mt-[16rem] justify-center text-center lg:text-left">
            <h1 className="text-4xl text-black lg:text-6xl font-extrabold">Hello!</h1>
            <hr className="h-1 bg-white w-32 lg:w-60 mx-auto lg:mx-0 my-4" />
            <h1 className="text-2xl lg:text-4xl text-blue-400 font-semibold leading-tight lg:leading-[60px] mt-4 lg:mt-8">
              I'm a <br /> Fullstack Developer
            </h1>
            <p className="mt-6 lg:mt-8 text-black lg:text-lg opacity-70 w-full lg:w-[80%] leading-7 lg:leading-8 font-bold mx-auto lg:mx-0">
              Proficient in Node.js and React, I bring strong problem-solving skills and excellent communication abilities to every project. Let's build something amazing together.
            </p>
            <button className="bg-blue-400 mt-6 lg:mt-8 rounded-full text-lg lg:text-xl font-bold py-3 px-6 hover:bg-blue-500 transition-colors duration-300">
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
