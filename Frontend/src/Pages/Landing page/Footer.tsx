import { Discord, Github, LinkedIn, X } from "../../Resources/Svg/SVG";
import TechTOnionsLogo from "../../Resources/images/TechTOnions_Bot.png";
export const Footer = () => {
  return (
    <div className="h-auto p-8 text-white  bg-navColor">
      <div className="flex items-center justify-center text-3xl font-bold">
        A Discord Bot
      </div>
      <div className="grid justify-center grid-cols-6 my-8 z-25">
        <div className="flex items-center justify-center col-span-2 p-4 text-4xl font-extrabold text-center">
          <img src={TechTOnionsLogo} alt="" className="h-16 w-18" />
        </div>
        <div className="col-span-2 gap-0 ">
          <div className="grid grid-cols-3">
            <div className="flex flex-col">
              <div className="text-lg font-medium">Navigation</div>
              <div className="text-gray-400 ">Home</div>
              <div className="text-gray-400">About</div>
              <div className="text-gray-400">Status</div>
              <div className="text-gray-400">Dashboard</div>
            </div>
            <div className="flex flex-col">
              <div className="text-lg font-medium">Navigation</div>
              <div className="text-gray-400">Home</div>
              <div className="text-gray-400">About</div>
              <div className="text-gray-400">Status</div>
              <div className="text-gray-400">Dashboard</div>
            </div>
            <div className="flex flex-col">
              <div className="text-lg font-medium">Navigation</div>
              <div className="text-gray-400">Home</div>
              <div className="text-gray-400">About</div>
              <div className="text-gray-400">Status</div>
              <div className="text-gray-400">Dashboard</div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-start col-span-2 gap-4 px-12">
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
