import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import SidebarHeader from "../Components/SidebarHeader";
import Sidebar from "../Components/Sidebar";
import SidebarSecondHalf from "../Components/SidebarSecondHalf";

function Home(): JSX.Element {
  return (
    <div className="relative flex flex-col h-100vh">
      {/* Navbar */}
      <div className="sticky top-0 z-10 flex items-center h-12 px-16 py-4 bg-navColor">
        <Navbar />
      </div>
      {/* Main Content */}
      <div className="flex justify-between ">
        {/* Sidebar Content */}
        <div className="h-screen bg-sideColor w-[20%] font-main pl-14 fixed top-12 z-10">
          <div className="flex items-center justify-center">
            <SidebarHeader />
          </div>
          <div>
            <Sidebar/>
          </div>
          <div className="text-[#909498] text-[13px] font-medium" >
            MODULES
          </div>
          <div>
            <SidebarSecondHalf/>
          </div>
        </div>
        {/* Display Components */}
        <div className=" bg-mainColor h-screen w-[80%] pr-14 absolute left-[20%] mb-8 overflow-auto pb-14 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Home;
