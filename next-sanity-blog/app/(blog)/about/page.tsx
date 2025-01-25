import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="about flex flex-col md:flex-row items-center bg-white p-8 md:p-16">
      {/* Left Section for Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          className="rounded-full shadow-md object-cover w-full h-full"
          src="/images/sadiaimran.png" // Replace this with your image path
          alt="Sadiaimran"
          width={200}
          height={200}
          objectFit="cover" // Adjust this according to your image dimensions and requirements
        />
      </div>
      {/* Right Section for Content */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">ABOUT ME</h1>
        <h2 className="text-xl text-purple-600 font-semibold mb-4">Sadia Imran - Developer</h2>
        <p className="text-gray-600 mb-6">
          I have built this blog website to share engaging content with my audience. 
          The website leverages modern technologies like Sanity CMS to fetch and manage data efficiently. 
          My aim is to create a seamless reading experience with dynamic and up-to-date posts.
        </p>
      </div>
    </div>
  )
};

export default About;
