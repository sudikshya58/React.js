import React from 'react';
import { Link } from 'react-router-dom';

export const About = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-10 mt-[90px] pb-[70px]'>
      <div className='w-full lg:w-2/3'>
        <img src="https://templates.envytheme.com/kreton/default/instagram-influencer/assets/img/about-img.png" alt="About Us" />
      </div>
      <div className=' p-10 lg:pl-[30px]'>
        <h1 className='capitalize text-[17px] font-normal mb-[10px]'>About Me</h1>
        <h2 className='mb-[18px] text-[36px] font-bold'>Welcome!</h2>
        <p className='leading-7 text-[#666666] text-[17px] mb-[15px]'>
          I'm a Fullstack Developer with a strong proficiency in Node.js and React. I have a passion for building efficient and scalable web applications that provide seamless user experiences. With my robust problem-solving skills and excellent communication abilities, I thrive in collaborative environments and am dedicated to continuous learning and improvement.
        </p>
        <p className='leading-7 text-[#666666] text-[17px] mb-[15px]'>
          In addition to my fullstack development expertise, I have extensive experience with various tools and technologies including Photoshop and Canva for design, and programming languages such as C, C++, and JavaScript. I am also well-versed in version control systems like Git and GitHub, which help me maintain clean and organized codebases.
        </p>
        <p className='leading-7 text-[#666666] text-[17px] mb-[15px]'>
          My mission is to leverage my technical skills and creative problem-solving abilities to contribute to impactful projects and innovative solutions. Whether it's developing user-friendly interfaces or optimizing backend processes, I am committed to delivering high-quality results.
        </p>
        <div>
          <Link to="#">
            <button className='text-black bg-gradient-to-l from-blue-200 via-blue-300 to-blue-100 text-[15px] font-bold p-6 w-[12rem]'>
              ABOUT ME
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
