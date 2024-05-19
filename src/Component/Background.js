import React from "react";

export const Background = () => {
  return (
    <>
       <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1650954316234-5d7160b24eed?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="w-full h-[85vh] object-cover"
      />
      <div className="absolute inset-0 flex justify-between mx-60 items-center text-white">
        <div className=" w-[70%]">
        <h1 className="text-4xl lg:text-6xl font-extrabold">Hello!</h1>

          <hr className="h-1 relative bg-white w-60" />

          <h1 className="text-[44px] text-blue-400 font-semibold leading-[60px] mt-[30px]">
          I'm a <br /> Fullstack Developer 
          </h1>
          <p className="mt-[40px] text-[18px opacity-[0.7] w-[80%] leading-8 font-bold">
          Proficient in Node.js and React, I bring strong problem-solving skills and excellent communication abilities to every project. Let's build something amazing together.
          </p>
          <button className=" bg-blue-400 mt-[40px] rounded-[30px] text-[20px] leading-3 font-bolad  p-5">Get a Qoute</button>
        </div>
       
      </div>
    </div>

    </>
  );
};
