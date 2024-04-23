import { Link } from "react-router-dom";
import Home from "../Resources/images/Homepg.png";
import Reload from "../Resources/images/Reload.png";

function SidebarHeader(): JSX.Element {
  const handleClick = ()=>{
    window.location.reload();
  }
  return (
    <div className="flex items-center justify-center gap-2 m-2 text-white ">
      <Link to={''}>
        <div className="flex items-center justify-center w-full gap-2 px-5 py-1 transition cursor-pointer bg-sidebarHead rounded-2xl hover:transition hover:bg-hoverbg">
          <img src={Home} alt="svg" className="w-4 h-4" />
          <div className="text-sm">Home</div>
        </div>
      </Link>
      <div onClick={handleClick} className="bg-lightbg w-[30%] py-1 px-2 flex justify-center rounded-xl hover:transition transition hover:bg-hoverbg">
        <img src={Reload} className="w-4 h-4 " alt="" />
      </div>
    </div>
  );
}

export default SidebarHeader;
