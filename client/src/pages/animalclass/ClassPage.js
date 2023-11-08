import React,{useState,useEffect} from "react";
import { Outlet } from "react-router-dom";
import { getClassType } from "../../axios/classType";

const ClassPage = () => {

  const [ClassType, setClassType] = useState([])
  
  useEffect(()=>{
    getClassType((result)=>setClassType(result))
  },[])
  return (
    <>
    {
      ClassType.map((data)=>{
        return(
          <>
          
          <div>
        <div className="hover:scale-95 transition-all border-2 my-5 mx-40 shadow-lg rounded-xl py-5 bg-white">
          <h3 className="font-noto font-bold text-3xl text-center mb-4 uppercase">
            {data.name}
          </h3>
          <div class="flex justify-between mx-20">
          <img
                src={data.imageUrl}
                alt=""
                className="rounded-lg w-[400px] h-[250px] mb-10 object-cover object-top"
              />
            <div class="flex-2 mx-10">
              <div className="bg-white">
                <p className="">Description :</p>
                <p className="text-md px-6 py-2 text-justify font-noto font-normal">
                  {data.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
          
          </>
        )
    })
}
      
    </>
  );
};

export default ClassPage;
