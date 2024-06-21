import { useLocation, useNavigate } from "react-router-dom";
import { Discord, Github, LinkedIn, X } from "../../../Resources/Svg/SVG";
import TechTOnionsLogo from "../../../Resources/images/TechTOnions_Bot.png";
export const Footer = () => {
  const {pathname} = useLocation();
  const navigate = useNavigate();
  return (
    <div className="h-auto px-16 py-8 text-white rounded-t-[48px] relative z-10 bg-navColor">
      <div className="grid items-center justify-center grid-cols-6 my-8 z-25">
        <div className="flex items-center justify-start col-span-2 text-4xl font-extrabold text-center">
          <img src={TechTOnionsLogo} alt="" className="h-16 w-18" />
        </div>
        <div className="col-span-2 gap-0 ">
            <div className="flex items-center justify-center gap-4 ">
              <div onClick={()=>{navigate('/login/home')}} className={`${pathname=='/login/home'?'text-white font-medium':'text-gray-400' }  transition-all cursor-pointer hover:font-medium hover:text-white hover:transition-all`}>Home</div>
              <div onClick={()=>{navigate('/login/about-us')}} className={`${pathname=='/login/about-us'?'text-white font-medium':'text-gray-400' } transition-all cursor-pointer hover:font-medium hover:text-white hover:transition-all`}>About us</div>
              <div onClick={()=>{navigate('/login/contact-us')}} className={`${pathname=='/login/contact-us'?'text-white font-medium':'text-gray-400' } transition-all cursor-pointer hover:font-medium hover:text-white hover:transition-all`}>Contact us</div>
              <div onClick={()=>{window.location.assign(`${import.meta.env.VITE_GITHUB_URI}`)}} className="text-red-400 cursor-pointer">Contribute</div>
            </div>
        </div>
        <div className="flex items-center justify-end col-span-2 gap-4 ">
          <div>
            <Discord />
          </div>
          <div>
            <LinkedIn />
          </div>
          <div>
            <Github />
          </div>
          <div>
            <X/>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        2024-Designed by TechTOnions Team
      </div>
    </div>
  );
};
