import React from "react";
// import lionImage from '../assets/lion.png'

const HomePage = () => {


  return (
    <>
      <div className="flex justify-center items-center h-screen border-4 border-red-400">
        <div className="w-[200px] h-[200px] sm:bg-green-300 md:bg-blue-300" />
      </div>
      {/* <section className="relative h-screen bg-gray-100">
        <img
          className="w-full h-full object-cover object-top"
          src={lionImage}
          alt="gambar"
        />
        <div className="absolute top-48 right-10 z-5 p-4 bg-white bg-opacity-0 rounded">
          <h1
            className="text-[80px] mb-2 font-amatic font-bold text-white"
          >
            Welcome to Zoo Feed !
          </h1>
        </div>
      </section> */}
    </>
  );
};

export default HomePage;
