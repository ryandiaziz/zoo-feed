import React from "react";
import lionImage from '../assets/lion.png'

const HomePage = () => {


  return (
    <>
      <section className="relative h-screen bg-gray-100">
        <img
          className="w-full h-full object-cover object-top"
          src={lionImage}
          alt="Dashboard"
        />
        <div className="absolute top-48 right-10 z-5 p-4 bg-white bg-opacity-0 rounded">
          <h1
            className="text-[80px] mb-2 font-amatic font-bold text-white"
          >
            Welcome to Zoo Feed !
          </h1>
        </div>
      </section>
    </>
  );
};

export default HomePage;
