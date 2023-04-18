import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Parallax, Pagination, Navigation } from "swiper";
import { getClassType } from "./../axios/classType";
import { getHabitat } from "../axios/habitat";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [ClassType, setClassType] = useState([]);
  const [habitat, setHabitat] = useState([]);
  

  

  useEffect(() => {
    getClassType((result) => setClassType(result));
  }, []);

  useEffect(() => {
    getHabitat((result) => setHabitat(result));
  }, []);

  return (
    <>
      <div className="relative h-screen bg-gray-100">
        <img
          className="w-full h-full object-cover"
          src="https://www.zoo.pt/media/banners/apadrinhamento-zoo_desktop.png"
          alt="gambar"
        />
        <div className="absolute top-20 right-10 z-5 p-4 bg-white bg-opacity-0 rounded">
          <h5
            className="text-3xl font-bold mb-2"
            style={{ fontFamily: "Zoo", fontSize: "4rem", color: "white" }}
          >
            Welcome to Zoo Feed !
          </h5>
        </div>
      </div>
      <div className="absolute top-50 right-10 z-10 bg-black my-2 bg-opacity-90 rounded-lg w-[300px] h-[50px]">
        <h5
          className="text-3xl font-bold mb-2 "
          style={{ fontFamily: "Zoo", fontSize: "4rem", color: "white" }}
        >
          Classification
        </h5>
      </div>

      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "background-image":
              "url(https://scz.org/wp-content/uploads/2018/03/giraffe-sedgwick-county-zoo-1024x682.jpg)",
          }}
          data-swiper-parallax="-23%"
        ></div>

        {ClassType.map((data) => {
          return (
            <>
              <SwiperSlide>
                <div className="text " data-swiper-parallax="-100">
                  <div
                    className="title "
                    style={{
                      fontFamily: "Zoo",
                      fontSize: "3rem",
                      color: "white",
                    }}
                    data-swiper-parallax="-300"
                  >
                    {data.name}
                  </div>
                  <Link >
                  <div className="bg-black bg-opacity-30 rounded-lg hover:scale-95 transition-all">
                    <img
                      className="rounded-lg mb-2 object-cover object-top "
                      src={data.imageUrl}
                      alt="gambar"
                    />
                    <p className="text-md px-6 py-2 text-justify font-noto font-normal">
                      {data.description}
                    </p>
                  </div>
                  </Link>
                </div>
              </SwiperSlide>

            </>
          );
        })}
      </Swiper>

      <div className="absolute top-50 left-10 z-10 bg-black my-2 bg-opacity-90 rounded-lg w-[300px] h-[50px]">
        <h5
          className="text-3xl font-bold mb-2"
          style={{ fontFamily: "Zoo", fontSize: "4rem", color: "white" }}
        >
          Habitats
        </h5>
      </div>

      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "background-image":
              "url(https://cdn.wcs.org/2022/05/23/3b758djh64_Julie_Larsen_Maher_0199_Visitors_with_Children_JUN_BZ_11_02_18.jpg)",
          }}
          data-swiper-parallax="-23%"
        ></div>

        {habitat.map((data) => {
          return (
            <>
              <SwiperSlide>
                <div className="float-right">
                  <div className="hover:scale-95 transition-all bg-black bg-opacity-50 rounded-lg ">
                    <div
                      className="text  "
                      data-swiper-parallax="-100"
                    >
                      <div
                        className="title text-justify "
                        style={{
                          fontFamily: "Zoo",
                          fontSize: "3rem",
                          color: "white",
                        }}
                        data-swiper-parallax="-300"
                      >
                        {data.name}
                      </div>

                      <div >
                        <img
                          className="rounded-lg mb-2 object-cover object-top "
                          src={data.imageUrl}
                          alt="gambar"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </>
  );
};

export default HomePage;
