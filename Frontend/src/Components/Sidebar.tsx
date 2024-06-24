import Subsidebar from "./Subsidebar";
import { DataSidebar } from "../Resources/Data";
import { useLocation } from "react-router-dom";

function Sidebar() {
  const { pathname } = useLocation();
  return (
    <div className="flex flex-col items-start justify-center min-w-full mr-1 ">
      <div className="">
        {DataSidebar.map((item, key) => (
          <div
            className={`${pathname == item.route ? "text-white font-medium bg-hoverbg rounded" : "text-gray-400"}`}
          >
            <Subsidebar
              key={key}
              name={item.name}
              route={item.route}
              img={item.img}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Sidebar;
