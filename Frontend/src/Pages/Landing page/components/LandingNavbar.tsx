import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../../Components/Button";
import TechTOnionsLogo from "../../../Resources/images/TechTOnions_Bot.png"
import { useEffect, useState } from "react";


export const LandingNavbar = () => {
  const navigate = useNavigate();
  const[url,setUrl]=useState('home')
  const {pathname} =useLocation();
  console.log(pathname)
  useEffect(()=>{
    setUrl(pathname);
  },[pathname])
  return (
    <div className="sticky top-0 z-20 px-16 py-4 bg-navColor">
        <div className="container flex items-center justify-between mx-auto">
          <h1 className="text-xl font-bold text-white">
          <img src={TechTOnionsLogo} alt="" className="h-8 w-18" />
          </h1>
          <div className="flex items-center gap-4 text-white justify-evenly">
            <div onClick={()=>{navigate('home')}} className={`text-lg font-semibold transition ${url==='/login/home'?'border-blue-600':'border-navColor'} duration-700 border-b-2 cursor-pointer hover:duration-700  hover:border-b-2 hover:border-blue-600 hover:transition`}>Home</div>
            <div onClick={()=>{navigate('about-us')}} className={`text-lg font-semibold transition duration-700 border-b-2 cursor-pointer hover:duration-700 ${url==='/login/about-us'?'border-blue-600':'border-navColor'} hover:border-b-2 hover:border-blue-600 hover:transition`}>About Us</div>
            <div onClick={()=>{navigate('contact-us')}}className={`text-lg font-semibold transition duration-700 border-b-2 cursor-pointer hover:duration-700 ${url==='/login/contact-us'?'border-blue-600':'border-navColor'} hover:border-b-2 hover:border-blue-600 hover:transition`}>Contact Us</div>
            <Button  text={"Contribute"} setRed={true} route={import.meta.env.VITE_GITHUB_URI} />
            <Button  text={"Login"} route={import.meta.env.VITE_DISCORD_AUTH} />
          </div>
        </div>
    </div>
  );
};
