import { useEffect, useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import { ServerlistComponent } from "../Components/ServerlistComponent";
// import { getData } from "../Hooks/Login-hook";
import axios from "axios";

export const ServerlistPage = () => {
  
  const code = window.localStorage.getItem("code");
  const id = window.localStorage.getItem("id");
  
  const [idData,setidData]=useState();
  // const [flag,setFlag]=useState();
  const effectRan = useRef(false);
  useEffect(()=>{
    if (effectRan.current === false && id===null) {
      const fetchData = async () => {
        const Response = await axios.get(`${import.meta.env.VITE_IP}callback/?code=${code}`);
        if(Response.data){
          await window.localStorage.setItem("id",Response.data.user.id)
          setidData(Response.data.user.id);
          }
      };
      fetchData();
    }
    return () => {
      effectRan.current = true;
    };
  },[])
  // const flag = window.localStorage.getItem("id");

  return (
    <div>
      <div className="sticky top-0 z-10 flex items-center h-12 px-16 py-4 bg-navColor">
        <Navbar />
      </div>
      {idData ? (
        <div>
          <ServerlistComponent />
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen text-4xl font-bold text-white bg-slate-500 ">
          Loading....
        </div>
      )}
    </div>
  );
};

