import React, { useState, useEffect } from "react";

const HomePage = () => {
  
  return (
    <>
        <div className="relative h-screen bg-gray-100">
      <img className="w-full h-full object-cover" src="https://www.zoo.pt/media/banners/apadrinhamento-zoo_desktop.png" alt="gambar" />
      <div className="absolute top-20 right-10 z-5 p-4 bg-white bg-opacity-0 rounded">
        <h5 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Zoo', fontSize: '4rem',color: 'white' }}>Welcome to Zoo Feed !</h5>
      </div>
    </div>
    </>


  );
};

export default HomePage;
