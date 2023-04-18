import React,{useState,useEffect} from 'react'
import { useParams } from "react-router";
import { detailClass } from '../../axios/classType';

const ClassDetail = () => {
  const params = useParams();
    
    const [detailData, setDetaildata] = useState({
      
    })
    

    const getClassDetail = () =>{
      const {id} =params
      detailClass(+id,(result)=>{
        setDetaildata({
           result})
      })
    }

    useEffect(()=>{
      getClassDetail()
    },[])

  return (
    <div></div>
  )
}

export default ClassDetail